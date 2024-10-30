import { replaceMongoID } from "@/utils/data-utils";
import { eventModel } from "./models/eventModels";
import { userModel } from "./models/userModel";
import mongoose from "mongoose";

//====================== Queries for events ======================
export const getAllEvents = async () => {
    const allEvents = await eventModel.find().lean();
    return replaceMongoID(allEvents);
};

export const getEventById = async (eventId) => {
    const event = await eventModel.findById(eventId);
    return event;
}

export const updateInterestedEvents = async (eventId, userId) => {
    const event = await eventModel.findById(eventId);

    if (event) {
        const interestedUser = event.interested_ids.find(id => id.toString() === userId.toString());

        if (interestedUser) {
            event.interested_ids.pull(new mongoose.Types.ObjectId(userId));
        } else {
            event.interested_ids.push(new mongoose.Types.ObjectId(userId));
        }

        event.save();
    }
}


//====================== Queries for users ======================
export const createUser = async (user) => {
    const createdUser = await userModel.create(user);
    return createdUser;
}

export const findUser = async (credentials) => {
    const user = await userModel.findOne(credentials).lean();
    return user;
}