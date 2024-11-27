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

#administrator

def get_administrator(UIN):
    """Fetch Administrator details by UIN."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = "SELECT * FROM `Administrator` WHERE `UIN` = %s"
            cursor.execute(sql, (UIN))
            return cursor.fetchone()

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
    
def delete_administrator(UIN):
    """Delete a Administrator by UIN."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = "DELETE FROM `Administrator` WHERE `UIN` = %s"
            cursor.execute(sql, (UIN))
        connection.commit()
        return cursor.rowcount > 0

#instructor

def get_instructor(UIN):
    """Fetch Administrator details by UIN."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = "SELECT * FROM `instructor` WHERE `UIN` = %s"
            cursor.execute(sql, (UIN))
            return cursor.fetchone()

def add_instructor(UIN, name, email, password, user_id):
    """Insert a new administrator."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = '''
            INSERT INTO `instructor` (UIN, name, email, password, user_id)
            VALUES (%s, %s, %s, %s, %s)
            '''
            cursor.execute(sql, (UIN, name, email, password, user_id))
        connection.commit()
        return True
    

def delete_instructor(UIN):
    """Delete a Administrator by UIN."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = "DELETE FROM `Administrator` WHERE `UIN` = %s"
            cursor.execute(sql, (UIN))
        connection.commit()
        return cursor.rowcount > 0
    


    #Department

def get_department(UIN):
    """Fetch Department details by UIN."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = "SELECT * FROM `department` WHERE `UIN` = %s"
            cursor.execute(sql, (UIN))
            return cursor.fetchone()

def add_department(UIN, name, email, password, user_id):
    """Insert a new Department."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = '''
            INSERT INTO `department` (UIN, name, email, password, user_id)
            VALUES (%s, %s, %s, %s, %s)
            '''
            cursor.execute(sql, (UIN, name, email, password, user_id))
        connection.commit()
        return True
    
def delete_department(UIN):
    """Delete a department by UIN."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = "DELETE FROM `Administrator` WHERE `UIN` = %s"
            cursor.execute(sql, (UIN))


    #Student

def get_student(UIN):
    """Fetch Administrator details by UIN."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = "SELECT * FROM `Student` WHERE `UIN` = %s"
            cursor.execute(sql, (UIN))
            return cursor.fetchone()

def add_student(UIN, name, email, password, user_id):
    """Insert a new administrator."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = '''
            INSERT INTO `Student` (UIN, name, email, password, user_id)
            VALUES (%s, %s, %s, %s, %s)
            '''
            cursor.execute(sql, (UIN, name, email, password, user_id))
        connection.commit()
        return True
    
def delete_student(UIN):
    """Delete a Student by UIN."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = "DELETE FROM `Student` WHERE `UIN` = %s"
            cursor.execute(sql, (UIN))


    #Course

def get_administrator(UIN):
    """Fetch Administrator details by UIN."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = "SELECT * FROM `Administrator` WHERE `UIN` = %s"
            cursor.execute(sql, (UIN))
            return cursor.fetchone()

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
    
def delete_administrator(UIN):
    """Delete a Administrator by UIN."""
    connection = get_connection()
    with connection:
        with connection.cursor() as cursor:
            sql = "DELETE FROM `Administrator` WHERE `UIN` = %s"
            cursor.execute(sql, (UIN))