import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser, fetchSecureData } from "../api/api";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Step 1: login
      const res = await loginUser(username, password); // pass username & password

      // Step 2: save token
      localStorage.setItem("token", res.token);

      // Step 3: redirect to dashboard
      navigate("/dashboard");

      // Step 4: fetch secure data (optional, for testing)
      const secureRes = await fetchSecureData(); // call function
      console.log("Secure data:", secureRes);

    } catch (err) {
      console.error(err);
      alert(err.message || "Invalid credentials");
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
