import React, { useContext } from 'react'
import styled from 'styled-components';
import { DataContext } from '../../provider/Data';

type Props = {
    instagramUser: {
        instagram_business_account: {
            id: string,
            name: string,
            followers_count: string,
            profile_picture_url: string,
        },
    },
    selectedId: string,
}

function Account({ instagramUser, selectedId }: Props) {

    const { data, setDataData } = useContext(DataContext);

    function selectAccount(id: string) {
        setDataData({ ...data, selectedInstagramAccountId: id, selectedInstagramAccount: instagramUser.instagram_business_account })
    }

    return (
        <Wrapper className={instagramUser.instagram_business_account.id === selectedId ? 'selected' : ''}>
            <UserBox key={instagramUser.instagram_business_account.id} onClick={() => selectAccount(instagramUser.instagram_business_account.id)}>
                <Name>{instagramUser.instagram_business_account.name}</Name>
                {instagramUser.instagram_business_account.profile_picture_url ? <Image><img src={instagramUser.instagram_business_account.profile_picture_url} alt="account" /></Image> : ''}
                <Followers>Followers: {instagramUser.instagram_business_account.followers_count}</Followers>
            </UserBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    box-sizing: border-box;
    background-color: rgb(25, 25, 25);
    color: white;
    width: 200px;
    height: 260px;
    border-radius: 5px;

    :hover{
      background-color: rgba(25, 25, 25, 0.737);
    }

    &.selected{
        border-radius: 5px;
        background-color: rgba(25, 25, 25, 0.815);
    }
`

const UserBox = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 12px;
    align-items: center;
    justify-content: space-between;
`

const Name = styled.div`
    margin: 5px;
    text-align: center;
`

const Image = styled.div`
    width: 80%;
     
    img{
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
        border: 1px solid #191919;
    }
`

const Followers = styled.div`
    margin-top: 2%;
`

export default Account