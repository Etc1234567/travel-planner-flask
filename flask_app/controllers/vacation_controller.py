from flask_app import app
from flask import render_template, request, session, redirect, flash
from flask_app.models import vacation_model

# Add trip routes
@app.route('/trip/add')
def render_add_trip():
    return render_template("addtrip.html")

@app.route('/trip/new', methods=['POST'])
def process_add_trip():
    if not vacation_model.Vacation.validate_vacation(request.form):
        return redirect('/')
    
    return redirect('/dashboard')