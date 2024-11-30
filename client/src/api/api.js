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

export async function fetchStudentInfo() {
  try {
    const response = await fetch(`${base_url}/student`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all tables:", error);
  }
} 

export async function fetchCoursePrereqs() {
  try {
    const response = await fetch(`${base_url}/courses-with-prerequisites/:course_id`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all tables:", error);
  }
}
