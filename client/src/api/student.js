const base_url = "http://localhost:3000";

export async function fetchCourses() {
  try {
    const response = await fetch(`${base_url}/courses`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all tables:", error);
  }
}

export async function registerForCourse(studentId, courseId) {
  const response = await fetch(`${base_url}/register-course`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ student_id: studentId, course_id: courseId }),
  });

  if (!response.ok) {
    throw new Error("Failed to register for course");
  }
}

export async function fetchStudentInfo(studentId) {
  try {
    const response = await fetch(`${base_url}/student/${studentId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all tables:", error);
  }
}

export async function fetchStudentCourses(studentId) {
  try {
    const response = await fetch(`${base_url}/courses-by-student/${studentId}`);
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
      `${base_url}/courses-with-prerequisites/${courseId}`
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

// export async function fetchAllTables() {
//   try {
//     const response = await fetch(`${base_url}/all`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching all tables:", error);
//   }
// }
