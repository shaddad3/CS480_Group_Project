const base_url = "http://localhost:3000";

export async function fetchAdministrators() {
  try {
    const response = await fetch(`${base_url}/administrators`);
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
    const response = await fetch(`${base_url}/departments`);
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
    const response = await fetch(`${base_url}/instructors`);
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
    const response = await fetch(`${base_url}/courses`);
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
    const response = await fetch(`${base_url}/students`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all students:", error);
  }
}

export async function fetchRegistrations() {
  try {
    const response = await fetch(`${base_url}/registrations`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all registrations:", error);
  }
}

export async function fetchTeachings() {
  try {
    const response = await fetch(`${base_url}/teachings`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching all teachings:", error);
  }
}
