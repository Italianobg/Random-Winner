import React, { useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import { generateRandom } from '../../utils/common';
import Option from '../atoms/Option';
import Button from '../atoms/Button';
import { Comment, DataContext } from '../../provider/Data';
import Winner from '../atoms/Winner';

type Props = {
}

function Raffle({ }: Props) {
    const { data, setDataData } = useContext(DataContext);
    const [running, setRunning] = useState<boolean>(false);
    const [participant, setParticipant] = useState<Comment | null>();

    let { qualifiedComments, selectedMediaId, winners } = data;

    let randomCycles: number = 0;
    let prevIndex: number = -1;
    let start = useRef<ReturnType<typeof setInterval> | null>(null);


    function getParticipant() {
        let index = generateRandom(qualifiedComments.length);
        // Generate unique number different from previous 
        while (index === prevIndex) {
            index = generateRandom(qualifiedComments.length);
        }
        prevIndex = index;
        setParticipant(qualifiedComments[index]);
        randomCycles++;
        if (randomCycles === 30) {
            randomCycles = 0;
            clearInterval(start.current as NodeJS.Timeout);
            setRunning(false);
            setDataData({ ...data, winners: [...winners, qualifiedComments[index]] });
            setParticipant(null);
        }
    }

    const startRaffle = () => {
        if (!running) {
            setRunning(true);
            const id = setInterval(getParticipant, 150);
            start.current = id;
        }
    }

    return (
        <Wrapper>
            <Option number='6' title='raffle' text='let&#39;s pick some winners' />
            {selectedMediaId.length > 0 ? <>
                {
                    qualifiedComments.length > 0 ?
                        <Content>
                            <ButtonWrapper onClick={() => { startRaffle(); }}>
                                <Button text='pick winner' />
                            </ButtonWrapper>
                            <ShuffleWrapper>
                                {participant ? <Winner key={participant.id} name={participant.username} text='' /> : ''}
                            </ShuffleWrapper>
                        </Content>
                        :
                        <p>Either all participants were withdrawn or there are none!</p>
                }
            </>
                :
                ''
            }
        </Wrapper >
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

const Content = styled.div` 
    flex-grow: 1;
`

const ButtonWrapper = styled.div`
    margin-bottom: 25px;
`

const ShuffleWrapper = styled.div`
    margin-bottom: 25px;
    width: 230px;
    height: 280px;
`

export default Raffle