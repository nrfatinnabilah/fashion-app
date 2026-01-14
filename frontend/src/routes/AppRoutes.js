import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login";

function AppRoutes({ token, setToken }) {
  return (
    <Routes>
      {/* root redirect */}
      <Route
        path="/"
        element={token ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
      />

      {/* login */}
      <Route
        path="/login"
        element={!token ? <Login setToken={setToken} /> : <Navigate to="/dashboard" />}
      />

      {/* dashboard */}
      <Route
        path="/dashboard/*"
        element={token ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default AppRoutes;