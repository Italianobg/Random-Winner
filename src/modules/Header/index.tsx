import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import { UserContext } from '../../provider/Profile';
import logo from '../../assets/images/RandomeR Logo.png';

type Props = {}

function Header({ }: Props) {

    const { user, setUserData } = useContext(UserContext);

    return (
        <Wrapper>
            {/* <Logo><img src={logo} alt="Logo" /></Logo> */}
            <Nav>
                <Link to="">HOME</Link>
                {/* <Link to="facebook">FACEBOOK</Link> */}
                <Link to="instagram">INSTAGRAM</Link>
                {/* <Link to="admin">ADMIN</Link> */}
            </Nav>
        </Wrapper >
    )
}

const Wrapper = styled.div`
    padding-top: 50px;
    width: 70%;
    margin: 0 auto;
    padding-bottom: 70px;
`

const Logo = styled.div`
    width: 22%;

    img{
        width: 100%;
    }
`

const Nav = styled.div`
    position: relative;
    z-index: 2;
    font-size: 25px;
    color: #191919;
    font-family: "Work Sans";
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const Link = styled(NavLink)`
    text-decoration: none;
    margin: 4px 7px;
    color: #191919;
    font-weight: 400;
    &.active {
    font-weight: 900;
    border-radius: 4px;
  }
`

export default Header