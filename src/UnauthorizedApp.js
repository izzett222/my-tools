/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./routes/signup";
import Login from "./routes/login";

export default function UnauthorizedApp({ signup, login }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Signup handleSubmit={signup} />} />
                <Route path='/login' element={<Login handleSubmit={login} />} />
            </Routes>
        </BrowserRouter>
    )
}
