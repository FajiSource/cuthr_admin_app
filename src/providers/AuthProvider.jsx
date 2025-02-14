import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(
    {
        user: false,
        setUser: () => { },
    }
);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(true);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);