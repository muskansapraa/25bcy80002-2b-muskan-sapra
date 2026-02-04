import { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Wireless Headphones", price: 129.99, category: "electronics" },
  { id: 2, name: "Cotton T-Shirt", price: 24.99, category: "clothing" },
  { id: 3, name: "Bluetooth Speaker", price: 89.99, category: "electronics" },
  { id: 4, name: "Denim Jeans", price: 59.99, category: "clothing" }
];

function App() {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div className="container">
      <h1>Product Filter</h1>

      <div className="filter-bar">
        <label>Filter by:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Products</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
        </select>
      </div>

      <div className="grid">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <h2>{product.name}</h2>
            <p className="price">${product.price}</p>
            <span className={`badge ${product.category}`}>
              {product.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

