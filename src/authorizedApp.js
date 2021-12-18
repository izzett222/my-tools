/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import Tools from "./routes/tools";
import client from "./utils/api-client";
import { useAsync } from "./utils/hooks/useAsync";
import * as auth from './auth';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { FullPageSpinner } from "./components/lib";
import Lists from "./routes/lists";
import useLocalStorageState from "./utils/hooks/useLocalStorageState";
import AddTool from "./routes/addTool";
import Tool from "./routes/tool";
const Test = () => <div>this is the list</div>
const getList = async () => {
    let lists = null;
    const token = auth.getToken();
    if (token) {
        const result = await client('lists', { token });
        lists = result.data;
    }
    return lists
}
const defaultList = () => {
    return window.localStorage.getItem('default-list') || 'All my tools';
}
export default function AuthorizedApp({ logout }) {

    const { data: lists, isLoading, run, isIdle, setData: setLists } = useAsync();
    const location = useLocation()
    const { data: tools, setData: setTools, run: runTools } = useAsync();
    const [list, setList] = useLocalStorageState(defaultList, 'default-list');
    useEffect(() => {
        run(getList());
    }, [run])
    const state = location.state;
    if (isLoading || isIdle) return <FullPageSpinner />
    return (
        <>
        <Routes  location={state?.backgroundLocation || location}>
            <Route path='/' element={<Tools  list={list} lists={lists} tools={tools} setTools={setTools} run={runTools} logout={logout} />} />
            <Route path="/login" element={<Navigate replace to="/" />} />
            <Route path='/lists' element={<Test />} />
        </Routes>
        {state?.backgroundLocation && (
            <Routes>
                <Route path='/lists' element={<Lists lists={lists} setLists={setLists} setList={setList} />} />
                <Route path='/tool/add' element={<AddTool tools={tools} setTools={setTools} runTools={runTools} list={list} />} />
                <Route path='/tool/:id' element={<Tool tools={tools} list={list} />} />
            </Routes>
        )}
        </>
        
        )
}