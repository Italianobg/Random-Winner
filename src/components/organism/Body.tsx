import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../pages/Home'
import Facebook from '../pages/Facebook'
import Instagram from '../pages/Instagram'
import Admin from '../pages/Admin'
import Privacy from '../pages/Privacy'
import NotFound from '../pages/NotFound'
import DataContextProvider from '../../provider/Data'


type Props = {}

function Body({ }: Props) {
    return (
        <Wrapper>
            <DataContextProvider>
                <Routes>
                    <Route path="*" element={<NotFound />} ></Route>
                    <Route path="" element={<Home />} ></Route>
                    {/* <Route path="facebook" element={<Facebook />} ></Route> */}
                    <Route path="instagram" element={<Instagram />} ></Route>
                    <Route path="privacy" element={<Privacy />} ></Route>
                    {/* <Route path="admin" element={<Admin />} ></Route> */}
                </Routes>
            </DataContextProvider>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-grow: 1;
`

export default Body