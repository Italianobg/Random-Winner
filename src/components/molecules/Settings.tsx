import React, { useContext } from 'react'
import styled from 'styled-components'
import { Instruction } from '../../assets/css/common.styled'
import Option from '../atoms/Option'
import { DataContext } from '../../provider/Data'


// TODO - Users should have liked the post
// TODO - Filter comments by mentions / tagged friends
// TODO - Filter comments by words / hash tags

type Props = {
}

function Settings({ }: Props) {
    const { data, setDataData } = useContext(DataContext);

    const { selectedMediaId, settings } = data;

    const mentions = [0, 1, 2, 3, 4, 5];

    function changeMentions(e: any) {
        setDataData({ ...data, settings: { ...settings, mentions: +e.target.value } });
    }

    function toggleReplies(e: any) {
        setDataData({ ...data, settings: { ...settings, replies: e.target.checked } });
    }

    function toggleDuplicates(e: any) {
        setDataData({ ...data, settings: { ...settings, duplicate: e.target.checked } });
    }

    function exclude(e: any) {
        setDataData({ ...data, settings: { ...settings, exclude: e.target.value } });
    }

    function add(e: any) {
        setDataData({ ...data, settings: { ...settings, add: e.target.value } });
    }

    function toggleHide(e: any) {
        setDataData({ ...data, settings: { ...settings, hide: e.target.checked } });
    }

    function toggleRemove(e: any) {
        setDataData({ ...data, settings: { ...settings, remove: e.target.checked } });
    }

    return (
        <Wrapper>
            <Option number='5' title='settings and filters' text='specify and adjust entries ' />
            {selectedMediaId.length > 0 ?
                <Content>
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
                    <br />
                    <Instruction >Exclude users</Instruction>
                    <textarea id="exclude" name="exclude" value={settings.exclude} rows={5} cols={50} onChange={(e) => { exclude(e) }} />

                    <Instruction >Add extra entries</Instruction>
                    <textarea id="add" name="add" rows={5} cols={50} value={settings.add} onChange={(e) => { add(e) }} />

                    <Instruction>Hide comment from results
                        <input id="hide" type="checkbox" onChange={(e) => { toggleHide(e) }} />
                    </Instruction>
                    <Instruction >Remove winner after it is chosen
                        <input id="remove" type="checkbox" onChange={(e) => { toggleRemove(e) }} />
                    </Instruction>
                </Content> :
                ''}
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

    select{
        width: 20%;
        font-size: 18px;
        padding: 0.7%;
        border-radius: 2px;
        box-sizing: border-box;
        position: relative;
        z-index: 2;
    }

    textarea{
        width: 60%;
        font-size: 18px;
        padding: 4px;
        border-radius: 1px;
        position: relative;
        z-index: 2;
        margin-left: 10px;
    }

`

const Content = styled.div`
    flex-grow: 1;
`



export default Settings