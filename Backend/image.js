import mongoose from "mongoose";
import dotenv from "dotenv";
import Laptop from "./models/Laptop.js";

dotenv.config();

const IMAGE_MAP = {
  "Pavilion Gaming":
    "https://rukminim2.flixcart.com/image/416/416/ktketu80/computer/e/g/n/na-gaming-laptop-hp-original-imag6vjyqfwht4nq.jpeg",

  "XPS 13":
    "https://rukminim2.flixcart.com/image/416/416/kz3118w0/computer/k/a/0/13-9310-thin-and-light-laptop-dell-original-imagb964gvprg5cu.jpeg",

  "Legion 5 Pro":
    "https://rukminim2.flixcart.com/image/416/416/kz4gh3k0/computer/a/2/v/82jq00b5in-gaming-laptop-lenovo-original-imagb9yexyqgmfyf.jpeg",

  "Victus Gaming":
    "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/f/c/n/-original-imagsy5fzyzhspme.jpeg",

  "Vivobook 16X":
    "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/x/f/o/16x-laptop-asus-original-imagkwr4whs6t5nz.jpeg",
};

async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("🔗 Connected to MongoDB");

    const laptops = await Laptop.find();
    console.log(`📦 Found ${laptops.length} laptops`);

    for (const laptop of laptops) {
      const newImage = IMAGE_MAP[laptop.model];

      if (newImage) {
        laptop.image = newImage;
        await laptop.save();
        console.log(`✔ Updated image for ${laptop.brand} ${laptop.model}`);
      } else {
        console.log(`⚠ No image mapping found for ${laptop.model}`);
      }
    }

    console.log("🎉 All done!");
    process.exit();
  } catch (err) {
    console.error("❌ Error:", err);
    process.exit(1);
  }
}

run();
