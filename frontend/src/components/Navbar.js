// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/dashboard" style={{ marginRight: "10px" }}>Dashboard</Link>
      <Link to="/products" style={{ marginRight: "10px" }}>Products</Link>
      <Link to="/cart" style={{ marginRight: "10px" }}>Cart</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
