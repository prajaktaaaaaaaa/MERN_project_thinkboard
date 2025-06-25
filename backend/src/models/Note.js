import mongoose from "mongoose";
// 1- create schmea
//2- model based on the schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // This will add createdAt and updatedAt fields
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
