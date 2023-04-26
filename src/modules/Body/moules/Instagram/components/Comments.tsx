import React, { useEffect, useState } from 'react'
import { Header, Instruction } from '../../common.styled'
import styled from 'styled-components'

type Props = {
    loadingComments: boolean,
    comments: [],
    results: Object[],
    setResults: Function,
    uniqueResults: Object[],
    setUniqueResults: Function,
    qualifiedResults: Object[],
    setQualifiedResults: Function,
}


function Comments({
    loadingComments,
    comments,
    results,
    setResults,
    uniqueResults,
    setUniqueResults,
    qualifiedResults,
    setQualifiedResults,
}: Props) {


    useEffect(() => {
        let results: Object[] = []
        comments.forEach((comment: any) => {
            let obj = { id: comment.id, username: comment.username, text: comment.text, type: 'c' }
            results.push(obj);
            if (comment.hasOwnProperty('replies')) {
                comment['replies']['data'].forEach((reply: any) => {
                    obj = { id: reply.id, username: reply.username, text: reply.text, type: 'r' }
                    results.push(obj);
                });
            }
        });
        let uniqueUsernames: string[] = []
        let uniqueResults = results.filter((element: any) => {
            const isDuplicate = uniqueUsernames.includes(element.username);

            if (!isDuplicate) {
                uniqueUsernames.push(element.username)
                return true;
            }
            return false;
        })
        setUniqueResults(uniqueResults);
        setResults(results);
        setQualifiedResults(results);

    }, [comments])



    return (
        <Wrapper>
            <Header>INSTAGRAM COMMENTS</Header>
            <Instruction>Count of  enteties based on settings below</Instruction>
            {loadingComments ? "Loading" : <Content>
                <Box><Title>Unique Participants</Title><Count>{uniqueResults.length}</Count></Box>
                <Box><Title>Comments</Title><Count>{qualifiedResults.filter((rec: any) => rec.type === 'c').length}</Count></Box>
                <Box><Title>Replies</Title><Count>{qualifiedResults.filter((rec: any) => rec.type === 'r').length}</Count></Box>
                <Box><Title>Additional Entries</Title><Count>+{qualifiedResults.filter((rec: any) => rec.type === 'a').length}</Count></Box>
                <Box><Title>Total</Title><Count>{qualifiedResults.length}</Count></Box>
            </Content>}

        </Wrapper>
    )
}

const Wrapper = styled.div`
    border: 1px solid #fad5dbcf;
    border-radius: 10px;
    padding: 2% 3%;
    margin-top: 1%;
`

const Content = styled.div`
    display: flex;
    justify-content: center;
`

const Box = styled.div`
    width: 30%;
    text-align: center;
`

const Title = styled.div`
    
`

const Count = styled.div`
    
`

export default Comments