import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Instruction } from '../../assets/css/common.styled'
import { DataContext } from '../../provider/Data'
import { applySettings } from '../../utils/instagram'
import { removeDuplicates } from '../../utils/common'

type Props = {}

function UpdatedEntries({ }: Props) {
    const { data, setDataData } = useContext(DataContext);

    let { loadingComments, comments, settings } = data;
    let { uniqueUserCounter, commentsCounter, repliesCounter, additionalEntriesCounter } = data.qualifiedCommentsStats;

    useEffect(() => {
        applySettings(data, setDataData);
    }, [comments, settings])

    return (
        <Wrapper>
            <Instruction>Total entries</Instruction>
            {loadingComments ? 'Records retrieved: ' + comments.length : ''}
            {
                loadingComments ? "Loading" : <BoxContent>
                    <Box><Title><i>Unique Users</i></Title><Count>{uniqueUserCounter}</Count></Box>
                    <Box><Title><i>Comments</i></Title><Count>{commentsCounter}</Count></Box>
                    <Box><Title><i>Replies</i></Title><Count>{repliesCounter}</Count></Box>
                    <Box><Title><i>Extra</i></Title><Count>{additionalEntriesCounter}</Count></Box>
                    <Box><Title><i>Total</i></Title><Count>{commentsCounter + repliesCounter + additionalEntriesCounter}</Count></Box>
                </BoxContent>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-bottom: 20px;
    border-right: 7px solid black;
`

const BoxContent = styled.div`
    display: flex;
    justify-content: center;

`

const Box = styled.div`
    width: 30%;
    text-align: center;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.div`
    margin-bottom: 7px;
`

const Count = styled.div`
    font-size: 18px;
`

export default UpdatedEntries