import { Children, createContext } from "react";

export const AuthContext = createContext();
const AuthProvider = ({ Children }) => {
    const authInfo = {

    }
    return (
        <AuthContext.Provider
            value={authInfo}>
            {Children}
        </AuthContext.Provider>
    )
}


export default AuthProvider