# import os
# import pymysql

# def get_connection():
#     """Create and return a new database connection."""
#     return pymysql.connect(
#         host=os.getenv("DB_HOST"),
#         user=os.getenv("DB_USER"),
#         password=os.getenv("DB_PASSWORD"),
#         database=os.getenv("DB_NAME"),
#         charset='utf8mb4',
#         cursorclass=pymysql.cursors.DictCursor
#     )

# #administrator

# def get_administrator(UIN):
#     connection = get_connection()
#     with connection:
#         with connection.cursor() as cursor:
#             sql = "SELECT * FROM `administrator` WHERE `UIN` = %s"
#             cursor.execute(sql, (UIN))
#             return cursor.fetchone()

# def add_administrator(UIN, name, email, password, user_id):
#     connection = get_connection()
#     with connection:
#         with connection.cursor() as cursor:
#             sql = '''
#             INSERT INTO `administrator` (UIN, name, email, password, user_id)
#             VALUES (%s, %s, %s, %s, %s)
#             '''
#             cursor.execute(sql, (UIN, name, email, password, user_id))
#         connection.commit()
#         return True
    
# def delete_administrator(UIN):
#     connection = get_connection()
#     with connection:
#         with connection.cursor() as cursor:
#             sql = "DELETE FROM `administrator` WHERE `UIN` = %s"
#             cursor.execute(sql, (UIN))
#         connection.commit()
#         return cursor.rowcount > 0

# #instructor

# def get_instructor(UIN):
#     connection = get_connection()
#     with connection:
#         with connection.cursor() as cursor:
#             sql = "SELECT * FROM `instructor` WHERE `UIN` = %s"
#             cursor.execute(sql, (UIN))
#             return cursor.fetchone()

# def add_instructor(UIN, name, email, dept_name, course_id, admin_id):
#     connection = get_connection()
#     with connection:
#         with connection.cursor() as cursor:
#             sql = '''
#             INSERT INTO `instructor` (UIN, name, email, dept_name, course_id, admin_id)
#             VALUES (%s, %s, %s, %s, %s)
#             '''
#             cursor.execute(sql, (UIN, name, email, dept_name, course_id, admin_id))
#         connection.commit()
#         return True
    

# def delete_instructor(UIN):
#     connection = get_connection()
#     with connection:
#         with connection.cursor() as cursor:
#             sql = "DELETE FROM `Instructor` WHERE `UIN` = %s"
#             cursor.execute(sql, (UIN))
#         connection.commit()
#         return cursor.rowcount > 0
    

# #Department

# def get_department(dept_id):
#     connection = get_connection()
#     with connection:
#         with connection.cursor() as cursor:
#             sql = "SELECT * FROM `department` WHERE `dept_id` = %s"
#             cursor.execute(sql, (dept_id))
#             return cursor.fetchone()

# def add_department(dept_id, dept_name, dept_head):
#     connection = get_connection()
#     with connection:
#         with connection.cursor() as cursor:
#             sql = '''
#             INSERT INTO `department` (dept_id, dept_name, dept_head)
#             VALUES (%s, %s, %s)
#             '''
#             cursor.execute(sql, (dept_id, dept_name, dept_head))
#         connection.commit()
#         return True
    
# def delete_department(dept_id):
#     connection = get_connection()
#     with connection:
#         with connection.cursor() as cursor:
#             sql = "DELETE FROM `department` WHERE `dept_id` = %s"
#             cursor.execute(sql, (dept_id))

# #Student

# def get_student(UIN):
#     connection = get_connection()
#     with connection:
#         with connection.cursor() as cursor:
#             sql = "SELECT * FROM `student` WHERE `UIN` = %s"
#             cursor.execute(sql, (UIN))
#             return cursor.fetchone()

# def add_student(UIN, name, email, user_id, password, level, admin_id):
#     connection = get_connection()
#     with connection:
#         with connection.cursor() as cursor:
#             sql = '''
#             INSERT INTO `Student` (UIN, name, email, user_id, password, level, admin_id)
#             VALUES (%s, %s, %s, %s, %s, %s, %s)
#             '''
#             cursor.execute(sql, (UIN, name, email, user_id, password, level, admin_id))
#         connection.commit()
#         return True
    
# def delete_student(UIN):
#     connection = get_connection()
#     with connection:
#         with connection.cursor() as cursor:
#             sql = "DELETE FROM `Student` WHERE `UIN` = %s"
#             cursor.execute(sql, (UIN))

# #Course

# def get_course(course_id):
#     connection = get_connection()
#     with connection:
#         with connection.cursor() as cursor:
#             sql = "SELECT * FROM `Course` WHERE `course_id` = %s"
#             cursor.execute(sql, (course_id))
#             return cursor.fetchone()

# def add_course(course_id, course_name, credits, dept_name, instructor, instruction_method, admin_id, day, time, location, availability, prereq_id):
#     connection = get_connection()
#     with connection:
#         with connection.cursor() as cursor:
#             sql = '''
#             INSERT INTO `course` (course_id, course_name, credits, dept_name, instructor, instruction_method, admin_id, day, time, location, availability, prereq_id)
#             VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
#             '''
#             cursor.execute(sql, (course_id, course_name, credits, dept_name, instructor, instruction_method, admin_id, day, time, location, availability, prereq_id))
#         connection.commit()
#         return True
    
# def delete_course(course_id):
#     connection = get_connection()
#     with connection:
#         with connection.cursor() as cursor:
#             sql = "DELETE FROM `Course` WHERE `course_id` = %s"
#             cursor.execute(sql, (course_id))