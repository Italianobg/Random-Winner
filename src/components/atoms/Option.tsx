import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

type Props = {
    number: string,
    title: string,
    text: string,
    link?: string
}

function Option({ number, title, text, link }: Props) {

    return (
        <Info>
            <InfoHeader to={link ? link : "#"}>
                <InfoNumber>{number.padStart(2, '0')}.</InfoNumber>
                <InfoTitle>{title}</InfoTitle>
            </InfoHeader>
            <InfoText>{text}</InfoText>
        </Info>
    )
}

const Info = styled.div`
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    flex-basis: 400px;
    flex-shrink: 0;
`

const InfoNumber = styled.div`
    font-size: 35px;
    color: #191919;
    font-weight: 900;
    font-family: "Work Sans";
`

const InfoHeader = styled(Link)`
    color: #191919;
    display: flex;
    align-items: center;
    text-decoration: none;
`

const InfoTitle = styled.div`
    font-size: 25px;
    font-weight: 600;
    font-family: "Work Sans";
    margin-left: 16px;

`

const InfoText = styled.div`
    font-size: 18px;
    color: #7a7a7a;
    font-weight: 400;
    font-family: "Work Sans";
    text-align: left;
  
`

export default Option