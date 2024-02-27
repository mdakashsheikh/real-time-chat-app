import { createContext, useContext, useState } from "react";

export const AuthContex = createContext();

export const useAuthContext = () => {
    return useContext(AuthContex);
}

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('chat-user')) || null)

    return (
        <AuthContex.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContex.Provider>
    )
}