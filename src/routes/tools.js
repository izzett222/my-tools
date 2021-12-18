/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import Header from "../components/header";
import expand from '../assets/expand.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import ToolList from "./toolList";
import * as auth from '../auth';
import { useEffect, useState } from "react";
import client from "../utils/api-client";
import search from '../assets/search.svg';

const getTools = async (list) => {
    let tools = null;
    const token = auth.getToken();
    if (token) {
        const { data } = await client(`tools?list=${list}`, { token });
        tools = data;
    }
    return tools;

}
export default function Tools({ list, tools, run, logout }) {
    const location = useLocation();
    const navigate  = useNavigate()
    const [filter, setFilter] = useState('');

    useEffect(() => {
        run(getTools(list))
    }, [list, run])
    return <div css={{
        minHeight: '100vh',
        boxSizing: 'content-box',
        justifyContent: 'center',
    }}>
        <Header logout={logout} />
        <div id='list-section' css={{
            height: 192,
            width: '100%',
            maxWidth: 672,
            margin: '0 auto',
            borderBottom: '2px solid #F4F4F4'
        }}>
            <Link
                to='/lists'
                state={{ backgroundLocation: location }}
                css={{
                    border: 0,
                    background: 'none',
                    display: 'flex',
                    paddingTop: 40,
                    position: 'relative',
                    textDecoration: 'none'

                }}>
                <h1 css={{
                    fontStyle: 'normal',
                    fontWeight: 600,
                    color: '#353522',
                    fontSize: 24
                }}>{list}</h1>
                <img src={expand} height={37} width={24} alt="expand" css={{
                    display: 'block',
                    position: 'relative',
                    top: 6,
                    left: 2

                }} />

            </Link>
            <div
                css={{
                    height: 34,
                    width: '100%',
                    marginTop: 50,
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'relative'
                }}>
                <div css={{
                    border: '1px solid #D3D3D3',
                    background: 'none',
                    display: 'flex',
                    width: 264,
                    position: 'relative'
                }}>
                    <img src={search} height={24} width={24} alt="search icon" css={{
                        display: 'block',
                        marginRight: 24,
                        position: 'relative',
                        top: 5,
                        left: 16
                    }} />
                    <input placeholder="Search for a tool"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        css={{
                            fontSize: 16,
                            outline: 'none',
                            border: 'none',
                            borderRadius: 2,
                            '&::placeholder': {
                                fontSize: 16,
                                fontFamily: 'Roboto',
                                fontStyle: 'italic',
                                color: 'B0B0B0'
                            }
                        }} />
                </div>

                <button 
                onClick={() => navigate('/tool/add', { state: { backgroundLocation: location }})}
                css={{
                    color: '#353522',
                    opacity: 0.9,
                    background: '#F3ED5D',
                    border: '1px solid #D3D3D3',
                    borderRadius: 2,
                    paddingRight: 16,
                    paddingLeft: 16,
                    cursor: 'pointer'

                }}>add a tool</button>
            </div>
        </div>
        <ToolList tools={tools} filter={filter} />


    </div>
}