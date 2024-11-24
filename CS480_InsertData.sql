INSERT INTO Administrator VALUES (111, 'Sammy', 'sammy@uic.edu', 'sammy', 'abc');
INSERT INTO Department VALUES (1, 'CS', 'Dr. Robert Sloan');
INSERT INTO Department VALUES (2, 'MATH', 'Dr. Julius Ross');
INSERT INTO Instructor VALUES (101, 'Dr. Sidharth Kumar', 'sidharth@uic.edu', 'CS', 'CS480', 111);
INSERT INTO Instructor VALUES (102, 'Dr. Adam Koehler', 'adam@uic.edu', 'CS', 'CS251', 111);
INSERT INTO Instructor VALUES (103, 'Dr. Ellen Kidane', 'ellen@uic.edu', 'CS', 'CS141', 111);
INSERT INTO Instructor VALUES (104, 'Dr. David Hayes', 'david@uic.edu', 'CS', 'CS111', 111);
INSERT INTO Courses VALUES ('CS111', 'Program Desgin I', 3, 'CS', 'Dr. David Hayes', 'In-Person', 
111, 'Monday, Wednesday & Friday', '3:00-3:50pm', 'LC 004', 30, NULL);
INSERT INTO Courses VALUES ('CS141', 'Program Desgin II', 3, 'CS', 'Dr. Ellen Kidane', 'In-Person', 
111, 'Monday, Wednesday & Friday', '1:00-1:50pm', 'SES 132', 30, 'CS111');
INSERT INTO Courses VALUES ('CS251', 'Data Structures & Algorithms', 3, 'CS', 'Dr. Adam Koehler', 'In-Person', 
111, 'Monday, Wednesday & Friday', '12:00-12:50pm', 'SES 130', 30, 'CS141');
INSERT INTO Courses VALUES ('CS480', 'Database Systems', 3, 'CS', 'Dr. Sidharth Kumar', 'In-Person', 
111, 'Tuesday & Thursday', '5:00-6:15pm', 'LC 006', 30, 'CS251');
INSERT INTO Teaches VALUES (101, 'CS480');
INSERT INTO Teaches VALUES (102, 'CS251');
INSERT INTO Teaches VALUES (103, 'CS141');
INSERT INTO Teaches VALUES (104, 'CS111');
INSERT INTO Student VALUES (1, 'Sammy Haddad', 'sammy@uic.edu', 'sammy', 'abc', 'Senior', 111);
INSERT INTO Takes VALUES (1, 'CS480', 1000);
