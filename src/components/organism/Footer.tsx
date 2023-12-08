import React from 'react'
import styled from 'styled-components'
import DonateButton from '../atoms/DonateButton'

type Props = {}

function Footer({ }: Props) {
    return (
        <Wrapper>
            <Content> Support the creator - Donate via <DonateButton /></Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    z-index: 2;
    color: #191919;
    font-family: "Work Sans";
    font-size: 15px;
    height: 50px;
    display: flex;
    justify-content: Center;
    align-items: center;
    margin-top: 45px;
    margin-bottom: 10px;
`

const Content = styled.div`
    height: 100%;
`

export default Footer