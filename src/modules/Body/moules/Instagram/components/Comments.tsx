import React, { useEffect, useState, } from 'react'
import { Header, Instruction } from '../../common.styled'
import styled from 'styled-components'
import { removeDuplicates } from '../utils/filters'

type Props = {
    loadingComments: boolean,
    comments: Object[],
    qualifiedResults: Object[],
    setQualifiedResults: Function,
    settings: { mentions: number, replies: boolean, duplicate: boolean, exclude: string, add: string },
}


function Comments({
    loadingComments,
    comments,
    qualifiedResults,
    setQualifiedResults,
    settings
}: Props) {

    const [results, setResults] = useState<Object[]>([]);
    const [uniqueResults, setUniqueResults] = useState<Object[]>([]);
    const [uniqueQualifiedResults, setUniqueQualifiedResults] = useState<Object[]>([]);


    useEffect(() => {
        console.log(comments);
        let temp: Object[] = [];
        let tempResults: Object[] = [];

        if (loadingComments === false && comments.length > 0) {

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

            tempResults = results;

            if (settings.replies) {
                temp = tempResults.filter((res: any) => res.type !== 'r');
                tempResults = temp;
            }

            if (settings.mentions > 0) {
                temp = tempResults.filter((res: any) => {
                    let textArr = res.text.split(' ');
                    let counter = 0;
                    textArr.forEach((word: string) => {
                        if (word.startsWith('@') && word.length > 1) {
                            counter++;
                        }
                    });
                    if (counter >= settings.mentions) {
                        return true;
                    }
                    else return false;
                });
                tempResults = temp;
            }

            if (settings.duplicate) {
                temp = removeDuplicates(tempResults);
                tempResults = temp;
            }

            if (settings.exclude.length > 0) {
                let excludeArray = settings.exclude.split('\n').map((element: any) => {
                    if (element.startsWith('@')) { return element.slice(1) }
                    else return element;
                });
                temp = tempResults;
                temp.forEach((participant: any) => {
                    if (excludeArray.includes(participant.username)) {
                        temp.splice(temp.indexOf(participant), 1);
                    }
                });
                tempResults = temp;
            }

            if (settings.add.length > 0) {
                let addArray = settings.add.split('\n');

                addArray.forEach(participant => {
                    if (participant.startsWith('@')) {
                        if (participant.slice(1).length > 0) {
                            tempResults.push({ username: participant.slice(1), type: 'a' })
                        }
                    }
                    else {
                        if (participant.length > 0) {
                            tempResults.push({ username: participant, type: 'a' })
                        }
                    }
                });

            }

            setQualifiedResults(tempResults);
            setUniqueQualifiedResults(removeDuplicates(tempResults));
        }
    }, [comments, loadingComments, settings])


    return (
        <Wrapper>
            <Header>INSTAGRAM COMMENTS</Header>
            <Instruction>Comments Stats</Instruction>
            {loadingComments ? "Loading" : <Content>
                <Box><Title><i>Unique users</i></Title><Count>{uniqueResults.length}</Count></Box>
                <Box><Title><i>Comments</i></Title><Count>{results.filter((rec: any) => rec.type === 'c').length}</Count></Box>
                <Box><Title><i>Replies</i></Title><Count>{results.filter((rec: any) => rec.type === 'r').length}</Count></Box>
                <Box><Title><i>Total Comments</i></Title><Count>{results.length}</Count></Box></Content>}

            <br />
            <Instruction> Count of entries based on settings below</Instruction>
            {
                loadingComments ? "Loading" : <Content>
                    <Box><Title><i>Unique entires</i></Title><Count>{uniqueQualifiedResults.length}</Count></Box>
                    <Box><Title><i>Comments</i></Title><Count>{qualifiedResults.filter((rec: any) => rec.type === 'c').length}</Count></Box>
                    <Box><Title><i>Replies</i></Title><Count>{qualifiedResults.filter((rec: any) => rec.type === 'r').length}</Count></Box>
                    <Box><Title><i>Additional Entries</i></Title><Count>+{qualifiedResults.filter((rec: any) => rec.type === 'a').length}</Count></Box>
                    <Box><Title><i>Total</i></Title><Count>{qualifiedResults.length}</Count></Box>
                </Content>
            }
            <br />
            {loadingComments ? 'Records retrieved: ' + comments.length : ''}
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