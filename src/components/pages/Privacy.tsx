import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import titles from '../../titles'


type Props = {}

function Privacy({ }: Props) {
    return (
        <Wrapper>
            <Helmet>
                <title>{titles.privacy}</title>
            </Helmet>
            <Content>
                <h3>PRIVACY POLICY</h3>
                <p>We value your privacy at RandomeR (https://randomer.eu), and we want to make sure it's easy for everyone to understand. To keep up with any new features, tools, or services we create, we may update our privacy policy from time to time.
                </p>
                <p>
                    The most recent version of our privacy policy is dated July 11, 2023.
                </p>

                <h4>WHO ARE WE?</h4>
                <p>RandomeR (owner of https://randomer.eu) is a division of 3DFill, a small company based in the Bulgaria.</p>

                <h4 >WHERE ARE WE LOCATED?</h4>
                <p>While we don't have a physical office, we are located in Plovdiv, Bulgaria.</p>

                <h4 >HOW CAN YOU CONTACT US?</h4>
                <p>To get in touch with us, you can reach out through the following channels:</p>

                <p>Email: info@randomer.eu.</p>
                <p>Please note that we do not offer phone support. Rest assured, we are committed to responding to your inquiries promptly, aiming to reply within 1 day, with a maximum response time of 3 days.</p>

                <h4 >WHICH SERVICES DO WE USE?</h4>
                <p>Here are the services we use:

                    Firebase: for hosting our server.
                    GoDaddy: for domain registration.
                    Google Adsense: for displaying advertisements.
                    Google Analytics: for analyzing website performance and user behavior.
                    Revolut: for managing our Premium memberships.
                    PayPal: for managing our Premium memberships.
                </p>
                <h4 >WHERE IS OUR SERVER LOCATED?</h4>
                <p>Our server is hosted on a virtual private server provided by Firebase, located in United States.</p>

                <h4 >HOW DO WE COLLECT DATA?</h4>
                <p>We gather the necessary data through the following official APIs:
                    <br /><br />
                    Facebook / Instagram Graph API.<br />
                    PayPal API<br />
                    REVOLUT API<br />
                </p>
                <p>Additionally, for data from non-social tools such as random name generators or word generators, it is directly stored or created by our server.
                </p>
                <h4>WHAT DATA DO WE STORE?</h4>
                <p>For giveaways or raffles conducted with our tools, we will only store the following information if the user running the raffle decides to store the result by utilizing the share buttons or copy link button. The specific details we might store (depending on the tool used) include:
                    <br /><br />
                    Information about the winner (name, profile link, and picture).<br />
                    Information about the giveaway post (ID and link of post).<br />
                    Information about the giveaway owner (ID, name and link of owner).<br />
                    Information about the raffle (number of entries, date of draw).<br /></p>
                <p>
                    We do not store the names of participants or any other personal data on our server. If you choose not to store the result of your giveaway and close your browser, the data will be permanently deleted. Retrieving this data will not be possible, so it's important to store the result if desired.
                    <br /></p>
                <p>When you log in to our tool using your social media accounts (e.g., Facebook, Instagram), certain information will be stored in your browser. This enables automatic login on subsequent tool access, eliminating the need for additional authentication. You can remove this stored information by clearing your browser data, cookies, and removing our app from Facebook.
                    <br /></p>
                <p>We may also store non-personal data in your browser via cookies, session data, or local storage to enhance the user experience or manage specific limits and features of our tools. This can be deleted by clearing your browser data.
                    <br /></p>
                <p>Note: We do not store personal data beyond the specified information related to the giveaway results and the login functionality with social media accounts.
                </p>
                <h4>TERMS OF SERVICE</h4>
                <p>Please find detailed information about our terms of service below. It is essential to read and understand them before utilizing our tools.
                </p>
                <h4>FACEBOOK & INSTAGRAM TOOLS</h4>
                <p>Our Facebook Tools and Instagram Tools utilize the Facebook Graph API from Meta to access data.
                    <br /></p>
                <p>The RandomeR app has undergone a review and approval process by Facebook, enabling it to use specific permissions for retrieving data. It's important to note that we only have read permissions, meaning we cannot post anything on your account. However, in order to obtain the accurate data, you must grant RandomeR the necessary read permissions on your behalf.
                    <br /></p>
                <p>During the Facebook login process, you will be prompted to allow access to these permissions. You have the ability to select which accounts or pages we can access. Rest assured that we only request the permissions required for our tool to function properly.
                    <br /></p>
                <p>Please be aware that we do not store or sell any of your Facebook and Instagram data.
                    <br /></p>
                <p>It is important to note that the results of our tools cannot be manipulated. We employ the following method for randomness:
                    <br /></p>
                <p>Math.random(): This client-side method utilizes JavaScript and operates directly within your browser. Our server does not process this randomness, ensuring that we have no influence over the raffle outcomes.<br />
                    For most tools, randomness is implemented on the client side, meaning it is executed within your browser without our server's involvement. Rest assured that we strive to maintain transparency and fairness throughout all our tools.
                </p>
                {/* <br /><br /> */}
                {/* WHAT IS RandomeR PREMIUM?<br />

            <p>RandomeR Premium is a subscription-based service we offer, providing users with exclusive features, expanded limits, and an ad-free website. By opting for RandomeR Premium, you can unlock enhanced functionalities and enjoy a seamless browsing experience without any advertisements.
                <br /></p>
            <p>For detailed information about the benefits and terms associated with RandomeR Premium, please visit our Premium page.
            </p> */}
                <h4>RESPONSIBILITY</h4>
                <p>We cannot be held responsible for any outcomes or consequences resulting from the use of our tools. While we strive to provide accurate and reliable services, the results obtained through our tools may vary and should be used at your own discretion. Users are solely responsible for their decisions and actions based on the information provided by our tools.
                    <br /><br />
                    By utilizing our tools, you acknowledge and accept that any consequences or events arising from their usage are beyond our control, and we shall not be held liable for any losses or damages incurred.
                </p>
                <h4>FINAL WORD</h4>
                <p>In conclusion, we sincerely appreciate your support and thank you for choosing our website. Your satisfaction is of utmost importance to us, and we are dedicated to assisting you with any questions or concerns you may have. Please don't hesitate to contact us via email or social media by sending a message. We are here to provide timely and helpful responses, ensuring your needs are met. Once again, thank you for your trust in our services.</p>
            </Content>
        </Wrapper >
    )
}

const Wrapper = styled.div`
    font-family: "Work Sans";
    display: flex;
    justify-content: center;

p{
    text-indent: 8px;
}
`

const Content = styled.div`
    flex-direction: column;
    width: 80%;
`

export default Privacy