'use server'
import { createUser, findUser } from "@/database/queries";
import { redirect } from "next/navigation";

export const registerUser = async (formData) => {
    const user = Object.fromEntries(formData);
    const createdUser = await createUser(user);
    redirect('/login');
}

export const performLogin = async (formData) => {
    const credential ={};
    credential.email = formData.get('email');
    credential.password = formData.get('password');

    const result = await findUser(credential);

    if(result){
        redirect('/');
    }else{
        throw new Error("User with this email is not valid.")
    }
}