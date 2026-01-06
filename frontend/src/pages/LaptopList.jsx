import { useEffect, useState } from "react";
import axios from "../axiosInstance";
import { Link } from "react-router-dom";

function LaptopList() {
  const [laptops, setLaptops] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    type: "",
    price: "",
    brand: "",
  });

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const res = await axios.get("/laptops");
        setLaptops(res.data);
        setFiltered(res.data);
      } catch (err) {
        console.error("Failed to fetch laptops:", err);
      }
    };

    fetchLaptops();
  }, []);

  useEffect(() => {
    let temp = [...laptops];

    if (filters.type) {
      temp = temp.filter(
        (l) => l.type.toLowerCase() === filters.type.toLowerCase()
      );
    }

    if (filters.price) {
      if (filters.price === "low") temp = temp.filter((l) => l.price < 50000);
      if (filters.price === "mid")
        temp = temp.filter((l) => l.price >= 50000 && l.price <= 100000);
      if (filters.price === "high") temp = temp.filter((l) => l.price > 100000);
    }

    if (filters.brand) {
      temp = temp.filter(
        (l) => l.brand.toLowerCase() === filters.brand.toLowerCase()
      );
    }

    setFiltered(temp);
  }, [filters, laptops]);

  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>All Laptops</h1>

      <Link to="/add">
        <button style={{ marginBottom: "1rem" }}>➕ Add New Laptop</button>
      </Link>

      <div style={{ marginBottom: "2rem" }}>
        <label>
          Type:
          <select
            name="type"
            onChange={handleChange}
            value={filters.type}
            style={{ margin: "0 2rem" }}
          >
            <option value="">All Types</option>
            <option value="gaming">Gaming</option>
            <option value="business">Business</option>
            <option value="student">Student</option>
          </select>
        </label>

        <label>
          Price:
          <select
            name="price"
            onChange={handleChange}
            value={filters.price}
            style={{ margin: "0 2rem" }}
          >
            <option value="">All Prices</option>
            <option value="low">Below ₹50,000</option>
            <option value="mid">₹50,000 - ₹1,00,000</option>
            <option value="high">Above ₹1,00,000</option>
          </select>
        </label>

        <label>
          Brand:
          <select name="brand" onChange={handleChange} value={filters.brand}>
            <option value="">All Brands</option>
            <option value="HP">HP</option>
            <option value="Dell">Dell</option>
            <option value="Lenovo">Lenovo</option>
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <p>No laptops found.</p>
      ) : (
        filtered.map((laptop) => (
          <div
            key={laptop._id}
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            {/* 📸 IMAGE ADDED HERE */}
            <img
              src={laptop.image || "https://via.placeholder.com/200"}
              alt={laptop.model}
              style={{
                width: "180px",
                height: "140px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <div>
              <h2>
                {laptop.brand} {laptop.model}
              </h2>
              <p>
                <strong>Processor:</strong> {laptop.processor}
              </p>
              <p>
                <strong>RAM:</strong> {laptop.ram}
              </p>
              <p>
                <strong>Storage:</strong> {laptop.storage}
              </p>
              <p>
                <strong>Graphics:</strong> {laptop.graphics}
              </p>
              <p>
                <strong>Type:</strong> {laptop.type}
              </p>
              <p>
                <strong>Rating:</strong> {laptop.rating} ⭐
              </p>
              <p>
                <strong>Price:</strong> ₹{laptop.price}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default LaptopList;
