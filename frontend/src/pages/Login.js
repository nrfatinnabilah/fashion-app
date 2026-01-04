import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Optional: Axios interceptor to attach token automatically
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Fetch secure data (can be called anywhere after login)
  const fetchSecureData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/test/secure");
      console.log("Secure data:", res.data);
    } catch (err) {
      console.error("Access denied:", err.response?.data || err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault(); // prevent page refresh

    try {
      // Step 1: login
      const res = await axios.post("http://localhost:8080/api/auth/login", {
        username,
        password
      });

      // Step 2: save token
      localStorage.setItem("token", res.data.token);

      // Step 3: redirect
      navigate("/dashboard");

      // Step 4: fetch secure data (just for testing)
      await fetchSecureData();

    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
