import mongoose from "mongoose";

const contactUsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const ContactUs =
  mongoose.models.ContactUs || mongoose.model("ContactUs", contactUsSchema);

export default ContactUs;

export type IContactUs = mongoose.InferSchemaType<typeof contactUsSchema>;
