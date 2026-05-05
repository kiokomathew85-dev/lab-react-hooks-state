import React, { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Banana", category: "Fruit" },
  { id: 3, name: "Carrot", category: "Vegetable" },
  { id: 4, name: "Milk", category: "Dairy" }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  // FILTER PRODUCTS
  const filteredProducts =
    category === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === category);

  // ADD TO CART
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#111" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <h1>Shopping App</h1>

      {/* DARK MODE BUTTON */}
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* CATEGORY FILTER */}
      <select
        aria-label="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* PRODUCTS */}
      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <button
              data-testid={`product-${product.id}`}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}

      {/* CART */}
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}