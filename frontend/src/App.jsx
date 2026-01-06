import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import LaptopList from "./pages/LaptopList";
import AddLaptop from "./pages/AddLaptop";
import LaptopDetails from "./pages/LaptopDetails";
import Layout from "./Layout";
import "./index.css";
import ComparePage from "./pages/Compare/ComparePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="laptops" element={<LaptopList />} />
        <Route path="add" element={<AddLaptop />} />
        <Route path="laptops/:id" element={<LaptopDetails />} />
        <Route path="/compare" element={<ComparePage />} />
      </Route>
    </Routes>
  );
}
export default App;
