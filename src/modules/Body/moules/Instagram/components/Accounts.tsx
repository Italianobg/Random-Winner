import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header, Instruction } from '../../common.styled';

type Props = {
    loadingUsers: boolean,
    instagramUsers: Object[],
    selectedInstagramID: string,
    setSelectedInstagramID: Function,
}

function Accounts({ loadingUsers, instagramUsers, selectedInstagramID, setSelectedInstagramID }: Props) {

    const [display, setDisplay] = useState('show');

    function toggle() {
        if (display === 'hide')
            setDisplay('show');
        else
            setDisplay('hide')
    }

    useEffect(() => {
        if (selectedInstagramID.length > 0) {
            setDisplay('hide');
        }
    }, [selectedInstagramID])


    return (
        <Wrapper>
            <Header onClick={() => { toggle() }}>
                <span>INSTAGRAM ACCOUNTS</span>
                <Minus className={display}>—</Minus>
                <Plus className={display}>+</Plus>
            </Header>
            <Instruction className={display}>Connected Instagram accounts:</Instruction>
            {loadingUsers ? 'Loading' : <div>
                {
                    instagramUsers.length > 0 ? <Pages className={display}>{instagramUsers.map((instagramUser: any) => {
                        return <UserBox key={instagramUser.instagram_business_account.id} className={instagramUser.instagram_business_account.id === selectedInstagramID ? 'selected' : ''} onClick={() => {
                            setSelectedInstagramID(instagramUser.instagram_business_account.id)
                        }}><Name>{instagramUser.instagram_business_account.name}</Name>
                            <Image><img src={instagramUser.instagram_business_account.profile_picture_url} alt="Page Image" /></Image>
                            <Followers>Followers: {instagramUser.instagram_business_account.followers_count}</Followers>
                            <Bio>{instagramUser.instagram_business_account.biography}</Bio>
                        </UserBox>
                    })}</Pages> : 'No Linked Instagram Pages'
                }</div>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border: 1px solid #fad5dbcf;
    border-radius: 10px;
    padding: 2% 3%;
    margin-top: 1%;
    `

const Minus = styled.div`
    &.show{
        display: flex;
    }
    &.hide{
        display: none;
    }
`
const Plus = styled.div`
    &.show{
        display: none;
    }
    &.hide{
        display: flex;
    }
`

const Pages = styled.div`
    display: flex;

    &.show{
        display: flex;
    }
    &.hide{
        display: none;
    }
`
const UserBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #fad5dbcf;
    background-color: #ffd3db44;
    border-radius: 5px;
    width: 30%;
    margin: 1%;
    box-sizing: border-box;
    padding: 4px;
    align-items: center;

    &.selected{
        border: 1px solid #fab1becf;
        background-color: #ffd3dbca;
    }
`

const Name = styled.div`
    margin: 2%;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`

const Image = styled.div`
    width: 80%;
     
    img{
        max-width: 100%;
        max-height: 100%;
        border-radius: 50%;
        border: 1px solid #f7bdc7cf;
    }
`

const Followers = styled.div`
    margin-top: 2%;
`

const Bio = styled.div`
    font-size: 15px;
    margin-top: 1%;
    text-align: justify;
    padding: 6%;
`

export default Accounts