import React, { useEffect, useState } from 'react'
import { removeDuplicates } from '../utils'
import styled from 'styled-components'
import { Header, Instruction, Minus, Plus } from '../../common.styled'

type Props = {
    results: Object[],
    settings: { mentions: number, replies: boolean, duplicate: boolean, exclude: string, add: string },
    setSettings: Function,
    setQualifiedResults: Function,
    setUniqueQualifiedResults: Function,
}

function Settings({ results, settings, setSettings, setQualifiedResults, setUniqueQualifiedResults }: Props) {

    const mentions = [0, 1, 2, 3, 4, 5];
    const [display, setDisplay] = useState('hide');

    function toggle() {
        if (display === 'hide')
            setDisplay('show');
        else
            setDisplay('hide')
    }

    useEffect(() => {
        if (results.length > 0) {
            setDisplay('show');
        }
    }, [results])



    useEffect(() => {
        let temp: Object[] = [];

        temp = results;
        if (settings.replies) {
            temp = temp.filter((res: any) => res.type !== 'r');
        }

        if (settings.mentions > 0) {
            temp = temp.filter((res: any) => {
                let textArr = res.text.split(' ');
                let counter = 0;
                textArr.forEach((word: string) => {
                    if (word.startsWith('@') && word.length > 1) {
                        counter++;
                    }
                });
                if (counter >= settings.mentions) {
                    return true;
                }
                else return false;
            });
        }

        if (settings.duplicate) {
            temp = removeDuplicates(temp);
        }

        let addArray: string[] = []

        temp = temp.filter((resulta: any) => { return resulta.type !== 'a' })
        addArray = settings.add.split('\n');
        addArray = addArray.filter((participant) => { if (participant.length === 0 || participant === '@' || participant.trim().length === 0) return false; else return true; }).map((participant) => { if (participant.startsWith('@')) { return participant.slice(1) } else return participant })

        if (addArray.length > 0) {
            addArray.forEach(participant => {
                temp.push({ username: participant, type: 'a', text: '' });
            })
        }

        let excludeArray: string[] = []
        excludeArray = settings.exclude.split('\n');
        excludeArray = excludeArray.filter((participant) => { if (participant.length === 0 || participant === '@') return false; else return true; }).map((participant) => { if (participant.startsWith('@')) { return participant.slice(1) } else return participant })

        if (excludeArray.length > 0) {
            temp = temp.filter((participant: any) => { if (excludeArray.includes(participant.username)) { return false } else return true; })
        }


        setQualifiedResults(temp)
        setUniqueQualifiedResults(removeDuplicates(temp));

    }, [results, settings])



    function changeMentions(e: any) {
        setSettings({ ...settings, mentions: +e.target.value });
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
            <Header onClick={() => { toggle() }}>
                <span>INSTAGRAM GIVEAWAY SETTINGS & FILTERS</span>
                <Minus className={display}>—</Minus>
                <Plus className={display}>+</Plus>
            </Header>
            <Content className={display}>
                <Instruction >Minimum amount of @mentions in 1 comment:&nbsp;
                    <select name="mentions" id="mentions" onChange={(e) => {
                        changeMentions(e)
                    }}> {mentions.map((number: any) => {
                        return <option key={number} value={number} >{number}</option >
                    })}</select>
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
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border: 1px solid #fad5dbcf;
    border-radius: 10px;
    padding: 2% 3%;
    margin-top: 1%;

    select{
        width: 20%;
        font-size: 18px;
        padding: 0.7%;
        border: 1px solid #fab1becf;
        border-radius: 4px;
    }
    textarea{
        width: 60%;
        font-size: 18px;
        padding: 0.7%;
        border: 1px solid #fab1becf;
        border-radius: 4px;
    }
    input{
        font-size: 18px;
        padding: 0.7%;
        border: 1px solid #fab1becf;
        border-radius: 4px;
    }
`

const Content = styled.div`
    &.show{
        display: block;
    }
    &.hide{
        display: none;
    }
`

export default Settings