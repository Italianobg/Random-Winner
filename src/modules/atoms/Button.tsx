import React from 'react'
import { Link, To } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
    text: string,
    link?: To,
    width?: string,
}

function Button({ text, link, width }: Props) {
    return (
        <Wrapper width={width} >
            <ButtonLink to={link || ''}>
                {text}
            </ButtonLink>
        </Wrapper >
    )
}

const Wrapper = styled.div<{ width?: string, }>`
    width: ${p => p.width || "180px"} ;
    background-color: #191919;   
    border: none;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    :hover{
        background-color: #191919bc;
    }

`

const ButtonLink = styled(Link)`
    padding: 10px 25px;
    text-decoration: none;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    z-index: 2;
    font-size: 20px;
    color: #e0e0e0;
    font-weight: 600;
    font-family: "Work Sans";
    text-align: center;
    cursor: pointer;
    text-align: center;
`

export default Button