import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Helmet } from 'react-helmet';
import titles from '../../../titles';

type Props = {}

function Home({ }: Props) {
    return (
        <Wrapper>
            <Helmet>
                <title>{titles.home}</title>
            </Helmet>
            <Latest>
                <Tag>Latest Tools</Tag>
                <Content>
                    <Name>
                        <Link to="/instagram">INSTAGRAM COMMENT PICKER</Link>
                    </Name>
                    <Description>
                        This easy-to-use tool allows you to randomly select a winner from the comments on your Instagram post, filter out duplicate entries, and exclude comments containing specific keywords.
                    </Description>

                    <h4>HOW TO PICK A WINNER FOR AN INSTAGRAM GIVEAWAY?</h4>
                    <p>You can select a winner for your Instagram giveaway in the following steps:

                        <ol>
                            <li>Login with Facebook.</li>
                            <li>Select Facebook & Instagram account and allow permissions.</li>
                            <li>Select Instagram account & giveaway posts.</li>
                            <li>Select Instagram giveaway settings & filters.</li>
                            <li>Select raffle settings.</li>
                            <li>Press "Pick Winner".</li>
                            <li>Share results on social media.</li>
                        </ol>
                    </p>
                </Content>
            </Latest>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
`
const Latest = styled.div`
    border: 1px solid rgb(189, 210, 255);
    width: 50%;
    border-radius: 8px;
`
const Tag = styled.div`
    background-color:rgb(189, 210, 255);
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    font-size: 14px;
    font-weight: bold;
    padding: 3px 3px 3px 13px;
`

const Content = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
`

const Name = styled.h4`
    align-self: center;
    margin: 15px 0px 15px 0px;
`

const Description = styled.div`
    text-indent: 5px;
`

export default Home