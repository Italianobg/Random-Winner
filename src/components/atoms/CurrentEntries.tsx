import React, { useContext } from 'react'
import styled from 'styled-components'
import { Instruction } from '../../assets/css/common.styled'
import { DataContext } from '../../provider/Data'

type Props = {}

function CurrentEntries({ }: Props) {
    const { data } = useContext(DataContext);

    let { loadingComments } = data;
    let { uniqueUserCounter, commentsCounter, repliesCounter } = data.commentsStats;

    return (
        <Wrapper>
            <Instruction>Original post entries</Instruction>
            {loadingComments ? "Loading" :
                <BoxContent>
                    <Box><Title><i>Unique Users</i></Title><Count>{uniqueUserCounter}</Count></Box>
                    <Box><Title><i>Comments</i></Title><Count>{commentsCounter}</Count></Box>
                    <Box><Title><i>Replies</i></Title><Count>{repliesCounter}</Count></Box>
                    <Box><Title><i>Total Comments</i></Title><Count>{commentsCounter + repliesCounter}</Count></Box>
                </BoxContent>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-bottom: 20px;
    border-left: 7px solid black;
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

export default CurrentEntries