import Event from "@/app/models/Events";
import connectViaMongoose from "@/lib/mongodb"

export const getAllEvents = async () => {
    try{
        await connectViaMongoose();
        const events = await Event.find().sort({ createdAt: -1 });
        return JSON.parse(JSON.stringify(events))
    } catch (error) {
        console.error("Error fetching events: ", error);
        return [];
    }
}