import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { UserContext } from '../../../../provider/Profile';
import { getInstagramMedia, getMediaComments, getUserPages } from '../../../../api/lib/instagram';
import Accounts from './components/Accounts';
import Posts from './components/Posts';
import Settings from './components/Settings';
import Comments from './components/Comments';

type Props = {}

function Instagram({ }: Props) {

    const { user } = useContext(UserContext);

    const [pageIDs, setPageIDs] = useState<Object[]>([]);
    const [instagramUsers, setInstagramUsers] = useState<Object[]>([]);
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [selectedInstagramID, setSelectedInstagramID] = useState('');
    const [media, setMedia] = useState<[]>([]);
    const [loadingMedia, setLoadingMedia] = useState(false);
    const [selectedMediaID, setSelectedMediaID] = useState('');
    const [loadingComments, setLoadingComments] = useState(false);
    const [comments, setComments] = useState<[]>([]);
    const [fields, setFields] = useState('');
    const [results, setResults] = useState<Object[]>([]);
    const [uniqueResults, setUniqueResults] = useState<Object[]>([]);
    const [qualifiedResults, setQualifiedResults] = useState<Object[]>([]);

    useEffect(() => {
        if (user.id) {
            setLoadingUsers(true);
            getUserPages(user.accessToken).then((res) => {

                let Pages: Object[] = [];
                console.log(res);

                res.data.data.forEach((page: any) => {
                    Pages.push(page)
                });
                setPageIDs(Pages);
                let instagramPages = Pages.filter((page) => page.hasOwnProperty('instagram_business_account'));
                setInstagramUsers(instagramPages);
                setLoadingUsers(false);
            })
        }
    }, [user])

    useEffect(() => {
        if (selectedInstagramID.length > 0) {
            setLoadingMedia(true);
            getInstagramMedia(selectedInstagramID, user.accessToken).then((res) => {
                setMedia(res.data.data);
                setLoadingMedia(false);
            })
        }
    }, [selectedInstagramID])

    useEffect(() => {
        if (selectedMediaID.length > 0 && selectedMediaID !== 'none') {
            setLoadingComments(true);
            getMediaComments(selectedMediaID, user.accessToken, fields).then((res) => {
                console.log(res.data.data);
                setComments(res.data.data);
                setLoadingComments(false);
            })
        }
    }, [selectedMediaID])


    return (
        <Wrapper>
            <Accounts loadingUsers={loadingUsers} instagramUsers={instagramUsers} selectedInstagramID={selectedInstagramID} setSelectedInstagramID={setSelectedInstagramID} />
            <Posts loadingMedia={loadingMedia} media={media} setSelectedMediaID={setSelectedMediaID} />
            <Comments loadingComments={loadingComments} comments={comments} results={results} setResults={setResults} uniqueResults={uniqueResults} setUniqueResults={setUniqueResults} qualifiedResults={qualifiedResults} setQualifiedResults={setQualifiedResults} />
            <Settings results={results} uniqueResults={uniqueResults} qualifiedResults={qualifiedResults} setQualifiedResults={setQualifiedResults} />

            <div>
                RAFFLE SETTINGS
                Hide comment from results
                Remove winner after it is chosen
            </div>
        </Wrapper >
    )
}

const Wrapper = styled.div`

    `

export default Instagram