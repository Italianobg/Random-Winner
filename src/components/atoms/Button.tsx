import React from 'react'
import { Link, To } from 'react-router-dom'
import styled from 'styled-components'

type Props = {
    text: string,
    link?: To,
    width?: string,
    height?: string,
    disabled?: boolean,
}

function Button({ text, link, width, height }: Props) {
    return (
        <Wrapper width={width} height={height} >
            <ButtonLink to={link || ''} >
                {text}
            </ButtonLink>
        </Wrapper >
    )
}

const Wrapper = styled.div<{ width?: string, height?: string, disabled?: boolean }>`
    width: ${p => p.width || "180px"} ;
    height: ${p => p.height} ;
    background-color: #191919;   
    border: none;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    :hover{
        background-color: #191919bc;
    }
`

const ButtonLink = styled(Link)`
    padding: 10px 25px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 2;
    font-size: 20px;
    color: #e0e0e0;
    font-weight: 600;
    font-family: "Work Sans";
    text-align: center;
    cursor: pointer;
    text-align: center;
    vertical-align: center;
`

export default Button