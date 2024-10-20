'use client'
import { performLogin } from "@/actions";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const LoginForm = () => {
    const [error, setError] = useState('');
    const { setAuth } = useAuth();
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData(event.currentTarget);
            const user = await performLogin(formData);

            if (user) {
                setAuth(user);
                router.push('/');
                toast.success('Login Successfully');
            } else {
                setError('Please provide a valid login credential');
            }

        } catch (err) {
            setError(err.message)
        }
    }


    return (
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                {/* email  */}
                <div>
                    <label for="email">Email Address</label>
                    <input type="email" name="email" id="email" required />
                </div>
                {/* password  */}
                <div>
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>

                <button
                    type="submit"
                    className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
                >
                    Login
                </button>
            </form>

            {
                error &&
                <div className="error-section text-red-400">
                    <p>❌ {error}</p>
                </div>
            }
        </>
    );
};

export default LoginForm;