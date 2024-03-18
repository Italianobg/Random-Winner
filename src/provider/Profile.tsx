import React, { useState, createContext, useCallback } from 'react';

export interface Profile {
    accessToken: string
    first_name: string
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
}

interface User {
    user: Profile | null;
    setUserData(user: Profile | null): void;
}

export const UserContext = createContext<User>({
    user: null,
    setUserData: () => { }
});

function UserContextProvider({ children }: { children: any }) {

    const [user, setUser] = useState<Profile | null>(null);

    const setUserData = (user: Profile | null) => {
        setUser(user)
    };

    const contextValue = {
        user: user,
        setUserData: useCallback((user: Profile) => setUserData(user), [])
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
