'use server'
import { createUser, findUser } from "@/database/queries";
import { redirect } from "next/navigation";

export const registerUser = async (formData) => {
    const user = Object.fromEntries(formData);
    const createdUser = await createUser(user);

    redirect('/login');
}

export const loginUser = async (formData) => {
    try {
        const credentials = Object.fromEntries(formData);
        const foundUser = await findUser(credentials);
        // redirect('/');
        return foundUser;
        
    } catch (error) {
        throw error;
    }
}