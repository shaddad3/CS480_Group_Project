const base_url = "http://localhost:3000";

// fetchs
export async function fetchAdministrators() {
  try {
    const response = await fetch(`${base_url}/fetch_administrators`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all administrators:", error);
  }
}

export async function fetchDepartments() {
  try {
    const response = await fetch(`${base_url}/fetch_departments`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all departments:", error);
  }
}

export async function fetchInstructors() {
  try {
    const response = await fetch(`${base_url}/fetch_instructors`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all instructors:", error);
  }
}

export async function fetchCourses() {
  try {
    const response = await fetch(`${base_url}/fetch_courses`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all courses:", error);
  }
}

export async function fetchStudents() {
  try {
    const response = await fetch(`${base_url}/fetch_students`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all students:", error);
  }
}

export async function fetchTakes() {
  try {
    const response = await fetch(`${base_url}/fetch_takes`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all registrations:", error);
  }
}

export async function fetchTeaches() {
  try {
    const response = await fetch(`${base_url}/fetch_teaches`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all teachings:", error);
  }
}

export async function fetchTakesForStudent(student_id) {
  try {
    const response = await fetch(
      `${base_url}/fetch_takes_for_student/${student_id}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching takes for student:", error);
  }
}

export async function fetchCourseNamesTakenByStudent(studentId) {
  try {
    const response = await fetch(
      `${base_url}/fetch_course_names_taken_by_student/${studentId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all tables:", error);
  }
}

export async function fetchCoursePrerequisites(courseId) {
  try {
    const response = await fetch(
      `${base_url}/fetch_courses_with_prerequisites/${courseId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all tables:", error);
  }
}

// add
export async function addDepartment(
  department_name,
  department_head_first_name,
  department_head_last_name
) {
  const response = await fetch(`${base_url}/add_department`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      department_name,
      department_head_first_name,
      department_head_last_name,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to register for course");
  }
}

export async function addInstructor(
  instructor_username,
  instructor_password,
  instructor_first_name,
  instructor_last_name,
  instructor_email,
  administrator_id,
  department_id
) {
  const response = await fetch(`${base_url}/add_instructor`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      instructor_username,
      instructor_password,
      instructor_first_name,
      instructor_last_name,
      instructor_email,
      administrator_id,
      department_id,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to register for course");
  }
}

export async function addCourse(
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
) {
  const response = await fetch(`${base_url}/add_course`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      course_name,
      course_credits,
      course_instruction_method,
      course_lecture_day,
      course_lecture_time,
      course_lecture_location,
      course_available_seats,
      prerequisite_course_id,
      administrator_id,
      department_id,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to register for course");
  }
}

export async function addStudent(
  student_username,
  student_password,
  student_first_name,
  student_last_name,
  student_email,
  student_level,
  administrator_id
) {
  const response = await fetch(`${base_url}/add_student`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      student_username,
      student_password,
      student_first_name,
      student_last_name,
      student_email,
      student_level,
      administrator_id,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to register for Student");
  }
}

export async function addTake(course_id, student_id) {
  const response = await fetch(`${base_url}/add_take`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ course_id, student_id }),
  });

  if (!response.ok) {
    throw new Error("Failed to register for course");
  }
}

export async function addTeach(instructor_id, course_id) {
  const response = await fetch(`${base_url}/add_teach`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ instructor_id, course_id }),
  });

  if (!response.ok) {
    throw new Error("Failed to register for course");
  }
}

// delete
export async function removeDepartment(department_id) {
  const response = await fetch(`${base_url}/remove_department`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ department_id }),
  });

  if (!response.ok) {
    throw new Error("Failed to register for course");
  }
}

export async function removeInstructor(instructor_id) {
  const response = await fetch(`${base_url}/remove_instructor`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ instructor_id }),
  });

  if (!response.ok) {
    throw new Error("Failed to register for course");
  }
}

export async function removeCourse(course_id) {
  const response = await fetch(`${base_url}/remove_course`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ course_id }),
  });

  if (!response.ok) {
    throw new Error("Failed to register for course");
  }
}

export async function removeStudent(student_id) {
  const response = await fetch(`${base_url}/remove_student`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ student_id }),
  });

  if (!response.ok) {
    throw new Error("Failed to register for course");
  }
}

export async function removeTake(studentId, courseId) {
  const response = await fetch(`${base_url}/remove_take`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ student_id: studentId, course_id: courseId }),
  });

  if (!response.ok) {
    throw new Error("Failed to register for course");
  }
}

export async function removeTeach(instructor_id, course_id) {
  const response = await fetch(`${base_url}/remove_teach`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ instructor_id, course_id }),
  });

  if (!response.ok) {
    throw new Error("Failed to register for course");
  }
}
