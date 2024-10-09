import { replaceMongoID } from "@/utils/data-utils";
import { eventModel } from "./models/eventModels";

export const getAllEvents = async () => {
    const allEvents = await eventModel.find().lean();
    return replaceMongoID(allEvents);
};

export const getEventById = async (eventId) => {
    const event = await eventModel.findById(eventId);
    return event;
}