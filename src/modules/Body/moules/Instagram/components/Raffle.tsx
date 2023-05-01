import React, { useRef, useState } from 'react'
import { Header, Instruction } from '../../common.styled'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

type Props = { qualifiedResults: Object[], setQualifiedResults: Function }

function Raffle({ qualifiedResults, setQualifiedResults }: Props) {

    const [hide, setHide] = useState<boolean>(false);
    const [remove, setRemove] = useState<boolean>(false);
    const [participant, setParticipant] = useState<any>();
    let index = 0;
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
        setParticipant(qualifiedResults[index]);
        if (index === qualifiedResults.length - 1) {
            index = 0;
        } else index++;
    }

    const startRaffle = () => {
        const id = setInterval(getParticipant, 250);
        start.current = id;
    }

    const pickWinner = () => {
        clearInterval(start.current as NodeJS.Timeout);
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

            <Button onClick={startRaffle}>Start</Button>

            {
                participant
                    ? <UserBox>
                        <Name><Link to={`https://instagram.com/${participant.username}`}>@{participant.username}</Link></Name>
                        {!hide ? <Bio>{participant.text.slice(0, 40)}</Bio> : ''}
                    </UserBox>
                    : ''
            }
            <Button onClick={pickWinner}>Pick Winner</Button>

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
    height: 360px;
    margin: 1%;
    box-sizing: border-box;
    padding: 9px 4px 4px 4px;
    align-items: center;

    &.selected{
        border: 1px solid #fab1becf;
        background-color: #ffd3dbca;
    }
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

export default Raffle