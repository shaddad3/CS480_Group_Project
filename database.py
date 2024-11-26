import os
import pymysql

def get_connection():
    """Create and return a new database connection."""
    return pymysql.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME"),
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor
    )

def add_administrator(UIN, name, email, password, user_id):
    """Insert a new administrator."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = '''
            INSERT INTO `administrator` (UIN, name, email, password, user_id)
            VALUES (%s, %s, %s, %s, %s)
            '''
            cursor.execute(sql, (UIN, name, email, password, user_id))
        connection.commit()
        return True
    
def get_administrator(UIN):
    """Fetch user details by UIN."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = "SELECT * FROM `users` WHERE `UIN` = %s"
            cursor.execute(sql, (UIN))
            return cursor.fetchone()


def delete_administrator(UIN):
    """Delete a user by UIN."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = "DELETE FROM `users` WHERE `UIN` = %s"
            cursor.execute(sql, (UIN))
        connection.commit()
        return cursor.rowcount > 0
