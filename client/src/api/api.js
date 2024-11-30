const base_url = "http://localhost:3000";

export async function login(username, password) {
  const response = await fetch(`${base_url}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    return await response.json();
  } else {
    console.error("Login failed");
  }
}

export async function User(token) {
  try {
    const response = await fetch(`${base_url}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
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
    setUser(null);
  }
}

export async function logout() {
  const response = await fetch(`${base_url}/logout`, {
    method: "POST",
  });

  if (response.ok) {
    console.log("Logged out");
  } else {
    console.error("Error logging out");
  }
}
