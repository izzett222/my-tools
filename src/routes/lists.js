/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import search from '../assets/search.svg';
import * as auth from '../auth';
import { P } from "../components/lib";
import client from "../utils/api-client";
import { useAsync } from "../utils/hooks/useAsync";


const addLists = async (setLists, lists, list, dismiss) => {
    let returnedList = null;
    const token = auth.getToken();
    if (token) {
        const { data } = await client('lists/new', { token, data: list });
        returnedList = data;
        const newLists = [...lists];
        newLists.push(returnedList);
        setLists(newLists);
        dismiss();
    }
    return returnedList;

}

const ListItem = ({ children, ...props }) => {
    return <li css={{
        cursor: 'pointer',
        listStyle: 'none',
        height: 36,
        '&:hover': {
            background: '#E3E3E3',

        }
    }} {...props}><P css={{
        paddingLeft: 16,
        paddingTop: 2
    }}>{children}</P></li>
}
export default function Lists({ lists, setLists, setList }) {
    const [filter, setFilter] = useState('');
    const { run } = useAsync()
    const navigate = useNavigate();
    function onDismiss() {
        navigate(-1);
    }

    function onChange(event) {
        const { value } = event.target
        if (value.trim()) {
            setFilter(value);
        } else {
            setFilter('')
        }

    }
    function createNewList() {
        run(addLists(setLists, lists, { name: filter }, onDismiss))
    }

    const filteredLists = lists.filter((list) => list.name.startsWith(filter.trim()))
    return <DialogOverlay css={{
        background: 'rgba(15, 15, 15, 0.55)'
    }} onDismiss={onDismiss} aria-labelledby="label">
        <DialogContent aria-label="label" css={{
            background: '#FFFFFF',
            boxShadow: '0px 5px 100px rgba(15, 15, 15, 0.2)',
            borderRadius: 4,
            maxWidth: 562,
            padding: 0,
            height: 242
        }}>
            <div css={{
                height: 52,
                borderBottom: '2px solid #EFEFEF',
                width: '100%',
                position: 'relative',
                display: 'flex'
            }}><img src={search} height={24} width={24} alt="search icon" css={{
                display: 'block',
                marginRight: 24,
                position: 'relative',
                top: 14,
                left: 16
            }} /><input type='text' placeholder="Search or create a list"
                css={{
                    border: 'none',
                    fontSize: 16,
                    width: '100%',
                    color: 'rgba(53, 53, 34, 0.9)',
                    fontStyle: 'normal',
                    lineHeight: 'normal',
                    height: 50,
                    display: 'block',
                    outline: 'none',
                    borderRadius: 4,
                    '&::placeholder': {
                        paddingTop: 17,
                        fontStyle: 'italic',
                        color: 'rgba(53, 53, 34, 0.5)',
                    }
                }}
                value={filter || ''}
                onChange={onChange}
                />
            </div>
            <ul css={{
                marginTop: 14,
                padding: 0,
                overflowY: 'scroll',
                height: 174,
                borderRadius: 4
            }}>
                {filteredLists.length !== 0 ? (<ListItem onClick={() => {
                    setList('All my tools');
                    onDismiss();
                }}>All my tools</ListItem>) : null}
            
                {filteredLists.map((list) => <ListItem key={list.id} onClick={() => {
                    setList(list.name);
                    onDismiss();
                }}>{list.name}</ListItem>)}
                {filteredLists.length === 0 && filter.trim().length !== 0 ? <ListItem onClick={() => {
                    setList(filter);
                    createNewList()
                }}><span css={{
                    fontWeight: 600,
                }}>create list: </span>{filter}</ListItem> : null}
            </ul>
        </DialogContent>
    </DialogOverlay>

}
