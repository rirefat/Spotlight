'use server'
import { createUser } from "@/database/queries";
import { redirect } from "next/navigation";

export const registerUser = async (formData) => {
    const user = Object.fromEntries(formData);
    const createdUser = await createUser(user);

    redirect('/login');
}