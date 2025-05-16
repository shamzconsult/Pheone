import mongoose, { models, Schema } from "mongoose";

const GallerySchema = new Schema({
   
    description: { 
        type: String, 
        required: true,
        validate: [
            {
                validator: (desc: string) => desc.replace(/\s/g, '').length<= 10,
                message: "Description must not exceed 10 letters (excluding spaces)."
            },
            {
                validator: (desc: string) => desc.trim().split(/\s+/).length <= 10,
                message: "Description must not exceed 10 words."
            }
        ] 
    },
    image: { 
        type: String, 
    },
}, { timestamps: true });

const Gallery = models.Gallery || mongoose.model('Gallery', GallerySchema);

export default Gallery;
