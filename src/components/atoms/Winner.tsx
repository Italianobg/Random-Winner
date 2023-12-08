import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
    number?: number,
    name: string,
    text: string,
}

function Winner({ number, name, text }: Props) {
    return (
        <Wrapper>
            <WinnerBox>
                {number ? <Number># {number}</Number> : ''}
                <Name to={`https://instagram.com/${name}`}>@{name}</Name>
                <Text>{text.length > 160 ? text.slice(0, 160) + '...' : text}</Text>
            </WinnerBox>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    box-sizing: border-box;
    background-color: rgb(25, 25, 25);
    color: white;
    width: 200px;
    height: 280px;
    border-radius: 5px;

    :hover {
        background-color: #191919bc;
    }
`

const WinnerBox = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 12px;
    align-items: center;
    justify-content: center;
    font-family: "Work Sans";
    font-size: 18px;
`

const Number = styled.div`
    font-size: 22px;
    color: white;
    font-weight: 600;
    margin: 5px;
    text-align: center;
`

const Name = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: 600;
    margin: 5px;
    text-align: center;
`

const Text = styled.div`
    margin-top: 4px;
    font-family: "Open Sans";
    font-size: 14px;
`

export default Winner