import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const products = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Banana", category: "Fruit" },
    { id: 3, name: "Carrot", category: "Vegetable" },
    { id: 4, name: "Milk", category: "Dairy" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div>
      <h1>Shopping App</h1>

      {/* CATEGORY FILTER (IMPORTANT FOR TESTS) */}
      <select
        aria-label="category"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="All">All</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* PRODUCT LIST */}
      {filteredProducts.length === 0 ? (
        <p>No products match filter</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <button onClick={() => addToCart(product)}>
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

export default App;