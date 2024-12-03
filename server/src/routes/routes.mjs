import express from "express";

import { Login, Logout, Profile } from "./authentication.mjs";

import {
  fetchAdministrators,
  fetchDepartments,
  fetchInstructors,
  fetchCourses,
  fetchStudents,
  fetchTakes,
  fetchTeaches,
  fetchTakesForStudent,
  fetchCourseNamesTakenByStudent,
  CoursesWithPrerequisites,
  addDepartment,
  addInstructor,
  addCourse,
  addStudent,
  addTake,
  addTeach,
  removeDepartment,
  removeInstructor,
  removeCourse,
  removeStudent,
  removeTake,
  removeTeach,
} from "./api.mjs";

const router = express.Router();

// Authentication
router.post("/login", Login);
router.post("/profile", Profile);
router.post("/logout", Logout);

// fetch
router.get("/fetch_administrators", fetchAdministrators);
router.get("/fetch_departments", fetchDepartments);
router.get("/fetch_instructors", fetchInstructors);
router.get("/fetch_courses", fetchCourses);
router.get("/fetch_students", fetchStudents);
router.get("/fetch_takes", fetchTakes);
router.get("/fetch_teaches", fetchTeaches);
router.get("/fetch_takes_for_student/:student_id", fetchTakesForStudent);
router.get(
  "/fetch_course_names_taken_by_student/:student_id",
  fetchCourseNamesTakenByStudent
);
router.get(
  "/fetch_courses_with_prerequisites/:course_id",
  CoursesWithPrerequisites
);

// add
router.post("/add_department", addDepartment);
router.post("/add_instructor", addInstructor);
router.post("/add_course", addCourse);
router.post("/add_student", addStudent);
router.post("/add_take", addTake);
router.post("/add_teach", addTeach);

// remove
router.post("/remove_department", removeDepartment);
router.post("/remove_instructor", removeInstructor);
router.post("/remove_course", removeCourse);
router.post("/remove_student", removeStudent);
router.post("/remove_take", removeTake);
router.post("/remove_teach", removeTeach);

export default router;
