DROP DATABASE IF EXISTS course_registration_website;

CREATE DATABASE IF NOT EXISTS course_registration_website;

USE course_registration_website;

CREATE TABLE Administrator (
    administrator_id INT PRIMARY KEY AUTO_INCREMENT,
    administrator_username VARCHAR(50) UNIQUE,
    administrator_password VARCHAR(255),
    administrator_first_name VARCHAR(50),
    administrator_last_name VARCHAR(50),
    administrator_email VARCHAR(320)
);

CREATE TABLE Department (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) UNIQUE,
    department_head_first_name VARCHAR(50),
    department_head_last_name VARCHAR(50)
);

CREATE TABLE Instructor (
    instructor_id INT PRIMARY KEY AUTO_INCREMENT,
    instructor_username VARCHAR(50) UNIQUE,
    instructor_password VARCHAR(255),
    instructor_first_name VARCHAR(100),
    instructor_last_name VARCHAR(50),
    instructor_email VARCHAR(320),
    administrator_id INT,
    department_id INT,
    FOREIGN KEY (administrator_id) REFERENCES Administrator (administrator_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (department_id) REFERENCES Department (department_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) UNIQUE,
    course_credits INT,
    course_instruction_method VARCHAR(50),
    course_lecture_day VARCHAR(10),
    course_lecture_time VARCHAR(20),
    course_lecture_location VARCHAR(50),
    course_available_seats INT,
    prerequisite_course_id INT,
    administrator_id INT,
    department_id INT,
    FOREIGN KEY (prerequisite_course_id) REFERENCES Courses (course_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (administrator_id) REFERENCES Administrator (administrator_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (department_id) REFERENCES Department (department_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Teaches (
    instructor_id INT,
    course_id INT,
    PRIMARY KEY (instructor_id, course_id),
    FOREIGN KEY (instructor_id) REFERENCES Instructor (instructor_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (course_id) REFERENCES Courses (course_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Student (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_username VARCHAR(50) UNIQUE,
    student_password VARCHAR(255),
    student_first_name VARCHAR(50),
    student_last_name VARCHAR(50),
    student_email VARCHAR(320),
    student_level VARCHAR(20),
    administrator_id INT,
    FOREIGN KEY (administrator_id) REFERENCES Administrator (administrator_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Takes (
    course_id INT,
    student_id INT,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Student (student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (course_id) REFERENCES Courses (course_id) ON DELETE CASCADE ON UPDATE CASCADE
);