import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password }) // use input values
      });

      // Read response body once
      const text = await response.text();

      // Try parsing JSON
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = { message: text || "No message" };
      }

      if (response.ok) {
        console.log("Login successful:", data);
        setError(""); // clear previous errors
      } else {
        console.log("Login failed:", response.status, data.message);
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError("Network error");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
