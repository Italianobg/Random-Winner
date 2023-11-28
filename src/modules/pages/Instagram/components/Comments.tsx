import React, { useEffect, useState, } from 'react'
import { Header, Instruction, Minus, Plus } from '../../../Body/modules/common.styled'
import styled from 'styled-components'
import { removeDuplicates } from '../utils'

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
    const [display, setDisplay] = useState('hide');

    function toggle() {
        if (display === 'hide')
            setDisplay('show');
        else
            setDisplay('hide')
    }

    useEffect(() => {
        if (selectedMediaID.length > 0) {
            setDisplay('show');
        } else {
            setDisplay('hide');
        }
    }, [selectedMediaID])


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
            <Header onClick={() => { toggle() }}>
                <span>INSTAGRAM COMMENTS</span>
                <Minus className={display}>—</Minus>
                <Plus className={display}>+</Plus>
            </Header>
            <Content className={display}>
                <Instruction>Comments Stats</Instruction>
                {loadingComments ? "Loading" : <BoxContent>
                    <Box><Title><i>Unique users</i></Title><Count>{uniqueResults.length}</Count></Box>
                    <Box><Title><i>Comments</i></Title><Count>{results.filter((rec: any) => rec.type === 'c').length}</Count></Box>
                    <Box><Title><i>Replies</i></Title><Count>{results.filter((rec: any) => rec.type === 'r').length}</Count></Box>
                    <Box><Title><i>Total Comments</i></Title><Count>{results.length}</Count></Box></BoxContent>}

                <br />
                <Instruction> Count of entries based on settings below</Instruction>
                {loadingComments ? 'Records retrieved: ' + comments.length : ''}
                {
                    loadingComments ? "Loading" : <BoxContent>
                        <Box><Title><i>Unique entires</i></Title><Count>{uniqueQualifiedResults.length}</Count></Box>
                        <Box><Title><i>Comments</i></Title><Count>{qualifiedResults.filter((rec: any) => rec.type === 'c').length}</Count></Box>
                        <Box><Title><i>Replies</i></Title><Count>{qualifiedResults.filter((rec: any) => rec.type === 'r').length}</Count></Box>
                        <Box><Title><i>Additional Entries</i></Title><Count>+{qualifiedResults.filter((rec: any) => rec.type === 'a').length}</Count></Box>
                        <Box><Title><i>Total</i></Title><Count>{qualifiedResults.length}</Count></Box>
                    </BoxContent>
                }
                <br />
                <Instruction>Engagement</Instruction>
                <Box><Title><i>Engagement</i></Title><Count>{((results.length / selectedInstagramAccount.followers_count) * 100).toFixed(1)} %</Count></Box>
            </Content>
        </Wrapper >
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

    &.show{
        display: block;
    }
    &.hide{
        display: none;
    }
            `

const BoxContent = styled.div`
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