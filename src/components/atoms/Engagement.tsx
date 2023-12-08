import React, { useContext } from 'react'
import styled from 'styled-components'
import { Instruction } from '../../assets/css/common.styled'
import { DataContext } from '../../provider/Data'

type Props = {}

function Engagement({ }: Props) {
    const { data } = useContext(DataContext);

    let { comments, selectedInstagramAccount } = data;

    return (
        <Wrapper>
            <Instruction>Engagement</Instruction>
            <BoxContent>
                <Box>
                    <Title><i>Engagement rate</i></Title>
                    <Count>{((comments.length / +selectedInstagramAccount.followers_count) * 100).toFixed(1)} %</Count>
                </Box>
            </BoxContent>
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

export default Engagement