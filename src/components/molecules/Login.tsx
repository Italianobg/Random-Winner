import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../provider/Profile';
import Logout from './Logout';
import FBLogin from './FBLogin';
import Option from '../atoms/Option';

type Props = {}

function Login({ }: Props) {

    const { user, setUserData } = useContext(UserContext);

    return (
        <Wrapper>
            <Option number='1' title='login' text='login with your facebook account'></Option>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    position: relative;
`

const Profile = styled.div`
    margin-right: 30px;
`

export default Login