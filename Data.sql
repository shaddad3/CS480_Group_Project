INSERT INTO
    Administrator (
        administrator_username,
        administrator_password,
        administrator_first_name,
        administrator_last_name,
        administrator_email
    )
VALUES (
        'SamuelHaddad',
        'abc',
        'Samuel',
        'Haddad',
        'sammuelH@uic.edu'
    ),
    (
        'HrushikeshJoshi',
        'def',
        'Hrushikesh',
        'Joshi',
        'hrushikeshJ@uic.edu'
    ),
    (
        'PradnyaSonawane',
        'ghi',
        'Pradnya',
        'Sonawane',
        'pradnyaS@uic.edu'
    ),
    (
        'AyushShah',
        'jkl',
        'Ayush',
        'Shah',
        'ayushS@uic.edu'
    );

INSERT INTO
    Department (
        department_name,
        department_head_first_name,
        department_head_last_name
    )
VALUES (
        'Computer Science',
        'Robert',
        'Sloan'
    ),
    (
        'Mathematics',
        'Julius',
        'Ross'
    ),
    (
        'Biology',
        'Steven',
        'Jacobsen'
    ),
    ('Physics', 'Robert', 'Klie'),
    ('Chemistry', 'Wonhwa', 'Cho');

INSERT INTO
    Instructor (
        instructor_username,
        instructor_password,
        instructor_first_name,
        instructor_last_name,
        instructor_email,
        administrator_id,
        department_id
    )
VALUES (
        'johnsmith',
        'aBc',
        'John',
        'Smith',
        'john.smith@uic.edu',
        1,
        1
    ),
    (
        'janedoe',
        'dEf',
        'Jane',
        'Doe',
        'jane.doe@uic.edu',
        2,
        1
    ),
    (
        'michaelbrown',
        'gHi',
        'Michael',
        'Brown',
        'michael.brown@uic.edu',
        3,
        2
    ),
    (
        'susanwilson',
        'jKl',
        'Susan',
        'Wilson',
        'susan.wilson@uic.edu',
        4,
        2
    ),
    (
        'robertmiller',
        'lMn',
        'Robert',
        'Miller',
        'robert.miller@uic.edu',
        1,
        3
    ),
    (
        'emilydavis',
        'oPq',
        'Emily',
        'Davis',
        'emily.davis@uic.edu',
        2,
        3
    ),
    (
        'jamesjohnson',
        'rSt',
        'James',
        'Johnson',
        'james.johnson@uic.edu',
        3,
        4
    ),
    (
        'lindawilson',
        'uVw',
        'Linda',
        'Wilson',
        'linda.wilson@uic.edu',
        4,
        4
    ),
    (
        'charlesclark',
        'xYz',
        'Charles',
        'Clark',
        'charles.clark@uic.edu',
        1,
        5
    ),
    (
        'margaretlopez',
        'aBc',
        'Margaret',
        'Lopez',
        'margaret.lopez@uic.edu',
        2,
        5
    ),
    (
        'danielmoore',
        'dEf',
        'Daniel',
        'Moore',
        'daniel.moore@uic.edu',
        3,
        1
    ),
    (
        'rebeccajackson',
        'gHi',
        'Rebecca',
        'Jackson',
        'rebecca.jackson@uic.edu',
        4,
        1
    ),
    (
        'brianwhite',
        'jKl',
        'Brian',
        'White',
        'brian.white@uic.edu',
        1,
        2
    ),
    (
        'helenharris',
        'lMn',
        'Helen',
        'Harris',
        'helen.harris@uic.edu',
        2,
        2
    ),
    (
        'williammartin',
        'oPq',
        'William',
        'Martin',
        'william.martin@uic.edu',
        3,
        3
    ),
    (
        'karenthompson',
        'rSt',
        'Karen',
        'Thompson',
        'karen.thompson@uic.edu',
        4,
        3
    ),
    (
        'brianscott',
        'uVw',
        'Brian',
        'Scott',
        'brian.scott@uic.edu',
        1,
        4
    ),
    (
        'patriciagreen',
        'xYz',
        'Patricia',
        'Green',
        'patricia.green@uic.edu',
        2,
        4
    ),
    (
        'nathanclark',
        'aBc',
        'Nathan',
        'Clark',
        'nathan.clark@uic.edu',
        3,
        5
    ),
    (
        'susanmartin',
        'dEf',
        'Susan',
        'Martin',
        'susan.martin@uic.edu',
        4,
        5
    );

