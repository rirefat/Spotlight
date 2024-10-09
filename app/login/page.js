import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

const LoginPage = () => {
    return (
        <section className="h-screen grid place-items-center">
            <div
                className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md"
            >
                <h4 className="font-bold text-2xl">Sign in</h4>
                <LoginForm/>

                <span className="text-center text-xs text-gray-500">
                    Don&apos;t have an account?
                    <Link
                        className="underline hover:text-indigo-600 mx-2 text-slate-300"
                        href="/register"
                    >
                        Register
                    </ Link>
                </span>
            </div>
        </section>
    );
};

export default LoginPage;