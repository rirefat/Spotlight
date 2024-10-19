import { replaceMongoID } from "@/utils/data-utils";
import { eventModel } from "./models/eventModels";
import { userModel } from "./models/userModel";

export const getAllEvents = async () => {
    const allEvents = await eventModel.find().lean();
    return replaceMongoID(allEvents);
};

export const getEventById = async (eventId) => {
    const event = await eventModel.findById(eventId);
    return event;
}

export const createUser = async (user) => {
    const createdUser = await userModel.create(user);
    return createdUser;
}

export const findUser = async (credentials) => {
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return user;
    } else {
        return null;
    }
}