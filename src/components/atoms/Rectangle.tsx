import React from 'react'
import rectangle from "../../assets/images/rectangle.png"
import styled from 'styled-components'

type Props = {
}

function Rectangle({ }: Props) {
    return (
        <Wrapper>
            <img src={rectangle} alt="rectangle" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    width: 200px;
    rotate: 90deg;
    top: 90px;
    left: -60px;
    img {
        width: 100%;
    }
`


export default Rectangle