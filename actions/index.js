'use server'
import EmailTemplate from "@/components/EmailTemplate";
import { createUser, findUser, getEventById, updateGoing, updateInterestedEvents } from "@/database/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";


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

export const addGoingEvents = async (eventId, user) => {
    try {
        await updateGoing(eventId, user?._id);
        await sendEmail(eventId, user);
    } catch (err) {
        throw err;
    }
    revalidatePath('/');
    redirect('/');
}


// Actions for sending email
export const sendEmail = async (eventId, user) => {
    try {
        const event = await getEventById(eventId);
        const resend = new Resend(process.env.RESEND_API_KEY);
        const message = `Dear ${user?.name}, you have been successfully registered for the event, ${event?.name}. Please carry this email and your official id to the venue. We are excited to have you here.`;
        const sent = await resend.emails.send({
            from: "noreply@noreply.tapascript.io",
            to: user?.email,
            subject: "Successfully Registered for the event!",
            react: EmailTemplate({ message })
        });
    } catch (error) {
        throw error;
    }
}
