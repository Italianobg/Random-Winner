import React, { useEffect, useState } from 'react'
import { removeDuplicates } from '../utils/filters'
import styled from 'styled-components'
import { Header, Instruction } from '../../common.styled'

type Props = {
    results: Object[],
    settings: { mentions: number, replies: boolean, duplicate: boolean, exclude: string, add: string },
    setSettings: Function,
    setQualifiedResults: Function,
    setUniqueQualifiedResults: Function,
}

function Settings({ results, settings, setSettings, setQualifiedResults, setUniqueQualifiedResults }: Props) {

    const mentions = [0, 1, 2, 3, 4, 5];

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
        addArray = addArray.filter((participant) => { if (participant.length === 0 || participant === '@') return false; else return true; }).map((participant) => { if (participant.startsWith('@')) { return participant.slice(1) } else return participant })

        if (addArray.length > 0) {
            addArray.forEach(participant => {
                temp.push({ username: participant, type: 'a' });
            })
        }

        console.log(temp);


        let excludeArray: string[] = []
        excludeArray = settings.exclude.split('\n');
        excludeArray = excludeArray.filter((participant) => { if (participant.length === 0 || participant === '@') return false; else return true; }).map((participant) => { if (participant.startsWith('@')) { return participant.slice(1) } else return participant })
        console.log(excludeArray);

        if (excludeArray.length > 0) {
            temp = temp.filter((participant: any) => { if (excludeArray.includes(participant.username)) { return false } else return true; })
        }


        setQualifiedResults(temp)
        setUniqueQualifiedResults(removeDuplicates(temp));

    }, [results, settings])

    useEffect(() => {
        let temp: Object[] = [];



        temp.forEach((result: any) => {
            if (result.type === 'a') {
                temp.splice(temp.indexOf(result), 1);
            }
        });
        console.log("Settings", temp);
        // if (settings.exclude) {
        //     let excludeArray = settings.exclude.split('\n').map((element: any) => {
        //         if (element.startsWith('@')) { return element.slice(1) }
        //         else return element;
        //     });
        //     temp.forEach((participant: any) => {
        //         if (excludeArray.includes(participant.username)) {
        //             temp.splice(temp.indexOf(participant), 1);
        //         }
        //     });
        // }

        let addArray = settings.add.split('\n');

        if (addArray.length > 0) {
            addArray.forEach(participant => {
                if (participant.startsWith('@')) {
                    if (participant.slice(1).length > 0) {
                        temp.push({ username: participant.slice(1), type: 'a' })
                    }
                }
                else {
                    if (participant.length > 0) {
                        temp.push({ username: participant, type: 'a' })
                    }
                }
            })
        }


    }, [settings.exclude])

    // useEffect(() => {
    //     setQualifiedResults(finalResults)
    //     setUniqueQualifiedResults(removeDuplicates(finalResults));
    // }, [finalResults])

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
            <Header>INSTAGRAM GIVEAWAY SETTINGS & FILTERS</Header>
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