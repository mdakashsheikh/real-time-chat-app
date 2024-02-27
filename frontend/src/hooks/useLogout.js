import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
    const [ loading, setLoading ] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async() => {

        setLoading(true);
        try {
            const res = await fetch('/api/v1/auth/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'}
            })

            const data = await res.json();

            if(data.error) {
                throw new Error(data.error);
            }

            localStorage.removeItem('chat-user');
            setAuthUser(null);

        } catch (error) {
            
        } finally {
            setLoading(false);
        }
    }
}

export default useLogout