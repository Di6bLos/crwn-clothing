import { createContext, useState, useEffect } from "react";
import {onAuthStateChangedListener, createUserDoc} from "../utils/firebase.utils";

// The actual value you want ot access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,
})
// 
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(()=> {
        const unsubcribe = onAuthStateChangedListener((user)=> {
            console.log(user);
        if(user) createUserDoc(user);
            setCurrentUser(user);
        });
        return unsubcribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}