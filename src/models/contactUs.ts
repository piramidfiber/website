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
    refrence: {
      type: String,
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
