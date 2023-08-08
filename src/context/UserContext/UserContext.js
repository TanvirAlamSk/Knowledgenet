import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext()
const UserContext = ({ children }) => {
    const name = "tanvir"
    const authinfo = { name }
    return (
        <div>
            <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;