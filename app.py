from flask import Flask, request, jsonify
import database  # Importing your `database.py` module

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({"message": "Welcome to the Course Registration!"})

@app.route("/administrator/<administrator_id>", methods=["GET"])
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
    

@app.route("/administrators/<UIN>", methods=["DELETE"])
def delete_administrator(UIN):
    try:
        result = database.delete_user(UIN)
        if result:
            return jsonify({"message": "Administrator deleted successfully"})
        else:
            return jsonify({"error": "Administrator not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)