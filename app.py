from flask import Flask, request, jsonify
import database  # Importing your `database.py` module

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({"message": "Welcome to the Course Registration!"})

#Administrator

@app.route("/administrator/<UIN>", methods=["GET"])
def get_administrator(UIN):
    try:
        administrator = database.get_administrator(UIN)
        if administrator:
            return jsonify(administrator)
        else:
            return jsonify({"error": "Administrator not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/administrator", methods=["POST"])
def add_administrator():
    data = request.json
    try:
        result = database.add_administrator(
            UIN=data["UIN"],
            name=data["name"],
            email=data["email"],
            password=data["password"],  # Ensure to hash the password in production
            user_id=data["user_id"],
        )
        return jsonify({"success": result, "message": "Administrator added successfully!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

@app.route("/administrator/<UIN>", methods=["DELETE"])
def delete_administrator(UIN):
    try:
        result = database.delete_administrator(UIN)
        if result:
            return jsonify({"message": "Administrator deleted successfully"})
        else:
            return jsonify({"error": "Administrator not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500



#instructor


@app.route("/instructor/<instructor_id>", methods=["GET"])
def get_instructor(UIN):
    try:
        Instructor = database.get_instructor(UIN)
        if Instructor:
            return jsonify(Instructor)
        else:
            return jsonify({"error": "Instructor not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/instructor", methods=["POST"])
def add_instructor():
    data = request.json
    try:
        result = database.add_instructor(
            UIN=data["UIN"],
            name=data["name"],
            email=data["email"],
            dept_name=data["dept_name"],  # Ensure to hash the password in production
            course_id=data["course_id"],
        )
        return jsonify({"success": result, "message": "Instructor added successfully!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

@app.route("/instructor/<UIN>", methods=["DELETE"])
def delete_instructor(UIN):
    try:
        result = database.delete_instructor(UIN)
        if result:
            return jsonify({"message": "Instructor deleted successfully"})
        else:
            return jsonify({"error": "Instructor not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500


#Department

@app.route("/department/<department_id>", methods=["GET"])
def get_department(UIN):
    try:
        department = database.get_department(UIN)
        if department:
            return jsonify(department)
        else:
            return jsonify({"error": "Department not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/department", methods=["POST"])
def add_department():
    data = request.json
    try:
        result = database.add_department(
            dept_id=data["dept_id"],
            dept_name=data["dept_name"],
            dept_head=data["dept_head"],
        )
        return jsonify({"success": result, "message": "Department added successfully!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

@app.route("/departments/<dept_id>", methods=["DELETE"])
def delete_department(dept_id):
    try:
        result = database.delete_department(dept_id)
        if result:
            return jsonify({"message": "Department deleted successfully"})
        else:
            return jsonify({"error": "Department not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500


#student

@app.route("/student/<UIN>", methods=["GET"])
def get_student(UIN):
    try:
        student = database.get_student(UIN)
        if student:
            return jsonify(student)
        else:
            return jsonify({"error": "Student not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/student", methods=["POST"])
def add_student():
    data = request.json
    try:
        result = database.add_student(
            UIN=data["UIN"],
            name=data["name"],
            email=data["email"],
            user_id=data["user_id"],
            password=data["password"],  # Ensure to hash the password in production
            level=["level"],
            admin_id=["admin_id"],

        )
        return jsonify({"success": result, "message": "Student added successfully!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route("/student/<UIN>", methods=["DELETE"])
def delete_student(UIN):
    try:
        result = database.delete_student(UIN)
        if result:
            return jsonify({"message": "Student deleted successfully"})
        else:
            return jsonify({"error": "Student not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

#Course 

@app.route("/course/<course_id>", methods=["GET"])
def get_course(course_id):
    try:
        course = database.add_course(course_id)
        if course:
            return jsonify(course)
        else:
            return jsonify({"error": "Course not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/course", methods=["POST"])
def add_course():
    data = request.json
    try:
        result = database.add_course(
            course_id=data["course_id"],
            course_name=data["course_name"],
            credits=data["credits"],
            dept_name=data["dept_name"],  # Ensure to hash the password in production
            instructor=data["user_id"],
            instruction_method=data["instruction_method"],
            admin_id=data["admin_id"],
            day=data["day"],
            time=data["time"],
            location=data["location"],
            availability=data["availability"],
            prereq_id=data["prereq_id"],

        )
        return jsonify({"success": result, "message": "Course added successfully!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@app.route("/course/<course_id>", methods=["DELETE"])
def delete_course(course_id):
    try:
        result = database.delete_course(course_id)
        if result:
            return jsonify({"message": "Course deleted successfully"})
        else:
            return jsonify({"error": "Course not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)