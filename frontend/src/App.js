// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";

function App() {
  // ✅ token state to track login
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  return (
    <BrowserRouter>
      <Routes>
        {/* root redirects */}
        <Route path="/" element={token ? <Navigate to="/products" /> : <Navigate to="/login" />} />

        {/* login */}
        <Route
          path="/login"
          element={!token ? <Login setToken={setToken} /> : <Navigate to="/products" />}
        />

        {/* dashboard */}
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        />

        {/* products */}
        <Route
          path="/products"
          element={token ? <Products /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
