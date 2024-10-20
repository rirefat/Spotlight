'use server'
import { createUser, findUser } from "@/database/queries";
import { redirect } from "next/navigation";

export const registerUser = async (formData) => {
    const user = Object.fromEntries(formData);
    const createdUser = await createUser(user);
    redirect('/login');
}

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