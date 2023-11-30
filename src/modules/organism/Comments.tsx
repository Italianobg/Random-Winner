import React, { useEffect, useState, } from 'react'
import { Instruction } from '../Body/modules/common.styled'
import styled from 'styled-components'
import { removeDuplicates } from '../pages/Instagram/utils'
import Option from '../atoms/Option'

type Props = {
    selectedMediaID: string,
    loadingComments: boolean,
    comments: Object[],
    results: Object[],
    setResults: Function,
    qualifiedResults: Object[],
    uniqueQualifiedResults: Object[],
    setSettings: Function,
    selectedInstagramAccount: any,
}


function Comments({
    selectedMediaID,
    loadingComments,
    comments,
    results,
    setResults,
    qualifiedResults,
    uniqueQualifiedResults,
    setSettings,
    selectedInstagramAccount
}: Props) {

    const [uniqueResults, setUniqueResults] = useState<Object[]>([]);

    useEffect(() => {
        setSettings({ mentions: 0, replies: false, duplicate: false, exclude: '', add: '' })
    }, [comments])

    useEffect(() => {

        let temp: Object[] = [];

        if (comments.length > 0 && loadingComments === false) {

            comments.forEach((comment: any) => {
                let obj = { id: comment.id, username: comment.username, text: comment.text, type: 'c' }
                temp.push(obj);
                if (comment.hasOwnProperty('replies')) {
                    comment['replies']['data'].forEach((reply: any) => {
                        obj = { id: reply.id, username: reply.username, text: reply.text, type: 'r' }
                        temp.push(obj);
                    });
                }
            });
            // results = array of total comments and posts
            setResults(temp);

            // uniqueResults = results unique usernames
            setUniqueResults(removeDuplicates(temp));

        } else {
            setResults([]);
            setUniqueResults([]);
        }

    }, [comments, loadingComments])

    return (
        <Wrapper>
            <Option number='4' title='comments' text='statistics' />
            {selectedMediaID.length > 0 ?
                <Content>
                    <Instruction> Current entries</Instruction>
                    {loadingComments ? "Loading" : <BoxContent>
                        <Box><Title><i>Unique Users</i></Title><Count>{uniqueResults.length}</Count></Box>
                        <Box><Title><i>Comments</i></Title><Count>{results.filter((rec: any) => rec.type === 'c').length}</Count></Box>
                        <Box><Title><i>Replies</i></Title><Count>{results.filter((rec: any) => rec.type === 'r').length}</Count></Box>
                        <Box><Title><i>Total Comments</i></Title><Count>{results.length}</Count></Box></BoxContent>}

                    <br />
                    <Instruction> Count of entries based on settings below</Instruction>
                    {loadingComments ? 'Records retrieved: ' + comments.length : ''}
                    {
                        loadingComments ? "Loading" : <BoxContent>
                            <Box><Title><i>Unique Entires</i></Title><Count>{uniqueQualifiedResults.length}</Count></Box>
                            <Box><Title><i>Comments</i></Title><Count>{qualifiedResults.filter((rec: any) => rec.type === 'c').length}</Count></Box>
                            <Box><Title><i>Replies</i></Title><Count>{qualifiedResults.filter((rec: any) => rec.type === 'r').length}</Count></Box>
                            <Box><Title><i>Additional Entries</i></Title><Count>+{qualifiedResults.filter((rec: any) => rec.type === 'a').length}</Count></Box>
                            <Box><Title><i>Total</i></Title><Count>{qualifiedResults.length}</Count></Box>
                        </BoxContent>
                    }
                    <br />
                    <Instruction>Engagement</Instruction>
                    <Box><Title><i>Engagement</i></Title><Count>{((results.length / selectedInstagramAccount.followers_count) * 100).toFixed(1)} %</Count></Box>
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

const BoxContent = styled.div`
    display: flex;
    justify-content: center;

`

const Box = styled.div`
    width: 30%;
    text-align: center;
    font-size: 16px;
`

const Title = styled.div`
    margin-bottom: 7px;
`

const Count = styled.div`
    font-size: 18px;
`

export default Comments