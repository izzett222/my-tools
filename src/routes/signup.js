/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect } from "react";
import Header from "../components/header";
import { AuthInput, Label, Button } from "../components/lib";
import { useAsync } from "../utils/hooks/useAsync";

export default function Signup({handleSubmit}) {
    const {status, run, isLoading} = useAsync()
    const submit = (event) => {
        event.preventDefault();
        const { username, password} = event.target.elements
        run(handleSubmit(username.value, password.value))
    }
    console.log(isLoading, '=== is loading login')
    return (
        <div css={{
        }}>
            <Header />
            <main css={{
                display: "flex",
                justifyContent: 'center',
                marginTop: 74,
            }}>
            <div css={{
                fontFamily: 'Cairo',
                fontSize: 52,
                lineHeight: '125.69%',
                width: 398, 
                color: '#48483E',
                alignSelf: 'center'
                
            }}>
            Save and keep all your development tools in one place
            </div>
            <div css={{ 
                width: 2,
                background: 'rgba(53, 53, 34, 0.6)',
                height: 387,
                opacity: 0.7,
                marginLeft: 64,
                marginRight: 64
            }}></div>
            <form css={{
                alignSelf: "center"
            }} onSubmit={submit}>
                <h1 css={{
                    fontSize: 30,
                    color: '#48483E',
                    fontFamily: 'Cairo',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    margin: 0,
                    marginBottom: 16,
                }}>Join Now</h1>
                { status === 'rejected' ? <div style={{color: 'red'}}>server error</div> : null}
                <Label htmlFor='username'>Username</Label>
                <AuthInput id='username' required placeholder="Enter your usernmae" />
                <Label htmlFor='password' css={{ marginTop: 12 }}>password</Label>
                <AuthInput id='password' required placeholder="Enter your Password" />
                <Button disabled={status ==='pending'} css={{ marginTop: 16}}>{status === 'pending' ? 'loading' : 'Join'}</Button>
            </form>
            </main>
        </div>
    )
}
