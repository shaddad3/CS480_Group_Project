INSERT INTO Administrator VALUES (111, 'Sammy', 'sammy@uic.edu', 'sammy', 'abc'),
(222, 'Hrushikesh', 'hrushi@uic.edu', 'hrushi', 'def'),
(333, 'Pradnya', 'pradnya@uic.edu', 'pradnya', 'ghi'),
(444, 'Ayush', 'ayush@uic.edu', 'ayush', 'jkl');
INSERT INTO Department VALUES (1, 'CS', 'Dr. Robert Sloan'),
(2, 'MATH', 'Dr. Julius Ross'),
(3, 'BIOLOGY, Dr. Mathew Perry'),
(4, 'PSYCHOLOGY', 'Dr. Anne Frank'),
(5, 'HISTORY', 'Dr. William Shakespear');
INSERT INTO Instructor VALUES (101, 'Dr. Sidharth Kumar', 'sidharth@uic.edu', 'CS', 'CS480', 111),
(102, 'Dr. Adam Koehler', 'adam@uic.edu', 'CS', 'CS251', 111),
(103, 'Dr. Ellen Kidane', 'ellen@uic.edu', 'CS', 'CS141', 111),
(104, 'Dr. David Hayes', 'david@uic.edu', 'CS', 'CS111', 111),
(105, 'Dr. Olivia Wilson', 'email105@uic.edu', 'MATH', 222),
(106, 'Dr. Olivia Davis', 'email106@uic.edu', 'MATH', 222),
(107, 'Dr. Isabella Garcia', 'email107@uic.edu', 'MATH', 222),
(108, 'Dr. Robert Haddad', 'email108@uic.edu', 'BIOLOGY', 333),
(109, 'Dr. John Garcia', 'email109@uic.edu', 'BIOLOGY', 333),
(110, 'Dr. John Lopez', 'email110@uic.edu',  'BIOLOGY', 333),
(111, 'Dr. John Jones', 'email111@uic.edu', 'PSYCHOLOGY', 444),
(112, 'Dr. Sophia Davis', 'email112@uic.edu', 'PSYCHOLOGY', 444),
(113, 'Dr. David Lopez', 'email113@uic.edu', 'PSYCHOLOGY', 444),
(114, 'Dr. Alice Garcia', 'email114@uic.edu', 'PSYCHOLOGY', 444),
(115, 'Dr. Robert Wilson', 'email115@uic.edu', 'HISTORY', 444),
(116, 'Dr. Isabella Lopez', 'email116@uic.edu', 'HISTORY', 444),
(117, 'Dr. John Davis', 'email117@uic.edu', 'HISTORY', 444),
(118, 'Dr. Sammy Martinez', 'email118@uic.edu', 'HISTORY', 444);

INSERT INTO Courses VALUES ('CS111', 'Program Desgin I', 3, 'CS', 'Dr. David Hayes', 'In-Person', 
111, 'Monday, Wednesday & Friday', '3:00-3:50pm', 'LC 004', 30, NULL),

('CS141', 'Program Desgin II', 3, 'CS', 'Dr. Ellen Kidane', 'Online', 
111, 'Monday, Wednesday & Friday', '1:00-1:50pm', 'SES 132', 30, 'CS111'),

('CS251', 'Data Structures & Algorithms', 3, 'CS', 'Dr. Adam Koehler', 'In-Person', 
111, 'Monday, Wednesday & Friday', '12:00-12:50pm', 'SES 130', 30, 'CS141'),

('CS480', 'Database Systems', 3, 'CS', 'Dr. Sidharth Kumar', 'In-Person', 
111, 'Tuesday & Thursday', '5:00-6:15pm', 'LC 006', 30, 'CS251'),

('M111', 'Algebra', 3, 'MATH', 'Dr. Olivia Wilson', 'In-Person', 
111, 'Monday, Wednesday & Friday', '3:00-3:50pm', 'LC 004', 30, NULL),

('M141', 'Statistics', 3, 'MATH', 'Dr. Olivia Davis', 'In-Person', 
111, 'Monday, Wednesday & Friday', '1:00-1:50pm', 'SES 132', 30, 'M111'),

('M251', 'Trigonometery', 3, 'MATH', 'Dr. Isabella Garcia', 'In-Person', 
111, 'Monday, Wednesday & Friday', '12:00-12:50pm', 'SES 130', 30, 'M141'),

('M480', 'Geometery', 3, 'MATH', 'Dr. Isabella Garcia', 'In-Person', 
111, 'Tuesday & Thursday', '5:00-6:15pm', 'LC 006', 30, 'M251'),

