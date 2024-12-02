DELIMITER $$

CREATE TRIGGER after_takes_insert
AFTER INSERT ON Takes
FOR EACH ROW
BEGIN
    DECLARE current_seats INT;
    SELECT course_available_seats INTO current_seats 
    FROM Courses 
    WHERE course_id = NEW.course_id;

    IF current_seats > 0 THEN
        UPDATE Courses 
        SET course_available_seats = course_available_seats - 1 
        WHERE course_id = NEW.course_id;
    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'No available seats for this course';
    END IF;
END$$

DELIMITER;

DELIMITER $$

CREATE TRIGGER after_takes_delete
AFTER DELETE ON Takes
FOR EACH ROW
BEGIN
    UPDATE Courses
    SET course_available_seats = course_available_seats + 1
    WHERE course_id = OLD.course_id;
END$$

DELIMITER;