INSERT INTO
    Courses (
        course_name,
        course_credits,
        course_instruction_method,
        course_lecture_day,
        course_lecture_time,
        course_lecture_location,
        course_available_seats,
        prerequisite_course_id,
        administrator_id,
        department_id
    )
VALUES (
        'Introduction to Programming',
        3,
        'Online',
        'Monday',
        '9:00 AM - 11:00 AM',
        'Room 101',
        30,
        NULL,
        1,
        1
    ),
    (
        'Data Structures and Algorithms',
        4,
        'In-person',
        'Tuesday',
        '10:00 AM - 12:00 PM',
        'Room 202',
        25,
        1,
        2,
        1
    ),
    (
        'Web Development Fundamentals',
        3,
        'Hybrid',
        'Wednesday',
        '1:00 PM - 3:00 PM',
        'Room 103',
        20,
        1,
        3,
        1
    ),
    (
        'Artificial Intelligence',
        4,
        'Online',
        'Thursday',
        '2:00 PM - 4:00 PM',
        'Room 301',
        15,
        2,
        4,
        1
    ),
    (
        'Discrete Mathematics',
        3,
        'In-person',
        'Monday',
        '8:00 AM - 10:00 AM',
        'Room 104',
        30,
        NULL,
        1,
        2
    ),
    (
        'Linear Algebra',
        3,
        'Hybrid',
        'Tuesday',
        '9:30 AM - 11:30 AM',
        'Room 205',
        40,
        5,
        2,
        2
    ),
    (
        'Calculus I',
        4,
        'In-person',
        'Wednesday',
        '10:00 AM - 12:00 PM',
        'Room 106',
        35,
        NULL,
        3,
        2
    ),
    (
        'Number Theory',
        3,
        'Online',
        'Thursday',
        '1:00 PM - 3:00 PM',
        'Room 107',
        25,
        7,
        4,
        2
    ),
    (
        'Cell Biology',
        3,
        'Hybrid',
        'Monday',
        '11:00 AM - 1:00 PM',
        'Room 108',
        50,
        NULL,
        1,
        3
    ),
    (
        'Genetics',
        4,
        'In-person',
        'Tuesday',
        '8:00 AM - 10:00 AM',
        'Room 109',
        40,
        9,
        2,
        3
    ),
    (
        'Ecology',
        3,
        'Online',
        'Wednesday',
        '2:00 PM - 4:00 PM',
        'Room 110',
        45,
        9,
        3,
        3
    ),
    (
        'Molecular Biology',
        4,
        'In-person',
        'Thursday',
        '10:00 AM - 12:00 PM',
        'Room 111',
        30,
        10,
        4,
        3
    ),
    (
        'Classical Mechanics',
        4,
        'Hybrid',
        'Monday',
        '9:00 AM - 11:00 AM',
        'Room 201',
        25,
        NULL,
        1,
        4
    ),
    (
        'Electromagnetism',
        3,
        'Online',
        'Tuesday',
        '1:00 PM - 3:00 PM',
        'Room 202',
        40,
        13,
        2,
        4
    ),
    (
        'Quantum Mechanics',
        4,
        'In-person',
        'Wednesday',
        '10:00 AM - 12:00 PM',
        'Room 203',
        35,
        14,
        3,
        4
    ),
    (
        'Thermodynamics',
        3,
        'Hybrid',
        'Thursday',
        '2:00 PM - 4:00 PM',
        'Room 204',
        50,
        13,
        4,
        4
    ),
    (
        'General Chemistry',
        3,
        'In-person',
        'Monday',
        '8:00 AM - 10:00 AM',
        'Room 301',
        30,
        NULL,
        1,
        5
    ),
    (
        'Organic Chemistry',
        4,
        'Online',
        'Tuesday',
        '10:00 AM - 12:00 PM',
        'Room 302',
        20,
        17,
        2,
        5
    ),
    (
        'Analytical Chemistry',
        3,
        'Hybrid',
        'Wednesday',
        '1:00 PM - 3:00 PM',
        'Room 303',
        25,
        17,
        3,
        5
    ),
    (
        'Biochemistry',
        4,
        'In-person',
        'Thursday',
        '2:00 PM - 4:00 PM',
        'Room 304',
        30,
        18,
        4,
        5
    );

