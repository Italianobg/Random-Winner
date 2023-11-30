import React, { useEffect, useRef, useState } from 'react'
import { Instruction } from '../Body/modules/common.styled'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { generateRandom } from '../pages/Instagram/utils';
import Option from '../atoms/Option';
import Button from '../atoms/Button';

type Props = {
    selectedMediaID: string,
    qualifiedResults: Object[],
    setQualifiedResults: Function,
    winners: Object[],
    setWinners: Function,
}

function Raffle({ selectedMediaID, qualifiedResults, setQualifiedResults, winners, setWinners }: Props) {

    const [hide, setHide] = useState<boolean>(false);
    const [remove, setRemove] = useState<boolean>(false);
    const [participant, setParticipant] = useState<any>({ username: '', text: '' });
    let randomCycles: number = 0;
    let start = useRef<ReturnType<typeof setInterval> | null>(null);

    function toggleHide(e: any) {
        if (e.target.checked) {
            setHide(true);
        }
        else {
            setHide(false);
        }
    }

    function toggleRemove(e: any) {
        if (e.target.checked) {
            setRemove(true);
        }
        else {
            setRemove(false);
        }
    }

    function getParticipant() {
        console.log(qualifiedResults);
        let index = generateRandom(qualifiedResults.length);
        setParticipant(qualifiedResults[index]);
        randomCycles++;
        if (randomCycles === 20) {
            randomCycles = 0;
            clearInterval(start.current as NodeJS.Timeout);
            let winnersArr = winners;
            winnersArr.push(qualifiedResults[index]);
            console.log(winnersArr);
            setWinners(winnersArr);
        }
    }

    const startRaffle = () => {
        const id = setInterval(getParticipant, 150);
        start.current = id;
    }

    return (
        <Wrapper>
            <Option number='6' title='raffle' text='Lets pick some winners' />
            {selectedMediaID.length > 0 ? <span>
                {
                    qualifiedResults.length > 0 ?
                        <Content>
                            <Instruction>Hide comment from results
                                <input id="hide" type="checkbox" onChange={(e) => { toggleHide(e) }} />
                            </Instruction>
                            <Instruction >Remove winner after it is chosen
                                <input id="remove" type="checkbox" onChange={(e) => { toggleRemove(e) }} />
                            </Instruction>
                            <ButtonWrapper onClick={startRaffle}>
                                <Button text='pick winner'></Button>
                            </ButtonWrapper>
                            <WinnerBox>
                                <Name><Link to={`https://instagram.com/${participant.username}`}>@{participant.username}</Link></Name>
                                {!hide ? <Bio>{participant.text! ? participant.text.length < 80 ? participant.text : participant.text.slice(0, 80) + '...' : ''}</Bio> : ''}
                            </WinnerBox>
                        </Content>
                        :
                        <p>Either all participants were withdrawn or there are none!</p>
                }
            </span>
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
    margin-top: 30px;
`

const UserBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #fad5dbcf;
    background-color: #ffd3db44;
    border-radius: 5px;
    width: 30%;
    margin: 1%;
    box-sizing: border-box;
    padding: 9px 4px 4px 4px;
    align-items: center;

    &.selected{
        border: 1px solid #fab1becf;
        background-color: #ffd3dbca;
    }
`

const WinnerBox = styled(UserBox)`

`

const Name = styled.div`
    margin: 2%;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`

const Bio = styled.div`
    font-size: 15px;
    margin-top: 1%;
    text-align: justify;
    padding: 6%;
    height: 100px; 
`


export default Raffle