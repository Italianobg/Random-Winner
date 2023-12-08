import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet-async';
import titles from '../../titles';
import Button from '../atoms/Button';
import Option from '../atoms/Option';

type Props = {}

function Home({ }: Props) {
    return (
        <Wrapper>
            <Helmet>
                <title>{titles.home}</title>
            </Helmet>
            <HomeInfo>
                <HomeHeader>RandomeR - Giveaway Winner Picker</HomeHeader>
                <HomeContent>
                    <HomeText>This easy-to-use tool allows you to randomly select a winner from the comments on your Social Platform post, filter out duplicate entries, and exclude comments containing specific keywords.</HomeText>
                    <Button text="load more" link="/instagram" />
                </HomeContent>
            </HomeInfo>
            <Latest>
                <Option number='1' title='instagram' text='You can select a winner for your Instagram giveaway in the following steps' link="/instagram" />
                <Quote>
                    Any one who considers arithmetical methods of producing random winners is, of course, in a state of sin.
                </Quote>
            </Latest>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HomeInfo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HomeHeader = styled.div`
    font-size: 55px;
    color: #191919;
    font-weight: 900;
    font-family: "Work Sans";
    margin: 0px;
    text-align: center; 
`

const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 60px;
`
const HomeText = styled.div`
    font-size: 18px;
    color: #7a7a7a;
    font-weight: 400;
    font-family: "Work Sans";
    text-align: center;
    margin-bottom: 30px;
`

const Latest = styled.div`
    width: 80%;
    display: flex;
    justify-content: space - around;
    z-index: 2;
`

const Quote = styled.div`
    width: 40%;
    font-size: 30px;
    letter-spacing: -3px;
    color: #191919;
    font-weight: 400;
    font-family: "La Belle Aurore";
    line-height: 30px;
`

export default Home