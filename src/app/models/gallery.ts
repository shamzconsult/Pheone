import mongoose, { models, Schema } from "mongoose";

const GallerySchema = new Schema({
   
    description: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
    },
}, { timestamps: true });

const Gallery = models.Gallery || mongoose.model('Gallery', GallerySchema);

export default Gallery;
