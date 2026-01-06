import { useCompare } from "./CompareContext";
import toast from "react-hot-toast";

function ComparePage() {
  const { compareList, toggleCompare, clearCompare } = useCompare();

  const handleRemove = (laptop) => {
    toggleCompare(laptop);
    toast("Laptop removed from comparison.", { icon: "❌" });
  };

  const handleClearAll = () => {
    clearCompare();
    toast.success("All laptops cleared from comparison.");
  };

  if (compareList.length === 0) {
    return (
      <div className="text-center py-10 text-white">
        No laptops selected for comparison.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        📊 Compare Laptops
      </h2>

      <div className="overflow-auto">
        <table className="w-full border text-sm text-left">
          {/* HEADER */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-2">Attribute</th>
              {compareList.map((laptop) => (
                <th key={laptop._id} className="p-2">
                  {laptop.brand} {laptop.model}
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="text-white">
            {[
              ["Processor", "processor"],
              ["RAM", "ram"],
              ["Storage", "storage"],
              ["Graphics", "graphics"],
              ["Price", "price"],
              ["Rating", "rating"],
              ["Type", "type"],
            ].map(([label, key]) => (
              <tr key={key} className="border-t border-gray-700">
                <td className="font-medium p-2 bg-gray-900">{label}</td>

                {compareList.map((laptop) => (
                  <td key={laptop._id} className="p-2">
                    {laptop[key]}
                  </td>
                ))}
              </tr>
            ))}

            <tr className="border-t border-gray-700">
              <td className="font-medium p-2 bg-gray-900">Remove</td>

              {compareList.map((laptop) => (
                <td key={laptop._id} className="p-2">
                  <button
                    onClick={() => handleRemove(laptop)}
                    className="text-red-400 hover:scale-110 duration-150"
                  >
                    ❌
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <div className="text-center mt-4">
          <button
            onClick={handleClearAll}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComparePage;
