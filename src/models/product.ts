import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    moq: {
      type: String,
    },
    material: {
      type: String,
    },
    color: {
      type: String,
    },
    filling: {
      type: String,
    },
    pattern: {
      type: String,
    },
    brand: {
      type: String,
    },
    washCare: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    origin: {
      type: String,
    },
    description: {
      type: [String],
    },
    productionCapacity: {
      type: String,
    },
    deliveryTime: {
      type: String,
    },
    images: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
