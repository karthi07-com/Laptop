import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axiosInstance";
import { Star } from "lucide-react";

function LaptopDetails() {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);

  useEffect(() => {
    axios
      .get(`/laptops/${id}`)
      .then((res) => setLaptop(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!laptop)
    return (
      <p className="text-center py-10 text-lg text-gray-500">
        Loading details...
      </p>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row gap-6">
        <img
          src={laptop.image || "/laptop-placeholder.png"}
          alt={`${laptop.brand} ${laptop.model}`}
          className="w-full md:w-1/2 object-contain p-6 bg-gray-100"
        />
        <div className="p-6 space-y-4">
          <h2 className="text-3xl font-bold text-blue-700">
            {laptop.brand} {laptop.model}
          </h2>
          <p className="text-sm text-gray-500">{laptop.type}</p>

          <ul className="text-gray-700 space-y-1 text-base">
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

          <div className="pt-2 flex items-center justify-between">
            <span className="text-2xl text-green-600 font-bold">
              ₹{laptop.price}
            </span>
            <span className="text-yellow-600 flex items-center gap-1">
              <Star className="w-5 h-5" /> {laptop.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaptopDetails;
