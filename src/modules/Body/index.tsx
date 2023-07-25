import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Home from './modules/Home'
import Facebook from './modules/Facebook'
import Instagram from './modules/Instagram'
import Admin from './modules/Admin'
import Privacy from './modules/Privacy'
import NotFound from './modules/NotFound'


type Props = {}

function Body({ }: Props) {
    return (
        <Wrapper>
            <Routes>
                <Route path="*" element={<NotFound />} ></Route>
                <Route path="" element={<Home />} ></Route>
                {/* <Route path="facebook" element={<Facebook />} ></Route> */}
                <Route path="instagram" element={<Instagram />} ></Route>
                <Route path="privacy" element={<Privacy />} ></Route>
                {/* <Route path="admin" element={<Admin />} ></Route> */}
            </Routes>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-grow: 1;
`

export default Body