import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header, Instruction } from '../../common.styled'

type Props = {
    settings: { mentions: number, replies: boolean, duplicate: boolean, exclude: string, add: string },
    setSettings: Function
}

function Settings({ settings, setSettings }: Props) {

    function changeMentions(e: any) {
        setSettings({ ...settings, mentions: +e.target.value });
        console.log(settings);

    }

    function toggleReplies(e: any) {
        if (e.target.checked) {
            setSettings({ ...settings, replies: true });
        }
        else {
            setSettings({ ...settings, replies: false });
        }
    }

    function toggleDuplicates(e: any) {
        if (e.target.checked) {
            setSettings({ ...settings, duplicate: true });
        }
        else {
            setSettings({ ...settings, duplicate: false });
        }
    }

    function exclude(e: any) {
        setSettings({ ...settings, exclude: e.target.value })
    }

    function add(e: any) {
        setSettings({ ...settings, add: e.target.value });
    }


    return (
        <Wrapper>
            <Header>INSTAGRAM GIVEAWAY SETTINGS & FILTERS</Header>
            <Instruction >Minimum amount of @mentions in 1 comment:&nbsp;
                <input id="number" type="number" value={settings.mentions} onChange={(e) => { changeMentions(e) }} />
            </Instruction>

            <Instruction>Exclude comment replies
                <input id="replies" type="checkbox" onChange={(e) => { toggleReplies(e) }} />

            </Instruction>
            <Instruction >Filter duplicate users
                <input id="duplicates" type="checkbox" onChange={(e) => { toggleDuplicates(e) }} />

            </Instruction>
            <Instruction >Exclude users<br />
                <textarea id="exclude" name="exclude" value={settings.exclude} rows={5} cols={50} onChange={(e) => { exclude(e) }} />

            </Instruction>
            <Instruction >Add extra entries<br />
                <textarea id="add" name="add" rows={5} cols={50} value={settings.add} onChange={(e) => { add(e) }} />
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