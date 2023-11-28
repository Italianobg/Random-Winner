import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button';

type Props = { setUserData: Function }

function Logout({ setUserData }: Props) {

    function Logout() {
        console.log("Logout");
        setUserData({});
    }

    return (
        <Wrapper onClick={() => Logout()}>
            <Button text='logout' ></Button >
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
`

export default Logout