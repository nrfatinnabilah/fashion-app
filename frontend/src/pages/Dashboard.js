import { useEffect, useState } from "react";
import { getDashboardData } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // ✅ declare loading state
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Redirect if no token
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      setLoading(true); // ✅ now defined
      try {
        const res = await getDashboardData(token);
        setData(res.message); // e.g., "Hello Dashboard!"
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // ✅ now defined
      }
    };

    fetchData();
  }, [token, navigate]);

  // ✅ define handleLogout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && <p>{data}</p>}
    </div>
  );
}
