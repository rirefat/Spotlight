'use client'
import { AuthContext } from "@/contexts";
import { useEffect, useState } from "react";


const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    // Load auth data from localStorage when the app initializes 
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setAuth(JSON.parse(storedUser));
        }
    }, []);

    // Update auth data when the auth state changes 
    useEffect(() => {
        if (auth) {
            localStorage.setItem('user', JSON.stringify(auth))
        } else {
            localStorage.removeItem('user');
        }
    }, [auth]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;