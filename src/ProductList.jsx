import React, { useState } from "react";

// Sample plant data (3 categories, 6 plants each)
const plantsData = {
  Indoor: [
    { name: "Snake Plant", price: 10, image: "https://via.placeholder.com/100" },
    { name: "Peace Lily", price: 12, image: "https://via.placeholder.com/100" },
    { name: "Spider Plant", price: 8, image: "https://via.placeholder.com/100" },
    { name: "Aloe Vera", price: 9, image: "https://via.placeholder.com/100" },
    { name: "ZZ Plant", price: 11, image: "https://via.placeholder.com/100" },
    { name: "Pothos", price: 7, image: "https://via.placeholder.com/100" }
  ],
  Outdoor: [
    { name: "Rose", price: 15, image: "https://via.placeholder.com/100" },
    { name: "Tulip", price: 14, image: "https://via.placeholder.com/100" },
    { name: "Sunflower", price: 13, image: "https://via.placeholder.com/100" },
    { name: "Lavender", price: 16, image: "https://via.placeholder.com/100" },
    { name: "Hibiscus", price: 18, image: "https://via.placeholder.com/100" },
    { name: "Jasmine", price: 17, image: "https://via.placeholder.com/100" }
  ],
  Succulents: [
    { name: "Cactus", price: 6, image: "https://via.placeholder.com/100" },
    { name: "Echeveria", price: 7, image: "https://via.placeholder.com/100" },
    { name: "Sedum", price: 5, image: "https://via.placeholder.com/100" },
    { name: "Agave", price: 9, image: "https://via.placeholder.com/100" },
    { name: "Haworthia", price: 8, image: "https://via.placeholder.com/100" },
    { name: "Crassula", price: 10, image: "https://via.placeholder.com/100" }
  ]
};

const ProductList = () => {
  const [cartCount, setCartCount] = useState(0);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    setCartCount(cartCount + 1);

    // simulate Redux dispatch
    console.log("Dispatched to Redux:", plant);

    setAddedToCart({
      ...addedToCart,
      [plant.name]: true
    });
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#4CAF50", color: "white" }}>
        <h2>Paradise Nursery</h2>
        <div>
          <a href="#" style={{ margin: "10px", color: "white" }}>Home</a>
          <a href="#" style={{ margin: "10px", color: "white" }}>Plants</a>
          <a href="#" style={{ margin: "10px", color: "white" }}>
            Cart 🛒 ({cartCount})
          </a>
        </div>
      </nav>

      <h1 style={{ textAlign: "center" }}>Our Plants</h1>

      {/* Categories */}
      {Object.keys(plantsData).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {plantsData[category].map((plant) => (
              <div key={plant.name} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", width: "150px" }}>
                <img src={plant.image} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
