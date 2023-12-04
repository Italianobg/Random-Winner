import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import Option from '../atoms/Option'
import { DataContext } from '../../provider/Data'
import { UserContext } from '../../provider/Profile'
import { getComments } from '../../utils/instagram'
import CurrentEntries from '../atoms/CurrentEntries'
import UpdatedEntries from '../atoms/UpdatedEntries'
import Engagement from '../atoms/Engagement'

type Props = {
}

function Comments({ }: Props) {

    const { user } = useContext(UserContext);
    const { data, setDataData } = useContext(DataContext);

    let { selectedMediaId } = data;

    useEffect(() => {
        if (user && data.selectedMediaId.length > 0 && data.selectedMediaId !== 'none') {
            setDataData({ ...data, loadingComments: true });
            // Get all comments and sets them to context variable "comments"
            getComments(data, setDataData, user, '');
            setDataData({ ...data, loadingComments: false })
        }
    }, [selectedMediaId])

    return (
        <Wrapper>
            <Option number='4' title='comments' text='statistics' />
            {selectedMediaId.length > 0 ?
                <Content>
                    <CurrentEntries />
                    <UpdatedEntries />
                    <Engagement />
                </Content> :
                ''}
        </Wrapper >
    )
}

const Wrapper = styled.div`
            display: flex;
            align-items: top;
            margin-bottom: 40px;
            align-items: top;
            `

const Content = styled.div`
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-family: "Work Sans";
            color: black;
            font-size: 16px;
            `

export default Comments