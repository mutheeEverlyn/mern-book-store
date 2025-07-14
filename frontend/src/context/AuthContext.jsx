import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import getBaseUrl from "../utils/baseURL";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvide = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // On mount, check for token and user in localStorage
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        if (token && user) {
            setCurrentUser(JSON.parse(user));
        }
        setLoading(false);
    }, []);

    const registerUser = async (username, password) => {
        const res = await axios.post(`${getBaseUrl()}/api/auth/register`, { username, password });
        return res.data;
    };

    const loginUser = async (username, password) => {
        const res = await axios.post(`${getBaseUrl()}/api/auth/login`, { username, password });
        if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            setCurrentUser(res.data.user);
        }
        return res.data;
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setCurrentUser(null);
    };

    const value = {
        currentUser,
        loading,
        registerUser,
        loginUser,
        logout,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
