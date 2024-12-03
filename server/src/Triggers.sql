CREATE TRIGGER reduce_seats_on_insert
AFTER INSERT ON Takes
FOR EACH ROW
BEGIN
    UPDATE Courses
    SET course_available_seats = course_available_seats - 1
    WHERE course_id = NEW.course_id;
END;

CREATE TRIGGER increase_seats_on_delete
AFTER DELETE ON Takes
FOR EACH ROW
BEGIN
    UPDATE Courses
    SET course_available_seats = course_available_seats + 1
    WHERE course_id = OLD.course_id;
END;