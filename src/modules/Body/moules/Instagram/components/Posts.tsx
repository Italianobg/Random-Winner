import React from 'react'
import styled from 'styled-components'
import { Header, Instruction } from '../../common.styled'

type Props = {
    loadingMedia: boolean,
    media: [],
    setSelectedMediaID: Function
}

function Posts({ loadingMedia, media, setSelectedMediaID }: Props) {
    return (
        <Wrapper>
            <Header>INSTAGRAM POSTS</Header>
            <Instruction>Your Instagram posts</Instruction>

            {loadingMedia ? 'Loading'
                : <>
                    {media.length > 0 ?
                        <select name="posts" id="posts" onChange={(e) => {
                            setSelectedMediaID(e.target.value)
                        }}><option key='select' value='none' >Select Post</option>
                            {media.map((post: any) => {
                                return <option key={post.id} value={post.id} >{post.caption.slice(0, 80) + '...'}</option >
                            })}</select>
                        : 'No Posts'}
                </>}

        </Wrapper>
    )
}

const Wrapper = styled.div`
            border: 1px solid #fad5dbcf;
            border-radius: 10px;
            padding: 2% 3%;
            margin-top: 1%;

            select{
                width: 100%;
            font-size: 18px;
            padding: 0.7%;
            border: 1px solid #fab1becf;
            border-radius: 4px;
    }
            `



export default Posts