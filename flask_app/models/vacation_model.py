from flask_app.config.mysqlconnection import connect_to_mysql
from flask_app import DATABASE
from flask import flash
from flask_app.models import user_model

class Vacation:
    def __init__(self,data):
        self.id = data['id']
        self.city = data['city']
        self.country = data['country']
    #    Add logic to save the lat/long of city or use API to make a selector
        self.date = data['date']
        # self.private = data['private']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user = None

    @classmethod
    def get_one(cls, data):
        query  = "SELECT * FROM nomadnirvana.vacations WHERE id = %(id)s;"
        results = connect_to_mysql(DATABASE).query_db(query, data)
        if results:
            return cls(results[0])
        return False
    
    @classmethod
    def get_all(cls):
        query= """
            SELECT * from nomadnirvana.vacations;
        """

        results = connect_to_mysql(DATABASE).query_db(query)

        all_vacations = []
        for row_from_db in results:
            vacation_instance = cls(row_from_db)
            all_vacations.append(vacation_instance)
        return all_vacations
    
    @classmethod
    def get_all_list_of_dicts(cls):
        query= """
            SELECT * from nomadnirvana.vacations;
        """
        results = connect_to_mysql(DATABASE).query_db(query)
        return results
    
    @classmethod
    def get_one_dict(cls, data):
        query= """
            SELECT * from nomadnirvana.vacations WHERE id= %(id)s;
        """
        results = connect_to_mysql(DATABASE).query_db(query, data)
        return results

    @classmethod
    def save(cls, data):
        query = """
        INSERT INTO nomadnirvana.vacations ( city, country, date, user_id )
        VALUES (%(city)s, %(country)s, %(date)s, %(user_id)s);
        """
        return connect_to_mysql(DATABASE).query_db(query, data)
    
    @classmethod
    def delete(cls, data):
        query= """ 
        DELETE FROM nomadnirvana.vacations WHERE vacations.id = %(id)s;
        """

        return connect_to_mysql(DATABASE).query_db(query,data)
    
    @classmethod
    def update(cls, data):
        query = """
        UPDATE nomadnirvana.vacations
        SET
        city = %(city)s,
        country = %(country)s, 
        date = %(date)s,
        WHERE vacations.id = %(id)s;
        """
        return connect_to_mysql(DATABASE).query_db(query, data)
    
    @staticmethod
    def validate_vacation(data):
        is_valid = True

        if len(data['city']) < 2:
            flash("City must be at least 2 characters.", "add")
            is_valid = False

        if len(data['country']) < 2:
            flash("Country must be at least 2 characters.", "add")
            is_valid = False

        if (data['date']) == "":
            is_valid = False
            flash("Please add the date of your trip.", "add")

        # if not "private" in data:
        #     is_valid = False
        #     flash("Please select a privacy setting for this trip. This can be changed later", "add")

        return is_valid