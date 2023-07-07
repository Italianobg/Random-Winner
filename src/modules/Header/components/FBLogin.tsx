import React from 'react'
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { addUser, getUserByID } from '../../../api/firestore';

type Props = { user: any, setUserData: Function }

function FBLogin({ user, setUserData }: Props) {
    return (
        <LoginSocialFacebook
            appId='1355230801924985'
            scope='pages_show_list,instagram_basic,pages_read_engagement,pages_read_user_content,public_profile'
            onResolve={(res: any) => {
                let { userID } = res.data;
                const fetchUserData = async () => {
                    const userDB = await getUserByID(userID);

                    if (userDB.length > 0) {
                        let userData: any = { ...userDB[0].data(), ...res.data };
                        setUserData(userData);
                    } else {
                        addUser(res.data);
                        setUserData(res.data);
                    }
                }

                fetchUserData().catch((err) => console.log(err));

            }}
            onReject={(err) => console.log(err)}
        >
            <FacebookLoginButton />
        </LoginSocialFacebook>
    )
}

export default FBLogin