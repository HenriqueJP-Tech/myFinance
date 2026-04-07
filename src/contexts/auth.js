import { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState({
        nome: 'Henrique'
    })

    return(
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;