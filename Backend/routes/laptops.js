import express from "express";
import Laptop from "../models/Laptop.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const laptops = await Laptop.find();
    res.json(laptops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newLaptop = new Laptop(req.body);
    const savedLaptop = await newLaptop.save();
    res.status(201).json(savedLaptop);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ⭐ UPDATE laptop (NEW ROUTE)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Laptop.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) return res.status(404).json({ message: "Laptop not found" });

    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Seed database
router.get("/seed", async (req, res) => {
  try {
    await Laptop.deleteMany();
    const sampleLaptops = [
      {
        brand: "HP",
        model: "Pavilion Gaming",
        processor: "Ryzen 5",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "NVIDIA GTX 1650",
        price: 65000,
        type: "gaming",
        rating: 4.5,
        image:
          "https://rukminim2.flixcart.com/image/416/416/ktketu80/computer/e/g/n/na-gaming-laptop-hp-original-imag6vjyqfwht4nq.jpeg",
      },
      {
        brand: "Dell",
        model: "XPS 13",
        processor: "Intel i7",
        ram: "16GB",
        storage: "1TB SSD",
        graphics: "Intel Iris Xe",
        price: 95000,
        type: "business",
        rating: 4.7,
        image:
          "https://rukminim2.flixcart.com/image/416/416/kz3118w0/computer/k/a/0/13-9310-thin-and-light-laptop-dell-original-imagb964gvprg5cu.jpeg",
      },
      {
        brand: "Lenovo",
        model: "Legion 5 Pro",
        processor: "Ryzen 7",
        ram: "32GB",
        storage: "1TB SSD",
        graphics: "NVIDIA RTX 3060",
        price: 115000,
        type: "gaming",
        rating: 4.8,
        image:
          "https://rukminim2.flixcart.com/image/416/416/kz4gh3k0/computer/a/2/v/82jq00b5in-gaming-laptop-lenovo-original-imagb9yexyqgmfyf.jpeg",
      },
      {
        brand: "HP",
        model: "Victus Gaming",
        price: 68990,
        processor: "Intel Core i5 12th Gen",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "NVIDIA GTX 1650",
        image:
          "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/f/c/n/-original-imagsy5fzyzhspme.jpeg",
        rating: 4.3,
        type: "Gaming",
      },
      {
        brand: "ASUS",
        model: "Vivobook 16X",
        price: 56990,
        processor: "AMD Ryzen 5 5600H",
        ram: "16GB",
        storage: "512GB SSD",
        graphics: "Integrated AMD Radeon",
        image:
          "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/x/f/o/16x-laptop-asus-original-imagkwr4whs6t5nz.jpeg",
        rating: 4.5,
        type: "Student",
      },
    ];

    const inserted = await Laptop.insertMany(sampleLaptops);
    res.status(201).json(inserted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const laptop = await Laptop.findById(req.params.id);
    if (!laptop) return res.status(404).json({ message: "Laptop not found" });
    res.json(laptop);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/compare", async (req, res) => {
  const { ids } = req.body;
  try {
    const laptops = await Laptop.find({ _id: { $in: ids } });
    res.json(laptops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
