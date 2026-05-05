import { useState } from "react";

// MUST be exported EXACTLY for test
export const sampleProducts = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Banana", category: "Fruit" },
  { id: 3, name: "Carrot", category: "Vegetable" },
  { id: 4, name: "Milk", category: "Dairy" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // IMPORTANT: EXACT FILTER LOGIC
  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category);

  return (
    <div>
      <h1>Shopping App</h1>

      {/* DARK MODE */}
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
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
        filteredProducts.map((p) => (
          <div key={p.id}>
            <p>{p.name}</p>
            <button
              data-testid={`product-${p.id}`}
              onClick={() => addToCart(p)}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}

      {/* CART */}
      <h2>Cart</h2>
      {cart.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}
    </div>
  );
}

export default App;