from flask_app import app
from flask import render_template, request, session, redirect, flash, jsonify
from flask_app.models import vacation_model

# Add trip routes
@app.route('/trip/add')
def render_add_trip():
    if "user_id" not in session:
        return redirect("/")
    return render_template("addtrip.html")

@app.route('/trip/new', methods=['POST'])
def process_add_trip():
    if not vacation_model.Vacation.validate_vacation(request.form):
        return redirect('/trip/add')
    
    user_id = session['user_id']

    data = {
        "city": request.form["city"],
        "country": request.form["country"],
        "date": request.form["date"],
        "user_id": user_id
    }
    
    vacation_model.Vacation.save(data)
    
    return redirect('/dashboard')

@app.route("/trip/view/<int:vacation_id>")
def process_view_trip(vacation_id):
    if "user_id" not in session:
        return redirect("/")
    
    data = {
        "id" : vacation_id
    }
    
    this_vacation = vacation_model.Vacation.get_one(data)
    
    return render_template("trip_dashboard.html", this_vacation=this_vacation)

@app.route("/trip/delete/<int:vacation_id>")
def delete_trip(vacation_id):
    if 'user_id' not in session:
        return redirect('/')
    
    data= {
        "id": vacation_id
    }

    this_vacation = vacation_model.Vacation.get_one(data)

    vacation_model.Vacation.delete(data)
    return redirect("/dashboard")

@app.route("/api/vacations/<int:vacation_id>")
def api_get_all(vacation_id):
    data = {
        "id": vacation_id
    }
    return vacation_model.Vacation.get_one_dict(data)