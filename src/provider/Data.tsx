import { createContext, useCallback, useEffect, useState } from "react";

export interface Comment {
    id: string;
    username: string;
    text: string;
    type: string;
}

export interface Data {
    loadingInstagramAccounts: boolean,
    instagramAccounts: Object[],
    selectedInstagramAccountId: string,
    selectedInstagramAccount: {
        id: string,
        name: string,
        followers_count: string,
        profile_picture_url: string,
    },
    loadingMedia: boolean;
    media: [],
    selectedMediaId: string,
    loadingComments: boolean,
    comments: Comment[],
    commentsStats: {
        commentsCounter: number,
        repliesCounter: number,
        uniqueUserCounter: number,
    }
    qualifiedComments: Comment[],
    qualifiedCommentsStats: {
        commentsCounter: number,
        repliesCounter: number,
        additionalEntriesCounter: number,
        uniqueUserCounter: number,
    }
    winners: Comment[],
    settings: { mentions: number, replies: boolean, duplicate: boolean, exclude: string, add: string, hide: boolean, remove: boolean, },
}

interface InstagramData {
    data: Data;
    setDataData(data: Data): void;
}

export const DataContext = createContext<InstagramData>({
    data: {} as Data,
    setDataData: () => { }
});

function DataContextProvider({ children }: { children: any }) {

    const [data, setData] = useState({
        loadingInstagramAccounts: false,
        instagramAccounts: [],
        selectedInstagramAccountId: '',
        selectedInstagramAccount: {
            id: '',
            name: '',
            followers_count: '',
            profile_picture_url: '',
        },
        loadingMedia: false,
        media: [],
        selectedMediaId: '',
        loadingComments: false,
        comments: [],
        commentsStats: {
            commentsCounter: 0,
            repliesCounter: 0,
            uniqueUserCounter: 0,
        },
        qualifiedComments: [],
        qualifiedCommentsStats: {
            commentsCounter: 0,
            repliesCounter: 0,
            additionalEntriesCounter: 0,
            uniqueUserCounter: 0,
        },
        winners: [],
        settings: { mentions: 0, replies: false, duplicate: false, exclude: '', add: '', hide: false, remove: false, }
    } as Data);

    const setDataData = (data: Data) => { setData(data) };

    const contextValue = {
        data: data,
        setDataData: useCallback((data: Data) => setDataData(data), [])
    };

    useEffect(() => {

    }, []);

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;