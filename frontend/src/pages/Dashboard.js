// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { getDashboardData } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDashboardData(token);
        setData(res.message); // your test endpoint should return { message: "Hello Dashboard!" }
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      {error && <p style={{color:"red"}}>{error}</p>}
      {data && <p>{data}</p>}
    </div>
  );
}
