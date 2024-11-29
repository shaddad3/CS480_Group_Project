CREATE DATABASE IF NOT EXISTS course_registration_website;

USE course_registration_website;

CREATE TABLE Administrator (
    UIN INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    used_id VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);

CREATE TABLE Department (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(100) UNIQUE,
    dept_head VARCHAR(100)
);

CREATE TABLE Instructor (
    UIN INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    dept_name VARCHAR(100) NOT NULL,
    course_id VARCHAR(100),
    admin_id INT NOT NULL,
    FOREIGN KEY (admin_id) REFERENCES Administrator (UIN) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (dept_name) REFERENCES Department (dept_name) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Courses (
    course_id VARCHAR(100) PRIMARY KEY,
    course_name VARCHAR(100),
    credits INT,
    dept_name VARCHAR(100) NOT NULL,
    instructor VARCHAR(100),
    instruction_method VARCHAR(100),
    admin_id INT NOT NULL,
    day VARCHAR(100),
    time VARCHAR(100),
    location VARCHAR(100),
    availability INT,
    prereq_id VARCHAR(100),
    FOREIGN KEY (prereq_id) REFERENCES Courses (course_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (admin_id) REFERENCES Administrator (UIN) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (dept_name) REFERENCES Department (dept_name) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Teaches (
    inst_id INT,
    course_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (inst_id, course_id),
    FOREIGN KEY (inst_id) REFERENCES Instructor (UIN) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (course_id) REFERENCES Courses (course_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Student (
    UIN INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    user_id VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    level VARCHAR(20),
    admin_id INT NOT NULL,
    FOREIGN KEY (admin_id) REFERENCES Administrator (UIN) ON DELETE CASCADE ON UPDATE CASCADE
);

-- This table is actually unnecessary as this info is just a duplicate of the Takes relation
-- CREATE TABLE Student_Courses (
--     student_id INT,
--     course_id VARCHAR(50),
--     PRIMARY KEY (student_id, course_id),
--     FOREIGN KEY (student_id) REFERENCES Student (UIN) ON DELETE CASCADE ON UPDATE CASCADE,
--     FOREIGN KEY (course_id) REFERENCES Courses (course_id) ON DELETE CASCADE ON UPDATE CASCADE
-- );

CREATE TABLE Takes (
    student_id INT,
    course_id VARCHAR(100) NOT NULL,
    fee_amt INT,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Student (UIN) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (course_id) REFERENCES Courses (course_id) ON DELETE CASCADE ON UPDATE CASCADE
);
