const LoginPage = () => {
    return (
        <section class="h-screen grid place-items-center">
            <div
                class="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md"
            >
                <h4 class="font-bold text-2xl">Sign in</h4>
                <form class="login-form">
                    {/* email  */}
                    <div>
                        <label for="email">Email Address</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    {/* password  */}
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>

                    <button
                        type="submit"
                        class="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
                    >
                        Login
                    </button>
                </form>

                <span class="text-center text-xs text-gray-500">
                    Don&apos;t have an account?
                    <a class="underline hover:text-indigo-600" href="/register"
                    >Register</a >
                </span>
            </div>
        </section>
    );
};

export default LoginPage;