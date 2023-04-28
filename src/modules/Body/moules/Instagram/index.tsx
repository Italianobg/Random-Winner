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
    const [comments, setComments] = useState<Object[]>([]);
    const [commentsAfter, setCommentsAfter] = useState<string>('');
    const [results, setResults] = useState<Object[]>([]);
    const [qualifiedResults, setQualifiedResults] = useState<Object[]>([]);
    const [uniqueQualifiedResults, setUniqueQualifiedResults] = useState<Object[]>([]);
    const [settings, setSettings] = useState<{ mentions: number, replies: boolean, duplicate: boolean, exclude: string, add: string }>({ mentions: 0, replies: false, duplicate: false, exclude: '', add: '' });

    useEffect(() => {
        if (user.id) {
            setLoadingUsers(true);
            getUserPages(user.accessToken).then((res) => {

                let Pages: Object[] = [];
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
            setComments([]);
            getMediaComments(selectedMediaID, user.accessToken, commentsAfter).then((res: any) => {
                setComments(res.data.data);
                if (res.data.hasOwnProperty('paging') && res.data.paging.cursors.after) {
                    setCommentsAfter('&after=' + res.data.paging.cursors.after);
                }
                if (!res.data.hasOwnProperty('paging')) {
                    setLoadingComments(false);
                }
            })
        }
    }, [selectedMediaID])

    useEffect(() => {
        if (commentsAfter.length > 0) {
            getMediaComments(selectedMediaID, user.accessToken, commentsAfter).then((res: any) => {
                let commentsArr = comments;
                res.data.data.map((comment: any) => { commentsArr.push(comment) });
                setComments(commentsArr);

                if (res.data.hasOwnProperty('paging') && res.data.paging.cursors.after) {
                    setCommentsAfter('&after=' + res.data.paging.cursors.after);
                }
                if (!res.data.hasOwnProperty('paging')) {
                    setLoadingComments(false);
                    setCommentsAfter('');
                }
            })
        }

    }, [commentsAfter])

    return (
        <Wrapper>
            <Accounts loadingUsers={loadingUsers} instagramUsers={instagramUsers} selectedInstagramID={selectedInstagramID} setSelectedInstagramID={setSelectedInstagramID} />
            <Posts loadingMedia={loadingMedia} media={media} setSelectedMediaID={setSelectedMediaID} />
            <Comments loadingComments={loadingComments} comments={comments} results={results} setResults={setResults} qualifiedResults={qualifiedResults} uniqueQualifiedResults={uniqueQualifiedResults} setSettings={setSettings} />
            <Settings results={results} settings={settings} setSettings={setSettings} setQualifiedResults={setQualifiedResults} setUniqueQualifiedResults={setUniqueQualifiedResults} />

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