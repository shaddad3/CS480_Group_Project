const base_url = "http://localhost:3000";
import Cookies from "js-cookie";

export async function login(username, password) {
  const response = await fetch(`${base_url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
    credentials: "include",
  });

  if (response.ok) {
    return await response.json();
  } else {
    console.error("Login failed");
  }
}

export async function fetchUser() {
  try {
    const response = await fetch(`${base_url}/fetchuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.ok) {
      const user = await response.json();
      return user;
    } else {
      Cookies.remove("auth_token");
    }
  } catch (err) {
    console.error("Error verifying token:", err);
  }
}

export async function logout() {
  const response = await fetch(`${base_url}/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (response.ok) {
    console.log("Logged out");
  } else {
    console.error("Error logging out");
  }
}


export async function fetchAllTables() {
  try {
    const response = await fetch(`${base_url}/all`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all tables:", error);
  }
}

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

// Register for a course
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


//delete course
export async function deleteCourse(courseId) {
  try {
    const response = await fetch(`http://localhost:3000/courses/${courseId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    return "Course deleted successfully.";
  } catch (error) {
    console.error("Error deleting course:", error.message);
    throw new Error("Failed to delete course. Please try again.");
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

export async function fetchCoursePrereqs(courseId) {
  try {
    const response = await fetch(`${base_url}/courses-with-prerequisites/${courseId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all tables:", error);
  }
}

//add instructor
export async function addInstructor(instructorDetails) {
  try {
    const response = await fetch("http://localhost:3000/instructors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(instructorDetails),
    });
    if (!response.ok) {
      throw new Error("Failed to add instructor.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding instructor:", error);
    throw error;
  }
}