INSERT INTO
    Student (
        student_username,
        student_password,
        student_first_name,
        student_last_name,
        student_email,
        student_level,
        administrator_id
    )
VALUES (
        'alicejones',
        'abc',
        'Alice',
        'Jones',
        'alice.jones@uic.edu',
        'graduate',
        1
    ),
    (
        'bobsmith',
        'def',
        'Bob',
        'Smith',
        'bob.smith@uic.edu',
        'undergraduate',
        2
    ),
    (
        'carolwilliams',
        'ghi',
        'Carol',
        'Williams',
        'carol.williams@uic.edu',
        'phd',
        3
    ),
    (
        'davidjohnson',
        'jkl',
        'David',
        'Johnson',
        'david.johnson@uic.edu',
        'graduate',
        4
    ),
    (
        'emilybrown',
        'mno',
        'Emily',
        'Brown',
        'emily.brown@uic.edu',
        'undergraduate',
        1
    ),
    (
        'frankdavis',
        'pqr',
        'Frank',
        'Davis',
        'frank.davis@uic.edu',
        'phd',
        2
    ),
    (
        'gracemiller',
        'stu',
        'Grace',
        'Miller',
        'grace.miller@uic.edu',
        'graduate',
        3
    ),
    (
        'hannahwilson',
        'vwx',
        'Hannah',
        'Wilson',
        'hannah.wilson@uic.edu',
        'undergraduate',
        4
    ),
    (
        'ianmoore',
        'yzx',
        'Ian',
        'Moore',
        'ian.moore@uic.edu',
        'phd',
        1
    ),
    (
        'jacktaylor',
        'abc',
        'Jack',
        'Taylor',
        'jack.taylor@uic.edu',
        'graduate',
        2
    ),
    (
        'karenanderson',
        'def',
        'Karen',
        'Anderson',
        'karen.anderson@uic.edu',
        'undergraduate',
        3
    ),
    (
        'lucasjackson',
        'ghi',
        'Lucas',
        'Jackson',
        'lucas.jackson@uic.edu',
        'phd',
        4
    ),
    (
        'miahernandez',
        'jkl',
        'Mia',
        'Hernandez',
        'mia.hernandez@uic.edu',
        'graduate',
        1
    ),
    (
        'noahmartinez',
        'mno',
        'Noah',
        'Martinez',
        'noah.martinez@uic.edu',
        'undergraduate',
        2
    ),
    (
        'oliviarodriguez',
        'pqr',
        'Olivia',
        'Rodriguez',
        'olivia.rodriguez@uic.edu',
        'phd',
        3
    ),
    (
        'peterlee',
        'stu',
        'Peter',
        'Lee',
        'peter.lee@uic.edu',
        'graduate',
        4
    ),
    (
        'quinnallen',
        'vwx',
        'Quinn',
        'Allen',
        'quinn.allen@uic.edu',
        'undergraduate',
        1
    ),
    (
        'rachelyoung',
        'yzx',
        'Rachel',
        'Young',
        'rachel.young@uic.edu',
        'phd',
        2
    ),
    (
        'samwilkins',
        'abc',
        'Sam',
        'Wilkins',
        'sam.wilkins@uic.edu',
        'graduate',
        3
    ),
    (
        'tessacarter',
        'def',
        'Tessa',
        'Carter',
        'tessa.carter@uic.edu',
        'undergraduate',
        4
    ),
    (
        'ursulajames',
        'ghi',
        'Ursula',
        'James',
        'ursula.james@uic.edu',
        'phd',
        1
    ),
    (
        'victormartin',
        'jkl',
        'Victor',
        'Martin',
        'victor.martin@uic.edu',
        'graduate',
        2
    ),
    (
        'williambrown',
        'mno',
        'William',
        'Brown',
        'william.brown@uic.edu',
        'undergraduate',
        3
    ),
    (
        'xavierwilson',
        'pqr',
        'Xavier',
        'Wilson',
        'xavier.wilson@uic.edu',
        'phd',
        4
    ),
    (
        'zoeperez',
        'vwx',
        'Zoe',
        'Perez',
        'zoe.perez@uic.edu',
        'undergraduate',
        2
    ),
    (
        'alexmartin',
        'yzx',
        'Alex',
        'Martin',
        'alex.martin@uic.edu',
        'phd',
        3
    ),
    (
        'benjaminclark',
        'abc',
        'Benjamin',
        'Clark',
        'benjamin.clark@uic.edu',
        'graduate',
        4
    ),
    (
        'charlottegarcia',
        'def',
        'Charlotte',
        'Garcia',
        'charlotte.garcia@uic.edu',
        'undergraduate',
        1
    ),
    (
        'danielwilson',
        'ghi',
        'Daniel',
        'Wilson',
        'daniel.wilson@uic.edu',
        'phd',
        2
    ),
    (
        'emilyjones',
        'jkl',
        'Emily',
        'Jones',
        'emily.jones@uic.edu',
        'graduate',
        3
    ),
    (
        'florenceperez',
        'mno',
        'Florence',
        'Perez',
        'florence.perez@uic.edu',
        'undergraduate',
        4
    ),
    (
        'gregorymartinez',
        'pqr',
        'Gregory',
        'Martinez',
        'gregory.martinez@uic.edu',
        'phd',
        1
    ),
    (
        'hannahbaker',
        'stu',
        'Hannah',
        'Baker',
        'hannah.baker@uic.edu',
        'graduate',
        2
    ),
    (
        'isabellaevans',
        'vwx',
        'Isabella',
        'Evans',
        'isabella.evans@uic.edu',
        'undergraduate',
        3
    ),
    (
        'jacksonlong',
        'yzx',
        'Jackson',
        'Long',
        'jackson.long@uic.edu',
        'phd',
        4
    ),
    (
        'karinawilliams',
        'abc',
        'Karina',
        'Williams',
        'karina.williams@uic.edu',
        'graduate',
        1
    ),
    (
        'leonardhart',
        'def',
        'Leonard',
        'Hart',
        'leonard.hart@uic.edu',
        'undergraduate',
        2
    ),
    (
        'madisonhill',
        'ghi',
        'Madison',
        'Hill',
        'madison.hill@uic.edu',
        'phd',
        3
    ),
    (
        'nathankim',
        'jkl',
        'Nathan',
        'Kim',
        'nathan.kim@uic.edu',
        'graduate',
        4
    ),
    (
        'oliviamartin',
        'mno',
        'Olivia',
        'Martin',
        'olivia.martin@uic.edu',
        'undergraduate',
        1
    ),
    (
        'patricklewis',
        'pqr',
        'Patrick',
        'Lewis',
        'patrick.lewis@uic.edu',
        'phd',
        2
    ),
    (
        'quinnwalker',
        'stu',
        'Quinn',
        'Walker',
        'quinn.walker@uic.edu',
        'graduate',
        3
    ),
    (
        'robertchavez',
        'vwx',
        'Robert',
        'Chavez',
        'robert.chavez@uic.edu',
        'undergraduate',
        4
    ),
    (
        'sophiaadams',
        'yzx',
        'Sophia',
        'Adams',
        'sophia.adams@uic.edu',
        'phd',
        1
    ),
    (
        'travisrodriguez',
        'abc',
        'Travis',
        'Rodriguez',
        'travis.rodriguez@uic.edu',
        'graduate',
        2
    ),
    (
        'uriahthompson',
        'def',
        'Uriah',
        'Thompson',
        'uriah.thompson@uic.edu',
        'undergraduate',
        3
    ),
    (
        'veronicacameron',
        'ghi',
        'Veronica',
        'Cameron',
        'veronica.cameron@uic.edu',
        'phd',
        4
    ),
    (
        'williamgreen',
        'jkl',
        'William',
        'Green',
        'william.green@uic.edu',
        'graduate',
        1
    ),
    (
        'xanderwilliams',
        'mno',
        'Xander',
        'Williams',
        'xander.williams@uic.edu',
        'undergraduate',
        2
    ),
    (
        'yasmineharris',
        'pqr',
        'Yasmine',
        'Harris',
        'yasmine.harris@uic.edu',
        'phd',
        3
    ),
    (
        'zoechavez',
        'stu',
        'Zoe',
        'Chavez',
        'zoe.chavez@uic.edu',
        'graduate',
        4
    ),
    (
        'andrewsanchez',
        'vwx',
        'Andrew',
        'Sanchez',
        'andrew.sanchez@uic.edu',
        'undergraduate',
        1
    ),
    (
        'briancameron',
        'yzx',
        'Brian',
        'Cameron',
        'brian.cameron@uic.edu',
        'phd',
        2
    ),
    (
        'carolinemoore',
        'abc',
        'Caroline',
        'Moore',
        'caroline.moore@uic.edu',
        'graduate',
        3
    ),
    (
        'davidperez',
        'def',
        'David',
        'Perez',
        'david.perez@uic.edu',
        'undergraduate',
        4
    ),
    (
        'eleanorwillis',
        'ghi',
        'Eleanor',
        'Willis',
        'eleanor.willis@uic.edu',
        'phd',
        1
    ),
    (
        'felixdavis',
        'jkl',
        'Felix',
        'Davis',
        'felix.davis@uic.edu',
        'graduate',
        2
    ),
    (
        'gordonadams',
        'mno',
        'Gordon',
        'Adams',
        'gordon.adams@uic.edu',
        'undergraduate',
        3
    ),
    (
        'andrewthomas',
        'abc',
        'Andrew',
        'Thomas',
        'andrew.thomas@uic.edu',
        'undergraduate',
        1
    ),
    (
        'briannjohnson',
        'def',
        'Briann',
        'Johnson',
        'briann.johnson@uic.edu',
        'graduate',
        2
    ),
    (
        'carlosgarcia',
        'ghi',
        'Carlos',
        'Garcia',
        'carlos.garcia@uic.edu',
        'phd',
        3
    ),
    (
        'danieljackson',
        'jkl',
        'Daniel',
        'Jackson',
        'daniel.jackson@uic.edu',
        'undergraduate',
        4
    ),
    (
        'ellaevans',
        'mno',
        'Ella',
        'Evans',
        'ella.evans@uic.edu',
        'graduate',
        1
    ),
    (
        'felixroberts',
        'pqr',
        'Felix',
        'Roberts',
        'felix.roberts@uic.edu',
        'phd',
        2
    ),
    (
        'gabrielmorris',
        'stu',
        'Gabriel',
        'Morris',
        'gabriel.morris@uic.edu',
        'undergraduate',
        3
    ),
    (
        'hannahdavis',
        'vwx',
        'Hannah',
        'Davis',
        'hannah.davis@uic.edu',
        'graduate',
        4
    ),
    (
        'ignaciobaker',
        'yzx',
        'Ignacio',
        'Baker',
        'ignacio.baker@uic.edu',
        'phd',
        1
    ),
    (
        'jenniferwilson',
        'abc',
        'Jennifer',
        'Wilson',
        'jennifer.wilson@uic.edu',
        'undergraduate',
        2
    ),
    (
        'karlwhite',
        'def',
        'Karl',
        'White',
        'karl.white@uic.edu',
        'graduate',
        3
    ),
    (
        'lindaharris',
        'ghi',
        'Linda',
        'Harris',
        'linda.harris@uic.edu',
        'phd',
        4
    ),
    (
        'mariaallen',
        'jkl',
        'Maria',
        'Allen',
        'maria.allen@uic.edu',
        'undergraduate',
        1
    ),
    (
        'nicolaswilliams',
        'mno',
        'Nicolas',
        'Williams',
        'nicolas.williams@uic.edu',
        'graduate',
        2
    ),
    (
        'olivierbrown',
        'pqr',
        'Olivier',
        'Brown',
        'olivier.brown@uic.edu',
        'phd',
        3
    ),
    (
        'pamelawilkins',
        'stu',
        'Pamela',
        'Wilkins',
        'pamela.wilkins@uic.edu',
        'undergraduate',
        4
    ),
    (
        'quinnrodriguez',
        'yzx',
        'Quinn',
        'Rodriguez',
        'quinn.rodriguez@uic.edu',
        'graduate',
        1
    ),
    (
        'raquelthompson',
        'abc',
        'Raquel',
        'Thompson',
        'raquel.thompson@uic.edu',
        'phd',
        2
    ),
    (
        'sebastianlopez',
        'def',
        'Sebastian',
        'Lopez',
        'sebastian.lopez@uic.edu',
        'undergraduate',
        3
    ),
    (
        'tessasmith',
        'ghi',
        'Tessa',
        'Smith',
        'tessa.smith@uic.edu',
        'graduate',
        4
    ),
    (
        'ursulaallen',
        'jkl',
        'Ursula',
        'Allen',
        'ursula.allen@uic.edu',
        'phd',
        1
    ),
    (
        'vincentsanchez',
        'mno',
        'Vincent',
        'Sanchez',
        'vincent.sanchez@uic.edu',
        'undergraduate',
        2
    ),
    (
        'williambennett',
        'pqr',
        'William',
        'Bennett',
        'william.bennett@uic.edu',
        'graduate',
        3
    ),
    (
        'xeniasmith',
        'stu',
        'Xenia',
        'Smith',
        'xenia.smith@uic.edu',
        'phd',
        4
    ),
    (
        'yolandahunter',
        'yzx',
        'Yolanda',
        'Hunter',
        'yolanda.hunter@uic.edu',
        'undergraduate',
        1
    ),
    (
        'zacharymartinez',
        'abc',
        'Zachary',
        'Martinez',
        'zachary.martinez@uic.edu',
        'graduate',
        2
    ),
    (
        'aaronsmith',
        'def',
        'Aaron',
        'Smith',
        'aaron.smith@uic.edu',
        'phd',
        3
    ),
    (
        'bethanyjones',
        'ghi',
        'Bethany',
        'Jones',
        'bethany.jones@uic.edu',
        'undergraduate',
        4
    ),
    (
        'caitlynchavez',
        'jkl',
        'Caitlyn',
        'Chavez',
        'caitlyn.chavez@uic.edu',
        'graduate',
        1
    ),
    (
        'daniellewalker',
        'mno',
        'Danielle',
        'Walker',
        'danielle.walker@uic.edu',
        'phd',
        2
    ),
    (
        'ethanbrown',
        'pqr',
        'Ethan',
        'Brown',
        'ethan.brown@uic.edu',
        'undergraduate',
        3
    ),
    (
        'fionalewis',
        'stu',
        'Fiona',
        'Lewis',
        'fiona.lewis@uic.edu',
        'graduate',
        4
    ),
    (
        'gabriellawilson',
        'yzx',
        'Gabriella',
        'Wilson',
        'gabriella.wilson@uic.edu',
        'phd',
        1
    ),
    (
        'hayleygreen',
        'abc',
        'Hayley',
        'Green',
        'hayley.green@uic.edu',
        'undergraduate',
        2
    ),
    (
        'ivanperez',
        'def',
        'Ivan',
        'Perez',
        'ivan.perez@uic.edu',
        'graduate',
        3
    ),
    (
        'jacquelinesmith',
        'ghi',
        'Jacqueline',
        'Smith',
        'jacqueline.smith@uic.edu',
        'phd',
        4
    ),
    (
        'kendallhill',
        'jkl',
        'Kendall',
        'Hill',
        'kendall.hill@uic.edu',
        'undergraduate',
        1
    ),
    (
        'lucylong',
        'mno',
        'Lucy',
        'Long',
        'lucy.long@uic.edu',
        'graduate',
        2
    ),
    (
        'martinbrown',
        'pqr',
        'Martin',
        'Brown',
        'martin.brown@uic.edu',
        'phd',
        3
    ),
    (
        'nataliecooper',
        'stu',
        'Natalie',
        'Cooper',
        'natalie.cooper@uic.edu',
        'undergraduate',
        4
    ),
    (
        'oliversmith',
        'yzx',
        'Oliver',
        'Smith',
        'oliver.smith@uic.edu',
        'graduate',
        1
    ),
    (
        'paigeadams',
        'abc',
        'Paige',
        'Adams',
        'paige.adams@uic.edu',
        'phd',
        2
    ),
    (
        'quinnbrooks',
        'def',
        'Quinn',
        'Brooks',
        'quinn.brooks@uic.edu',
        'undergraduate',
        3
    ),
    (
        'ryansmith',
        'ghi',
        'Ryan',
        'Smith',
        'ryan.smith@uic.edu',
        'graduate',
        4
    ),
    (
        'sophiaroberts',
        'jkl',
        'Sophia',
        'Roberts',
        'sophia.roberts@uic.edu',
        'phd',
        1
    ),
    (
        'trinitywhite',
        'mno',
        'Trinity',
        'White',
        'trinity.white@uic.edu',
        'undergraduate',
        2
    );

