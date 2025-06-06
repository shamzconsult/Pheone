import Gallery from "@/app/models/gallery";
import connectViaMongoose from "@/lib/mongodb"

export const getAllImage = async () => {
    try{
        await connectViaMongoose();
        const images = await Gallery.find().sort({ createdAt: -1 });
        return JSON.parse(JSON.stringify(images))
    } catch (error) {
        console.error("Error fetching images: ", error);
        return [];
    }
}