import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import { UserContext } from '../../provider/Profile';
import FBLogin from './components/FBLogin';
import Logout from './components/Logout';

type Props = {}

function Header({ }: Props) {

    const { user, setUserData } = useContext(UserContext);

    return (
        <Wrapper>
            <Logo></Logo>
            <Nav>
                <Link to="">HOME</Link>
                <Link to="facebook">FACEBOOK</Link>
                <Link to="instagram">INSTAGRAM</Link>
                <Link to="admin">ADMIN</Link>
            </Nav>
            <Profile>
                {user.name ? <Nav><Name>Hello, {user.name}!</Name>
                    <Logout setUserData={setUserData} /></Nav> :
                    <FBLogin user={user} setUserData={setUserData} />
                }
            </Profile >
        </Wrapper >
    )
}

const Wrapper = styled.div`
    height: 150px;
    display: flex;
    justify-content: space-between;
`

const Logo = styled.div`
    background-image: url();
`

const Nav = styled.div`
    text-decoration:none;
    font-size: 24px;
    margin: 4px;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgb(189, 210, 255);
    padding: 0px 10px;
    border-radius:4px;
    justify-content: space-between;
`

const Link = styled(NavLink)`
    text-decoration: none;
    margin: 4px 7px;
    color: #2e2e2ebc;
    &.active {
    color: rgb(0, 0, 0);
    border-radius: 4px;
  }
`
const Profile = styled.div`
    width: 30%;
`

const Name = styled.div`
    font-size: 19px;
`

export default Header