import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Home from './moules/Home'
import Facebook from './moules/Facebook'
import Instagram from './moules/Instagram'
import Admin from './moules/Admin'
import Privacy from './moules/Privacy'
import NotFound from './moules/NotFound'


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