import { createContext, useState } from 'react';

export const AuthContext = createContext({
    _id: "",
    name: "",
    email: "",
    age: 0,
    gender: "",
    avatar: "",
});

export const AuthWraper = (props) => {
    const [userLogin, setUserLogin] = useState({
        _id: "",
        name: "",
        email: "",
        age: 0,
        gender: "",
        avatar: "",
    });

    return (
        <AuthContext.Provider value={{ userLogin,setUserLogin }}>
                {props.children}
        </AuthContext.Provider>
    )
}