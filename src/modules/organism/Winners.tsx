import React, { useEffect } from 'react'
import Option from '../atoms/Option'
import styled from 'styled-components'
import Winner from '../atoms/Winner'

type Props = {
    winners: Object[],
}

function Winners({ winners }: Props) {

    useEffect(() => {
        console.log(winners);
    }, [winners])

    return (
        <Wrapper>
            <Option number='7' title='winners' text='here are the lucky entries' />
            {winners.length > 0 ?
                <WinnerList>
                    {
                        winners.map((winner: any, index: any) => {
                            return <Winner name={winner.username} text={winner.text} key={index} />
                        })
                    }
                </WinnerList> : ""
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: top;
    margin-bottom: 40px;
    align-items: top;
    font-family: "Work Sans";
    color: black;
    font-size: 16px;
`

const WinnerList = styled.div`
    flex-grow: 1; 
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`



export default Winners