'use server'
import { createUser, findUser, updateInterestedEvents } from "@/database/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


// Action for user registration
export const registerUser = async (formData) => {
    const user = Object.fromEntries(formData);
    await createUser(user);
    redirect('/login');
}


// Action for user login
export const performLogin = async (formData) => {
    const credential = {};
    try {
        credential.email = formData.get('email');
        credential.password = formData.get('password');

        const result = await findUser(credential);
        return result;

    } catch (err) {
        throw err;
    }
}


// Action for updating interested events
export const addInterestedEvents = async (eventId, userId) => {
    try {
        await updateInterestedEvents(eventId, userId);
    } catch (error) {
        throw error;
    }
    revalidatePath('/')
}
