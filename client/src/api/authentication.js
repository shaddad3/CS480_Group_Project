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
    const data = await response.json();
    return data;
  } else {
    console.error("Login failed");
  }
}

export async function profile() {
  try {
    const response = await fetch(`${base_url}/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      return data;
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
