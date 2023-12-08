import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import Option from '../atoms/Option'
import { Comment, DataContext } from '../../provider/Data'
import { UserContext } from '../../provider/Profile'
import { getInstagramMedia } from '../../api/lib/instagram'

type Props = {
}

function Posts({ }: Props) {
    const { user } = useContext(UserContext);
    const { data, setDataData } = useContext(DataContext);
    const accountId = data.selectedInstagramAccount.id;
    const loading = data.loadingMedia;
    const media = data.media;

    useEffect(() => {
        if (accountId.length > 0) {
            setDataData({ ...data, loadingMedia: true })
            getInstagramMedia(accountId, user.accessToken).then((res) => {
                setDataData({ ...data, loadingMedia: false, media: res.data.data, selectedMediaId: '' });
            })
        }
    }, [data.selectedInstagramAccount])

    return (
        <Wrapper>
            <Option number='3' title='posts' text='your posts' />
            {accountId.length > 0 ?
                <Content>
                    {
                        loading ? 'Loading'
                            : <div>
                                {media.length > 0 ?
                                    <ConcentSelect name="posts" id="posts" onChange={(e) => {
                                        setDataData({ ...data, selectedMediaId: e.target.value })
                                    }}><option key='select' value='none' >Select Post</option>
                                        {media.map((post: any) => {
                                            return <option key={post.id} value={post.id} >{post.caption.slice(0, 70) + '...'}</option >
                                        })}</ConcentSelect>
                                    : 'No Posts'}
                            </div>
                    }
                </Content> :
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
    margin-right: 30px;
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