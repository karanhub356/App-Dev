import React, { useState, useEffect } from "react";
import "./ProductPage.css";

const halls = [
  {
    id: 1,
    name: "Grand Ballroom",
    description: "A luxurious hall perfect for weddings and large events.",
    price: 5000,
    image: "src/images/grand-ballroom.jpg",
    availability: "Available",
  },
  {
    id: 2,
    name: "Conference Hall",
    description: "Ideal for corporate meetings and conferences.",
    price: 3000,
    image: "/images/conference-hall.jpg",
    availability: "Available",
  },
  {
    id: 3,
    name: "Banquet Hall",
    description: "Great for parties and social gatherings.",
    price: 4000,
    image: "/images/banquet-hall.jpg",
    availability: "Booked",
  },
  // Add more halls as needed
];

const ProductPage = () => {
  const [selectedHall, setSelectedHall] = useState(halls[0]);

  useEffect(() => {
    // Any additional effect to run on component mount
  }, []);

  return (
    <div className="product-page">
      <div className="hall-list">
        {halls.map((hall) => (
          <div
            key={hall.id}
            className={`hall-item ${
              hall.id === selectedHall.id ? "selected" : ""
            }`}
            onClick={() => setSelectedHall(hall)}
          >
            <img src={hall.image} alt={hall.name} className="hall-image" />
            <h2 className="hall-name">{hall.name}</h2>
            <p className="hall-price">${hall.price}</p>
          </div>
        ))}
      </div>
      <div className="hall-details">
        <h1>{selectedHall.name}</h1>
        <img
          src={selectedHall.image}
          alt={selectedHall.name}
          className="hall-detail-image"
        />
        <p>{selectedHall.description}</p>
        <p>Price: ${selectedHall.price}</p>
        <p>Availability: {selectedHall.availability}</p>
      </div>
    </div>
  );
};

export default ProductPage;
