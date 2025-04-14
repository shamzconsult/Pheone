import { Schema, model, models } from "mongoose";

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  mediaUrl: { type: String, required: true },
  mediaType: { type: String, enum: ['image', 'video'], required: true },
  createdAt: { type: Date, default: Date.now },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;