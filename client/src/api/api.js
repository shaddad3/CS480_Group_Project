const base_url = "http://localhost:3000";

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
