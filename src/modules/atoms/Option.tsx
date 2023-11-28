import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
    number: string,
    title: string,
    text: string,
}

function Option({ number, title, text }: Props) {

    const [display, setDisplay] = useState('show');

    function toggle() {
        if (display === 'hide')
            setDisplay('show');
        else
            setDisplay('hide')
    }

    return (
        <Info onClick={() => { toggle() }}>
            <InfoHeader>
                <InfoNumber>{number.padStart(2, '0')}.</InfoNumber>
                <InfoTitle>{title}</InfoTitle>
            </InfoHeader>
            <InfoText>{text}</InfoText>
        </Info>
    )
}

const Info = styled.div`
    margin-left: 60px;
    display: flex;
    flex-direction: column;
    width: 50%;
`

const InfoNumber = styled.div`
    font-size: 35px;
    color: #191919;
    font-weight: 900;
    font-family: "Work Sans";
`

const InfoHeader = styled.div`
    color: #191919;
    text-decoration: none;
    display: flex;
    align-items: center;
`

const InfoTitle = styled.div`
    font-size: 25px;
    font-weight: 600;
    font-family: "Work Sans";
    margin-left: 16px;
`

const InfoText = styled.div`
    margin-top: 16px;
    font-size: 18px;
    color: #7a7a7a;
    font-weight: 400;
    font-family: "Work Sans";
    text-align: left;
`

export default Option