import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  name: { type: String, required: true },
  name: { type: String, required: true },
  name: { type: String, required: true },
});
