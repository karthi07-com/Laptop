import mongoose from "mongoose";

const laptopSchema = new mongoose.Schema({
  brand: String,
  model: String,
  processor: String,
  ram: String,
  storage: String,
  graphics: String,
  price: Number,
  usage: [String],
  type: String,
  rating: Number,
  image: String,
});

const Laptop = mongoose.model("Laptop", laptopSchema);
export default Laptop;
