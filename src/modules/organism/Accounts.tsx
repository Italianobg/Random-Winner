import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../provider/Profile';
import Option from '../atoms/Option';
import Account from '../atoms/Account';
import { DataContext } from '../../provider/Data';
import { clearData, getAccounts, getInstagramAccounts } from '../../utils/instagram';
import { getUserAccounts } from '../../api/lib/instagram';

type Props = {}

function Accounts({ }: Props) {
    const { user } = useContext(UserContext);
    const { data, setDataData } = useContext(DataContext);

    let { instagramAccounts, loadingInstagramAccounts, selectedInstagramAccountId } = data;

    useEffect(() => {
        if (user.id) {
            setDataData({ ...data, loadingInstagramAccounts: true });
            getUserAccounts(user.accessToken).then((res) => {
                let pages: Object[] = getAccounts(res);
                let instagramAccounts = getInstagramAccounts(pages);
                setDataData({
                    ...data,
                    instagramAccounts: [...instagramAccounts],
                    loadingInstagramAccounts: false
                });
            })
                .catch((err) => {
                    if (err.response.data.error.message.includes('Session has expired')) {
                        clearData(setDataData);
                    }
                })
        } else {
            clearData(setDataData);
        }
    }, [user])

    return (
        <Wrapper>
            <Option number='2' title='instagram accounts' text='select your instagram account' />
            {user.accessToken === undefined ?
                "" : <Content>
                    {
                        loadingInstagramAccounts ? 'Loading' : <List>
                            {
                                instagramAccounts.length > 0 ?
                                    <span>{data.instagramAccounts.map((instagramAccount: any) => {
                                        return <Account
                                            key={instagramAccount.instagram_business_account.id}
                                            instagramUser={instagramAccount}
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