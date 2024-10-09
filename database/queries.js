import { eventModel } from "./models/eventModels";

export const getAllEvents = async () => {
    const allEvents = await eventModel.find();
    return allEvents;
}