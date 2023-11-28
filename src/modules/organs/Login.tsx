import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../provider/Profile';
import Logout from '../molecule/Logout';
import FBLogin from '../molecule/FBLogin';
import Option from '../atoms/Option';
type Props = {}

function Login({ }: Props) {

    const { user, setUserData } = useContext(UserContext);

    return (
        <Wrapper>
            <Option number='1' title='login' text='Please login with your facebook account'></Option>
            <Profile>
                {user.name ?
                    <Logout setUserData={setUserData} /> :
                    <FBLogin user={user} setUserData={setUserData} />
                }
            </Profile >
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const Info = styled.div`
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

const Profile = styled.div`
    
`

export default Login