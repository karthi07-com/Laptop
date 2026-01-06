import { useEffect, useState } from "react";
import axios from "../axiosInstance";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCompare } from "./Compare/CompareContext";
import Hero from "../Components/Hero";

function Home() {
  const [laptops, setLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    axios
      .get("/laptops")
      .then((res) => setLaptops(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredLaptops = laptops
    .filter(
      (laptop) =>
        laptop.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        laptop.model.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((laptop) =>
      selectedType
        ? laptop.type.toLowerCase() === selectedType.toLowerCase()
        : true
    )
    .filter((laptop) => {
      if (priceRange === "low") return laptop.price < 50000;
      if (priceRange === "high") return laptop.price >= 50000;
      return true;
    })
    .sort((a, b) => {
      if (sortOption === "priceLowHigh") return a.price - b.price;
      if (sortOption === "priceHighLow") return b.price - a.price;
      if (sortOption === "ratingHighLow") return b.rating - a.rating;
      return 0;
    });

  const { toggleCompare, compareList } = useCompare();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Hero />

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center justify-between my-6 bg-blue-50 p-4 rounded-xl shadow">
        <input
          type="text"
          placeholder="Search by brand or model"
          className="px-4 py-2 rounded-lg border w-full sm:w-auto"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="px-4 py-2 rounded-lg border"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Gaming">Gaming</option>
          <option value="Business">Business</option>
          <option value="Student">Student</option>
          <option value="Ultrabook">Ultrabook</option>
        </select>

        <div className="flex gap-2 text-sm text-black">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="price"
              checked={priceRange === ""}
              onChange={() => setPriceRange("")}
            />
            All
          </label>

          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="price"
              value="low"
              checked={priceRange === "low"}
              onChange={() => setPriceRange("low")}
            />
            Below ₹50K
          </label>

          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="price"
              value="high"
              checked={priceRange === "high"}
              onChange={() => setPriceRange("high")}
            />
            Above ₹50K
          </label>
        </div>

        <select
          className="px-4 py-2 rounded-lg border"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="ratingHighLow">Rating: High to Low</option>
        </select>
      </div>

      {/* Laptop Cards */}
      {filteredLaptops.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLaptops.map((laptop) => (
            <div
              key={laptop._id}
              className="bg-white shadow-md rounded-2xl p-5 transition hover:shadow-xl border border-gray-100"
            >
              <img
                src={laptop.image || "/laptop-placeholder.png"}
                alt={`${laptop.brand} ${laptop.model}`}
                className="h-40 w-full object-contain mb-4 rounded-xl"
              />

              <h2 className="text-xl font-semibold text-gray-800">
                {laptop.brand} {laptop.model}
              </h2>
              <p className="text-sm text-gray-500">{laptop.type}</p>

              <ul className="text-sm text-gray-700 my-2 space-y-1">
                <li>
                  <strong>Processor:</strong> {laptop.processor}
                </li>
                <li>
                  <strong>RAM:</strong> {laptop.ram}
                </li>
                <li>
                  <strong>Storage:</strong> {laptop.storage}
                </li>
                <li>
                  <strong>Graphics:</strong> {laptop.graphics}
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 gap-2">
                <div>
                  <p className="text-lg font-bold text-blue-700">
                    ₹{laptop.price}
                  </p>
                  <p className="text-sm text-yellow-600 flex items-center gap-1">
                    <Star className="w-4 h-4" /> {laptop.rating}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Link to={`/laptops/${laptop._id}`}>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                      View Details
                    </button>
                  </Link>

                  <button
                    onClick={() => toggleCompare(laptop)}
                    className={`px-3 py-1 rounded text-white ${
                      compareList.some((item) => item._id === laptop._id)
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-purple-600 hover:bg-purple-700"
                    }`}
                  >
                    {compareList.some((item) => item._id === laptop._id)
                      ? "Remove"
                      : "Compare"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No laptops match your filters.
        </p>
      )}

      {compareList.length >= 2 && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-4">
          <span>{compareList.length} laptops selected</span>
          <Link to="/compare">
            <button className="bg-white text-blue-600 px-4 py-1 rounded-full font-semibold hover:bg-gray-100">
              Compare Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;
