import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header, Instruction } from '../../common.styled'

type Props = {
    results: Object[],
    uniqueResults: Object[],
    qualifiedResults: Object[],
    setQualifiedResults: Function
}

function Settings({ results, uniqueResults, qualifiedResults, setQualifiedResults }: Props) {
    const [replies, setReplies] = useState<boolean>(false);
    const [duplicates, setDuplicates] = useState<boolean>(false);

    useEffect(() => {

    }, [qualifiedResults])


    function toggleReplies(e: any) {
        if (e.target.checked) {
            setQualifiedResults(uniqueResults)
            setReplies(true);
        }
        else {
            setQualifiedResults(results)
            setReplies(false);
        }
    }

    function toggleDuplicates(e: any) {
        if (e.target.checked) {
            setQualifiedResults(uniqueResults)
            setDuplicates(true);
        }
        else {
            setQualifiedResults(results)
            setDuplicates(false);
        }
    }


    return (
        <Wrapper>
            <Header>INSTAGRAM GIVEAWAY SETTINGS & FILTERS</Header>
            <Instruction >Minimum amount of @mentions in 1 commentPremium
                <input id="number" type="number" />
            </Instruction>

            <Instruction>Exclude comment replies
                <input id="replies" type="checkbox" onChange={(e) => { toggleReplies(e) }} />

            </Instruction>
            <Instruction >Filter duplicate users
                <input id="duplicates" type="checkbox" onChange={(e) => { toggleDuplicates(e) }} />

            </Instruction>
            <Instruction >Exclude users
                <input type="text" id="name" name="name" size={10} />

            </Instruction>
            <Instruction >Add extra entries
                <input type="text" id="name" name="name" size={10} />
            </Instruction>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border: 1px solid #fad5dbcf;
    border-radius: 10px;
    padding: 2% 3%;
    margin-top: 1%;
`

export default Settings