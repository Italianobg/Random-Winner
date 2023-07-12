import React from 'react'
import styled from 'styled-components'

type Props = { setUserData: Function }

function Logout({ setUserData }: Props) {

    function Logout() {
        console.log("Logout");
        setUserData({});
    }

    return (
        <Button type="button" onClick={() => Logout()}> <div>Log out</div></Button >
    )
}

const Button = styled.button` 
    display: flex; 
    border: 0px; 
    border-radius: 3px; 
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px; 
    color: rgb(255, 255, 255); 
    cursor: pointer; 
    font-size: 17px; 
    margin: 5px 0px 5px 15px; 
    height: calc(70% - 0px);
    overflow: hidden; 
    padding: 0px 10px 0px 10px; 
    user-select: none; 
    background: rgb(59, 89, 152);
    align-items: center;

    div{
        text-align: center; 
    }
`

export default Logout