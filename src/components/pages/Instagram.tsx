import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { UserContext } from '../../provider/Profile';
import Accounts from '../molecules/Accounts';
import Posts from '../molecules/Posts';
import Settings from '../molecules/Settings';
import Comments from '../molecules/Comments';
import Raffle from '../molecules/Raffle';
import { Helmet } from 'react-helmet-async';
import titles from '../../titles';
import PDFReport from '../molecules/PDFReport';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Login from '../molecules/Login';
import Winners from '../molecules/Winners';
import { DataContext } from '../../provider/Data';
import { clearData } from '../../utils/instagram';

type Props = {}

function Instagram({ }: Props) {

    const { user } = useContext(UserContext);
    const { setDataData } = useContext(DataContext);

    useEffect(() => {
        if (!user) {
            clearData(setDataData);
        }
    }, [user])

    return (
        <Wrapper>
            <Helmet>
                <title>{titles.instagram}</title>
            </Helmet>
            <Login />
            <Accounts />
            <Posts />
            <Comments />
            <Settings />
            <Raffle />
            <Winners />
            {/* <PDFDownloadLink document={<PDFReport />} fileName="somename.pdf">
                {({ blob, url, loading, error }) =>
                    loading ? 'Loading document...' : 'Download now!'
                }
            </PDFDownloadLink> */}
            {/* <PDFViewer width="1200" height="800">
                <PDFReport selectedInstagramAccount={selectedInstagramAccount} />
            </PDFViewer> */}
        </Wrapper >
    )
}

const Wrapper = styled.div`

    `



export default Instagram