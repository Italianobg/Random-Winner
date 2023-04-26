import React, { useState, createContext, useEffect, useCallback } from 'react';

export interface Profile {
    accessToken: string
    data_access_expiration_time: number
    email: string
    expiresIn: number
    first_name: string
    grantedScopes: string
    graphDomain: string
    id: string
    last_name: string
    name: string
    name_format: string
    picture: {
        height: number
        is_silhouette: boolean
        url: string
        width: number
    }
    short_name: string
    signedRequest: string
    userID: string
}

interface User {
    user: Profile;
    setUserData(user: Profile): void;
}

export const UserContext = createContext<User>({
    user: {} as Profile,
    setUserData: () => { }
});

function UserContextProvider({ children }: { children: any }) {

    const [user, setUser] = useState({} as Profile);


    const setUserData = (user: Profile) => { setUser(user) };

    const contextValue = {
        user: user,
        setUserData: useCallback((user: Profile) => setUserData(user), [])

    };

    useEffect(() => {

    }, []);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
