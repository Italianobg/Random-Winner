import React, { useRef, useState } from 'react'
import { Header, Instruction } from '../../common.styled'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { generateRandom } from '../utils';

type Props = { qualifiedResults: Object[], setQualifiedResults: Function }

function Raffle({ qualifiedResults, setQualifiedResults }: Props) {

    const [hide, setHide] = useState<boolean>(false);
    const [remove, setRemove] = useState<boolean>(false);
    const [winners, setWinners] = useState<Object[]>([]);
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
        let index = generateRandom(qualifiedResults.length);
        setParticipant(qualifiedResults[index]);
        randomCycles++;
        if (randomCycles === 40) {
            randomCycles = 0;
            clearInterval(start.current as NodeJS.Timeout);
            let winnersArr = winners;
            winnersArr.push(qualifiedResults[index]);
            setWinners(winnersArr);
            let tempArr = qualifiedResults;
            tempArr.splice(qualifiedResults.indexOf(qualifiedResults[index]), 1);
            setQualifiedResults(tempArr);
        }
    }

    const startRaffle = () => {
        const id = setInterval(getParticipant, 150);
        start.current = id;
    }


    return (
        <Wrapper>
            <Header>RAFFLE SETTINGS</Header>
            <Instruction>Hide comment from results
                <input id="hide" type="checkbox" onChange={(e) => { toggleHide(e) }} />

            </Instruction>
            <Instruction >Remove winner after it is chosen
                <input id="remove" type="checkbox" onChange={(e) => { toggleRemove(e) }} />
            </Instruction>

            <Button onClick={startRaffle}>Pick Winner</Button>

            <WinnerBox>
                <Name><Link to={`https://instagram.com/${participant.username}`}>@{participant.username}</Link></Name>
                {!hide ? <Bio>{participant.text.length < 80 ? participant.text : participant.text.slice(0, 80) + '...'}</Bio> : ''}
            </WinnerBox>

            {winners.length > 0 ? <Instruction >Winners
                <Winners>
                    {winners.map((winner: any, index: any) => {
                        return <UserBox key={index}>#{index + 1}<Name><Link to={`https://instagram.com/${winner.username}`}>@{winner.username}</Link></Name>
                            {!hide ? <Bio>{winner.text.length < 80 ? winner.text : winner.text.slice(0, 80) + '...'}</Bio> : ''}</UserBox>
                    })}
                </Winners>
            </Instruction> : ''}

        </Wrapper >
    )
}

const Wrapper = styled.div`
    border: 1px solid #fad5dbcf;
    border-radius: 10px;
    padding: 2% 3%;
    margin-top: 1%;
`

const Button = styled.button`
    border: 1px solid #fad5dbcf;
    border-radius: 4px;
    background-color: #ffd3db44;
    font-size: 20px;
    padding: 8px;
    margin: 5px;
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
   height: 150px; 
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
`

const Winners = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default Raffle