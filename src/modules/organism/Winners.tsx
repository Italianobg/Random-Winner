import React, { useContext } from 'react'
import Option from '../atoms/Option'
import styled from 'styled-components'
import Winner from '../atoms/Winner'
import { Comment, DataContext } from '../../provider/Data'
import Rectangle from '../atoms/Rectangle'

type Props = {
}

function Winners({ }: Props) {

    const { data } = useContext(DataContext);
    const { winners } = data;

    return (
        <Wrapper>
            <Rectangle />
            <Option number='7' title='winners' text='here are the lucky entries' />
            {winners.length > 0 ?
                <WinnerList>
                    {
                        winners.map((winner: Comment, index) => {
                            return <Winner key={winner.id} number={index + 1} name={winner.username} text={data.settings.hide ? '' : winner.text} />
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
    position: relative;
`

const WinnerList = styled.div`
    flex-grow: 1; 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
`

export default Winners