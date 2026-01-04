// src/pages/Products.jsx
import { useEffect, useState } from "react";
// import { getProducts } from "../api/api"; // only if you have a backend API
import { Link } from "react-router-dom";

export default function Products() {
  // 1️⃣ Declare state variables
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(""); // optional for error handling

  // 2️⃣ useEffect goes here
  useEffect(() => {
    // This is where you fetch products from API (or use dummy data)
    const fetchProducts = async () => {
      try {
        // const res = await getProducts(); // use this when you have API
        // For now, we can use dummy data:
        const res = [
          { id: 1, name: "Red Dress", price: 49.99, image: "https://via.placeholder.com/150x200?text=Red+Dress" },
          { id: 2, name: "Blue Jeans", price: 39.99, image: "https://via.placeholder.com/150x200?text=Blue+Jeans" },
          { id: 3, name: "White T-Shirt", price: 19.99, image: "https://via.placeholder.com/150x200?text=White+T-Shirt" },
        ];
        setProducts(res);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      }
    };

    fetchProducts();
  }, []); // empty dependency array → runs once on component mount

  // 3️⃣ Render the products
  return (
    <div>
      <h2>Products</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={p.image} alt={p.name} style={{ width: "150px", height: "200px" }} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <Link to={`/products/${p.id}`}><button>View Details</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}
