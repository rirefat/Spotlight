const RegisterPage = () => {
    return (
        <section class="h-screen grid place-items-center">
            <div
                class="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md"
            >
                <h4 class="font-bold text-2xl">Register</h4>
                <form class="login-form">
                    {/* name  */}
                    <div>
                        <label for="name">Full Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
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
                    {/* phone  */}
                    <div>
                        <label for="phone">Phone Number</label>
                        <input type="tel" name="pnone" id="phone" />
                    </div>
                    {/* bio  */}
                    <div>
                        <label for="bio">Bio</label>
                        <input class="min-h-16" type="text" name="bio" id="bio" />
                    </div>

                    <button
                        type="submit"
                        class="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
                    >
                        Register
                    </button>
                </form>

                <span class="text-center text-xs text-gray-500">
                    Already have an account?
                    <a class="underline hover:text-indigo-600" href="/login"
                    >Login</a >
                </span>
            </div>
        </section>
    );
};

export default RegisterPage;