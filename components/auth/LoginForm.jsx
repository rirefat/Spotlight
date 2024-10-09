const LoginForm = () => {
    return (
        <form className="login-form">
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
                className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;