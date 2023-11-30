import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Option from '../atoms/Option'

type Props = {
    selectedInstagramID: string,
    loadingMedia: boolean,
    media: [],
    setSelectedMediaID: Function
}

function Posts({ selectedInstagramID, loadingMedia, media, setSelectedMediaID }: Props) {

    return (
        <Wrapper>
            <Option number='3' title='posts' text='Your posts' />
            {selectedInstagramID.length > 0 ? <Content>
                {
                    loadingMedia ? 'Loading'
                        : <div>
                            {media.length > 0 ?
                                <ConcentSelect name="posts" id="posts" onChange={(e) => {
                                    setSelectedMediaID(e.target.value)
                                }}><option key='select' value='none' >Select Post</option>
                                    {media.map((post: any) => {
                                        return <option key={post.id} value={post.id} >{post.caption.slice(0, 70) + '...'}</option >
                                    })}</ConcentSelect>
                                : 'No Posts'}
                        </div>
                } </Content> :
                ""}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: top;
    margin-bottom: 40px;
    align-items: center;
`

const Content = styled.div`
    font-family: "Work Sans";
    flex-grow: 1;
    color: black;
    font-size: 16px;
`

const ConcentSelect = styled.select`
    box-sizing: border-box;
    padding: 6px;
    position: relative;
    z-index: 2;
    font-size: 16px;
    width: 100%;

    option{
        font-size: 16px;
        padding: 2px;
        box-sizing: border-box;
    }
`




export default Posts