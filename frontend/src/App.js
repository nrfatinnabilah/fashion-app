// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  return (
    <BrowserRouter>
      <AppRoutes token={token} setToken={setToken} />
    </BrowserRouter>
  );
}

export default App;