INSERT INTO
    Teaches (instructor_id, course_id)
VALUES (1, 1),
    (2, 2),
    (11, 3),
    (12, 4),
    (3, 5),
    (4, 6),
    (13, 7),
    (14, 8),
    (5, 9),
    (6, 10),
    (15, 11),
    (16, 12),
    (7, 13),
    (8, 14),
    (17, 15),
    (18, 16),
    (9, 17),
    (10, 18),
    (19, 19),
    (19, 20);

INSERT INTO
    Takes (course_id, student_id)
VALUES (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5),
    (6, 6),
    (7, 7),
    (8, 8),
    (9, 9),
    (10, 10),
    (11, 11),
    (12, 12),
    (13, 13),
    (14, 14),
    (15, 15),
    (16, 16),
    (17, 17),
    (18, 18),
    (19, 19),
    (20, 20),
    (1, 21),
    (2, 22),
    (3, 23),
    (4, 24),
    (5, 25),
    (6, 26),
    (7, 27),
    (8, 28),
    (9, 29),
    (10, 30),
    (11, 31),
    (12, 32),
    (13, 33),
    (14, 34),
    (15, 35),
    (16, 36),
    (17, 37),
    (18, 38),
    (19, 39),
    (20, 40),
    (1, 41),
    (2, 42),
    (3, 43),
    (4, 44),
    (5, 45),
    (6, 46),
    (7, 47),
    (8, 48),
    (9, 49),
    (10, 50),
    (11, 51),
    (12, 52),
    (13, 53),
    (14, 54),
    (15, 55),
    (16, 56),
    (17, 57),
    (18, 58),
    (19, 59),
    (20, 60),
    (1, 61),
    (2, 62),
    (3, 63),
    (4, 64),
    (5, 65),
    (6, 66),
    (7, 67),
    (8, 68),
    (9, 69),
    (10, 70),
    (11, 71),
    (12, 72),
    (13, 73),
    (14, 74),
    (15, 75),
    (16, 76),
    (17, 77),
    (18, 78),
    (19, 79),
    (20, 80),
    (1, 81),
    (2, 82),
    (3, 83),
    (4, 84),
    (5, 85),
    (6, 86),
    (7, 87),
    (8, 88),
    (9, 89),
    (10, 90),
    (11, 91),
    (12, 92),
    (13, 93),
    (14, 94),
    (15, 95),
    (16, 96),
    (17, 97),
    (18, 98),
    (19, 99);