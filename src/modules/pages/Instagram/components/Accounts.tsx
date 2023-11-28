import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header, Instruction, Minus, Plus } from '../../../Body/modules/common.styled';
import { UserContext } from '../../../../provider/Profile';
import FBLogin from '../../../molecule/FBLogin';
import Logout from '../../../molecule/Logout';
import Option from '../../../atoms/Option';

type Props = {
    loadingUsers: boolean,
    instagramUsers: Object[],
    selectedInstagramID: string,
    setSelectedInstagramID: Function,
    setSelectedInstagramAccount: Function,
}

function Accounts({ loadingUsers, instagramUsers, selectedInstagramID, setSelectedInstagramID, setSelectedInstagramAccount }: Props) {
    const { user, setUserData } = useContext(UserContext);
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
            <Option number='2' title='instagram accounts' text='Please select your instagram account' />
            {user.accessToken === undefined ? "" :
                <div>
                    {loadingUsers ? 'Loading' : <div>
                        {
                            instagramUsers.length > 0 ? <Pages className={display}>{instagramUsers.map((instagramUser: any) => {
                                return <UserBox key={instagramUser.instagram_business_account.id} className={instagramUser.instagram_business_account.id === selectedInstagramID ? 'selected' : ''} onClick={() => {
                                    setSelectedInstagramID(instagramUser.instagram_business_account.id);
                                    setSelectedInstagramAccount(instagramUser.instagram_business_account)
                                }}><Name>{instagramUser.instagram_business_account.name}</Name>
                                    <Image><img src={instagramUser.instagram_business_account.profile_picture_url} alt="Page Image" /></Image>
                                    <Followers>Followers: {instagramUser.instagram_business_account.followers_count}</Followers>
                                    <Bio>{instagramUser.instagram_business_account.biography}</Bio>
                                </UserBox>
                            })}</Pages> : 'No Linked Instagram Pages'
                        }
                    </div>}
                </div>}
        </Wrapper>
    )
}

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

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const InfoNumber = styled.div`
    font-size: 35px;
    color: #191919;
    font-weight: 900;
    font-family: "Work Sans";
`

const InfoHeader = styled.div`
    color: #191919;
    text-decoration: none;
    display: flex;
    align-items: center;
`

const InfoTitle = styled.div`
    font-size: 25px;
    font-weight: 600;
    font-family: "Work Sans";
    margin-left: 16px;
`

const InfoText = styled.div`
    margin-top: 16px;
    font-size: 18px;
    color: #7a7a7a;
    font-weight: 400;
    font-family: "Work Sans";
    text-align: left;
`

const Profile = styled.div`
    
`


export default Accounts