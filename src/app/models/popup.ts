import { Schema, model, models } from "mongoose";

const PopupSchema = new Schema(
  {
    images: [{ type: String, required: true }],
    isActive: { type: Boolean, default: true },
    showOncePerSession: { type: Boolean, default: true },
    startsAt: { type: Date, default: null },
    endsAt: { type: Date, default: null },
  },
  { timestamps: true }
);

const Popup = models.Popup || model("Popup", PopupSchema);

export default Popup;