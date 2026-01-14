// src/api.js
const BASE_URL = "http://localhost:8080"; // Spring Boot backend

export async function loginUser(username, password) {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const text = await res.text(); // get raw response

  try {
    const data = JSON.parse(text); // try parse JSON
    if (!res.ok) throw new Error(data.message || "Login failed");
    return data;
  } catch {
    // fallback if not JSON
    throw new Error(text || "Login failed");
  }
}

export async function registerUser(name, email, password) {
  const res = await fetch(`${BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  if (!res.ok) throw new Error("Registration failed");
  return res.json();
}

export async function getDashboardData(token) {
  const res = await fetch(`${BASE_URL}/api/dashboard/test`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error("Failed to fetch dashboard data");
  return res.json();
}

export async function getProducts(){
  const response = await fetch("http://localhost:8080/api/products");
  if (!response.ok) throw new Error("Failed to fetch products");
  return await response.json();
}

export async function fetchSecureData(){
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}/api/test/secure`, {
    headers: { Authorization: `Bearer ${token}`},
  });

  if (!res.ok) throw new Error("Failed to fetch secure data");
  return res.json();
}