('BIO111', 'Human Anatomy', 3, 'BIOLOGY', 'Dr. John Garcia', 'In-Person', 
111, 'Monday, Wednesday & Friday', '3:00-3:50pm', 'LC 004', 30, NULL),

('BIO141', 'Plant Anatomy', 3, 'BIOLOGY', 'Dr. John Lopez', 'In-Person', 
111, 'Monday, Wednesday & Friday', '1:00-1:50pm', 'SES 132', 30, 'BIO111'),

('BIO251', 'Zoology', 3, 'BIOLOGY', 'Dr. Robert Haddad', 'In-Person', 
111, 'Monday, Wednesday & Friday', '12:00-12:50pm', 'SES 130', 30, 'BIO141'),

('PSY480', 'Child Psychology', 3, 'PSYCHOLOGY', 'Dr. David Lopez', 'Online', 
111, 'Tuesday & Thursday', '5:00-6:15pm', 'LC 006', 30, 'PSY251'),

('PSY480', 'Mental Health Awareness', 3, 'PSYCHOLOGY', 'Dr. Alice Garcia', 'In-Person', 
111, 'Tuesday & Thursday', '5:00-6:15pm', 'LC 006', 30, 'PSY251')

('HIS480', 'West History', 3, 'HISTORY', 'Dr. John Davis', 'Online', 
111, 'Tuesday & Thursday', '5:00-6:15pm', 'LC 006', 30, 'HIS251')

('HIS480', 'East History', 3, 'HISTORY', 'Dr. Sammy Martine', 'In-Person', 
111, 'Tuesday & Thursday', '5:00-6:15pm', 'LC 006', 30, 'HIS251');


INSERT INTO Teaches VALUES (101, 'CS480'), (102, 'CS251'), (103, 'CS141'), (104, 'CS111'),
(105, 'M480'), (106, 'M251'), (107, 'M141'), (108, 'CS111'),
(109, 'BIO480'), (110, 'BIO251'), (111, 'PSY141'), (112, 'PSY111'),
(113, 'PSY480'), (114, 'PSY251'), (115, 'HIS141'), (116, 'HIS111'), (117, 'HIS141'), (118, 'HIS111');

