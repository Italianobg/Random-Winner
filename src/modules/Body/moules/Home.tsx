import React from 'react'
import styled from 'styled-components'

type Props = {}

function Home({ }: Props) {
    return (
        <Wrapper>
            Instagram Comment Picker: This easy-to-use tool allows you to randomly select a winner from the comments on your Instagram post, filter out duplicate entries, and exclude comments containing specific keywords.
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
`

const Plans = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 15px 0px;
`

const Box = styled.div`
    width: 28%;
    padding: 15px 5px;
    border: 1px solid rgba(160,160,160);
    border-radius: 5px;
    display: flex;
    flex-direction: column; 
    align-items: center;
`

const Header = styled.div`
    
`

const Value = styled.div`
    
`

const Save = styled.div`
    
`

const Order = styled.div`
    
`

const Disclamer = styled.div`
    
`

export default Home