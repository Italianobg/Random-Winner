import React, { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../provider/Profile';
import Option from '../atoms/Option';
import Account from '../atoms/Account';
import { DataContext } from '../../provider/Data';

type Props = {}

function Accounts({ }: Props) {
    const { user } = useContext(UserContext);
    const { data, setDataData } = useContext(DataContext);

    let { instagramAccounts, loadingInstagramAccounts, selectedInstagramAccountId } = data;
    console.log(data);

    return (
        <Wrapper>
            <Option number='2' title='instagram accounts' text='Please select your instagram account' />
            {user.accessToken === undefined ?
                "" : <Content>
                    {
                        loadingInstagramAccounts ? 'Loading' : <List>
                            {
                                instagramAccounts.length > 0 ?
                                    <span>{data.instagramAccounts.map((instagramUser: any) => {
                                        return <Account
                                            key={instagramUser.instagram_business_account.id}
                                            instagramUser={instagramUser}
                                            selectedId={selectedInstagramAccountId}
                                        />
                                    })}</span>
                                    :
                                    <p>No Linked Instagram Pages</p>
                            }
                        </List>
                    }
                </Content>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: top;
    margin-bottom: 40px;
`

const Content = styled.div`
    flex-grow:1; 
    font-size: 16px;
    color: rgb(122, 122, 122);
    font-weight: 400;
    font-family: "Work Sans";
`

const List = styled.div`
    width: 100%;
    display: flex;
    flex-grow: 1;
    gap: 7px;
    color: black;
`

export default Accounts