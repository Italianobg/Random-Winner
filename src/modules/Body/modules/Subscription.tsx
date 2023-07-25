import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import titles from '../../../titles'

type Props = {}

function Subscription({ }: Props) {
    return (
        <Wrapper>
            <Helmet>
                <title>{titles.subscription}</title>
            </Helmet>
            Payment Plans:
            <Plans>
                <Box>
                    <Header>Daily</Header>
                    <Value>1$ <Save></Save></Value>
                    <Order></Order>
                </Box>
                <Box>
                    <Header>Monthly</Header>
                    <Value>7$ <Save></Save></Value>
                    <Order></Order>
                </Box>
                <Box>
                    <Header>Yearly</Header>
                    <Value>20$</Value>
                    <Order></Order>
                </Box>
            </Plans>

            <Disclamer>
                Hi Fans,
                Thanks for your support of Comment Picker, the best platform with free social media tools and easy-to-use online tools. Our goal is to help you grow your online business with our tools and to make your life easier.

                Why Premium?
                The memberships are created for users who want access to our 100% Ad-free  website and access all our Premium features.

                Premium benefits:
                No Ads.

                Premium limits.

                Premium filters, e.g. tagged friends, hashtags, likes.

                Add extra entries.

                Multiple winners.

                Ad-free result page.

                No Affiliate links & sticky banners.

                Remove commentpicker.com trademark.

                Multi-post giveaway for 1 page.

                Wheel of names animation.

                Export comments of multiple posts.

                Logo on wheel.

                No AdBlock Detection.

                100% Ad-free on multiple devices.

                * Find all information about Premium features on the Comment Picker Premium page.

                How to access Comment Picker Premium?
                Join Premium membership.

                Sign-up or login with Patreon and complete payment.

                Login with Patreon on Comment Picker Premium.

                Premium memberships can be used on multiple devices.

                Your Premium membership subscription will be automatically renewed on the same date next month as when you joined without a notification. You can cancel your Premium subscription at any time.

                Any questions? Please send us a message on Patreon, Facebook or Instagram.

                Thanks for your support,

                Koen

                Comment Picker

                Disclaimer
                Premium membership only entitles you to an Ad-free website with Premium features on the Comment Picker website (https://commentpicker.com). We always try to ensure that the website is working perfectly, but it could still happen that parts of the website are not working correctly or any external APIs are not returning correct responses. Having a Premium membership doesn't change this. You can't get a refund based on the fact that parts of our website might not be working correctly. Memberships perks might change in the future without notice, but will always give access to an Ad-free website. You are able to cancel your membership at any time.
            </Disclamer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
`

const Plans = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 15px 0px;
`

const Box = styled.div`
    width: 28%;
    padding: 15px 5px;
    border: 1px solid rgba(160,160,160);
    border-radius: 5px;
    display: flex;
    flex-direction: column; 
    align-items: center;
`

const Header = styled.div`
    
`

const Value = styled.div`
    
`

const Save = styled.div`
    
`

const Order = styled.div`
    
`

const Disclamer = styled.div`
    
`

export default Subscription