INSERT INTO Student VALUES (1, 'Olivia Haddad', 'email1@uic.edu', 'user_1', 'pass_574', 'Junior', 111),
(2, 'Emma Garcia', 'email2@uic.edu', 'user_2', 'pass_550', 'Senior', 333),
(3, 'Michael Martinez', 'email3@uic.edu', 'user_3', 'pass_51', 'Senior', 222),
(4, 'Sammy Martinez', 'email4@uic.edu', 'user_4', 'pass_933', 'Senior', 333),
(5, 'Alice Smith', 'email5@uic.edu', 'user_5', 'pass_566', 'Junior', 333),
(6, 'David Martinez', 'email6@uic.edu', 'user_6', 'pass_549', 'Senior', 444),
(7, 'Isabella Lopez', 'email7@uic.edu', 'user_7', 'pass_98', 'Junior', 333),
(8, 'David Wilson', 'email8@uic.edu', 'user_8', 'pass_557', 'Senior', 111),
(9, 'Alice Davis', 'email9@uic.edu', 'user_9', 'pass_58', 'Junior', 111),
(10, 'Robert Garcia', 'email10@uic.edu', 'user_10', 'pass_249', 'Junior', 111),
(11, 'Sammy Wilson', 'email11@uic.edu', 'user_11', 'pass_978', 'Junior', 111),
(12, 'Emma Johnson', 'email12@uic.edu', 'user_12', 'pass_988', 'Junior', 333),
(13, 'Isabella Jones', 'email13@uic.edu', 'user_13', 'pass_183', 'Junior', 111),
(14, 'Isabella Martinez', 'email14@uic.edu', 'user_14', 'pass_278', 'Senior', 333),
(15, 'Sophia Brown', 'email15@uic.edu', 'user_15', 'pass_368', 'Junior', 222),
(16, 'Michael Johnson', 'email16@uic.edu', 'user_16', 'pass_925', 'Junior', 444),
(17, 'Sammy Smith', 'email17@uic.edu', 'user_17', 'pass_536', 'Junior', 333),
(18, 'Olivia Haddad', 'email18@uic.edu', 'user_18', 'pass_496', 'Junior', 222),
(19, 'Robert Smith', 'email19@uic.edu', 'user_19', 'pass_48', 'Junior', 222),
(20, 'Michael Davis', 'email20@uic.edu', 'user_20', 'pass_798', 'Junior', 444),
(21, 'Sophia Martinez', 'email21@uic.edu', 'user_21', 'pass_206', 'Junior', 444),
(22, 'Emma Jones', 'email22@uic.edu', 'user_22', 'pass_182', 'Senior', 222),
(23, 'Robert Smith', 'email23@uic.edu', 'user_23', 'pass_772', 'Junior', 444),
(24, 'Sammy Davis', 'email24@uic.edu', 'user_24', 'pass_813', 'Senior', 111),
(25, 'Alice Haddad', 'email25@uic.edu', 'user_25', 'pass_880', 'Junior', 111),
(26, 'David Garcia', 'email26@uic.edu', 'user_26', 'pass_323', 'Senior', 333),
(27, 'Sammy Wilson', 'email27@uic.edu', 'user_27', 'pass_757', 'Junior', 111),
(28, 'John Haddad', 'email28@uic.edu', 'user_28', 'pass_272', 'Junior', 333),
(29, 'Alice Lopez', 'email29@uic.edu', 'user_29', 'pass_107', 'Junior', 111),
(30, 'Robert Martinez', 'email30@uic.edu', 'user_30', 'pass_634', 'Junior', 444),
(31, 'Robert Davis', 'email31@uic.edu', 'user_31', 'pass_207', 'Senior', 333),
(32, 'Sophia Davis', 'email32@uic.edu', 'user_32', 'pass_262', 'Junior', 222),
(33, 'Alice Jones', 'email33@uic.edu', 'user_33', 'pass_448', 'Senior', 111),
(34, 'Sammy Davis', 'email34@uic.edu', 'user_34', 'pass_755', 'Senior', 111),
(35, 'Sophia Martinez', 'email35@uic.edu', 'user_35', 'pass_610', 'Senior', 333),
(36, 'Alice Garcia', 'email36@uic.edu', 'user_36', 'pass_558', 'Senior', 222),
(37, 'David Brown', 'email37@uic.edu', 'user_37', 'pass_768', 'Senior', 222),
(38, 'Sophia Johnson', 'email38@uic.edu', 'user_38', 'pass_304', 'Junior', 444),
(39, 'Olivia Smith', 'email39@uic.edu', 'user_39', 'pass_867', 'Junior', 222),
(40, 'Sophia Garcia', 'email40@uic.edu', 'user_40', 'pass_456', 'Senior', 333),
(41, 'Emma Davis', 'email41@uic.edu', 'user_41', 'pass_843', 'Senior', 222),
(42, 'Robert Lopez', 'email42@uic.edu', 'user_42', 'pass_360', 'Senior', 222),
(43, 'Olivia Davis', 'email43@uic.edu', 'user_43', 'pass_668', 'Junior', 333),
(44, 'Sophia Garcia', 'email44@uic.edu', 'user_44', 'pass_705', 'Senior', 333),
(45, 'Olivia Haddad', 'email45@uic.edu', 'user_45', 'pass_702', 'Junior', 444),
(46, 'Alice Haddad', 'email46@uic.edu', 'user_46', 'pass_427', 'Senior', 333),
(47, 'Sammy Smith', 'email47@uic.edu', 'user_47', 'pass_891', 'Senior', 444),
(48, 'Alice Lopez', 'email48@uic.edu', 'user_48', 'pass_843', 'Junior', 111),
(49, 'Michael Garcia', 'email49@uic.edu', 'user_49', 'pass_334', 'Junior', 444),
(50, 'Sammy Wilson', 'email50@uic.edu', 'user_50', 'pass_747', 'Junior', 222),
(51, 'Michael Smith', 'email51@uic.edu', 'user_51', 'pass_55', 'Junior', 111),
(52, 'Isabella Lopez', 'email52@uic.edu', 'user_52', 'pass_313', 'Senior', 111),
(53, 'John Johnson', 'email53@uic.edu', 'user_53', 'pass_317', 'Senior', 222),
(54, 'Olivia Martinez', 'email54@uic.edu', 'user_54', 'pass_581', 'Junior', 111),
(55, 'Alice Haddad', 'email55@uic.edu', 'user_55', 'pass_558', 'Senior', 333),
(56, 'David Davis', 'email56@uic.edu', 'user_56', 'pass_536', 'Junior', 222),
(57, 'John Davis', 'email57@uic.edu', 'user_57', 'pass_429', 'Senior', 222),
(58, 'Michael Lopez', 'email58@uic.edu', 'user_58', 'pass_756', 'Junior', 111),
(59, 'Sophia Jones', 'email59@uic.edu', 'user_59', 'pass_902', 'Senior', 444),
(60, 'Sammy Lopez', 'email60@uic.edu', 'user_60', 'pass_951', 'Senior', 111),
(61, 'Isabella Martinez', 'email61@uic.edu', 'user_61', 'pass_304', 'Senior', 333),
(62, 'Isabella Lopez', 'email62@uic.edu', 'user_62', 'pass_196', 'Junior', 111),
(63, 'Olivia Brown', 'email63@uic.edu', 'user_63', 'pass_170', 'Senior', 444),
(64, 'Michael Garcia', 'email64@uic.edu', 'user_64', 'pass_249', 'Junior', 444),
(65, 'Olivia Jones', 'email65@uic.edu', 'user_65', 'pass_68', 'Junior', 111),
(66, 'Sammy Davis', 'email66@uic.edu', 'user_66', 'pass_60', 'Senior', 333),
(67, 'Alice Martinez', 'email67@uic.edu', 'user_67', 'pass_763', 'Senior', 444),
(68, 'Sophia Jones', 'email68@uic.edu', 'user_68', 'pass_665', 'Junior', 111),
(69, 'Robert Martinez', 'email69@uic.edu', 'user_69', 'pass_125', 'Junior', 444),
(70, 'Sammy Jones', 'email70@uic.edu', 'user_70', 'pass_731', 'Junior', 222),
(71, 'Emma Garcia', 'email71@uic.edu', 'user_71', 'pass_727', 'Senior', 111),
(72, 'Sammy Jones', 'email72@uic.edu', 'user_72', 'pass_392', 'Senior', 111),
(73, 'Olivia Lopez', 'email73@uic.edu', 'user_73', 'pass_689', 'Senior', 333),
(74, 'Sammy Brown', 'email74@uic.edu', 'user_74', 'pass_468', 'Senior', 333),
(75, 'Isabella Haddad', 'email75@uic.edu', 'user_75', 'pass_768', 'Senior', 444),
(76, 'Michael Wilson', 'email76@uic.edu', 'user_76', 'pass_490', 'Junior', 333),
(77, 'Sammy Davis', 'email77@uic.edu', 'user_77', 'pass_846', 'Senior', 333),
(78, 'Emma Smith', 'email78@uic.edu', 'user_78', 'pass_909', 'Junior', 111),
(79, 'Alice Martinez', 'email79@uic.edu', 'user_79', 'pass_556', 'Junior', 333),
(80, 'Sophia Garcia', 'email80@uic.edu', 'user_80', 'pass_548', 'Senior', 111),
(81, 'Sophia Brown', 'email81@uic.edu', 'user_81', 'pass_169', 'Junior', 222),
(82, 'Robert Haddad', 'email82@uic.edu', 'user_82', 'pass_882', 'Junior', 111),
(83, 'Alice Brown', 'email83@uic.edu', 'user_83', 'pass_146', 'Senior', 444),
(84, 'Alice Brown', 'email84@uic.edu', 'user_84', 'pass_675', 'Junior', 333),
(85, 'David Davis', 'email85@uic.edu', 'user_85', 'pass_740', 'Junior', 333),
(86, 'Sammy Smith', 'email86@uic.edu', 'user_86', 'pass_301', 'Junior', 222),
(87, 'Sophia Davis', 'email87@uic.edu', 'user_87', 'pass_695', 'Junior', 111),
(88, 'Emma Haddad', 'email88@uic.edu', 'user_88', 'pass_185', 'Senior', 444),
(89, 'John Lopez', 'email89@uic.edu', 'user_89', 'pass_536', 'Senior', 444),
(90, 'Michael Johnson', 'email90@uic.edu', 'user_90', 'pass_458', 'Junior', 111),
(91, 'David Lopez', 'email91@uic.edu', 'user_91', 'pass_508', 'Senior', 333),
(92, 'John Garcia', 'email92@uic.edu', 'user_92', 'pass_710', 'Junior', 333),
(93, 'Isabella Johnson', 'email93@uic.edu', 'user_93', 'pass_15', 'Junior', 444),
(94, 'David Wilson', 'email94@uic.edu', 'user_94', 'pass_730', 'Junior', 444),
(95, 'Sophia Garcia', 'email95@uic.edu', 'user_95', 'pass_86', 'Senior', 333),
(96, 'Michael Smith', 'email96@uic.edu', 'user_96', 'pass_955', 'Junior', 333),
(97, 'Emma Davis', 'email97@uic.edu', 'user_97', 'pass_459', 'Junior', 333),
(98, 'Isabella Martinez', 'email98@uic.edu', 'user_98', 'pass_453', 'Senior', 444),
(99, 'Emma Johnson', 'email99@uic.edu', 'user_99', 'pass_898', 'Junior', 222),
(100, 'Michael Davis', 'email100@uic.edu', 'user_100', 'pass_947', 'Senior', 444);

INSERT INTO Takes VALUES (1, 'CS480', 1000);