import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import titles from '../../../titles'

type Props = {}

function NotFound({ }: Props) {
    return (
        <Wrapper>
            <Helmet>
                <title>{titles.notfound}</title>
            </Helmet>
            Ooops... Randomer, we are sorry that you requested a random page!
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
`
export default NotFound