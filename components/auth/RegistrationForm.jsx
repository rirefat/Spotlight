const RegistrationForm = () => {
    return (
        <form className="login-form">
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
                <input className="min-h-16" type="text" name="bio" id="bio" />
            </div>

            <button
                type="submit"
                className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
            >
                Register
            </button>
        </form>
    );
};

export default RegistrationForm;