import { replaceMongoID } from "@/utils/data-utils";
import { eventModel } from "./models/eventModels";

export const getAllEvents = async () => {
    const allEvents = await eventModel.find().lean();
    return replaceMongoID(allEvents);
}