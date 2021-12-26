/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import { AuthInput, Label, Button } from "../components/lib";
import { useAsync } from "../utils/hooks/useAsync";

export default function Signup({handleSubmit}) {
    const {status, run} = useAsync()
    const submit = (event) => {
        event.preventDefault();
        const { username, password} = event.target.elements
        run(handleSubmit(username.value, password.value))
    }
    return (
        <div css={{
        }}>
            <Header />
            <main css={{
                display: "flex",
                justifyContent: 'center',
                marginTop: 74,
                ' @media (max-width: 920px)': {
                    marginRight: 16,
                    marginLeft: 16,
                },
            }}>
            <div css={{
                fontFamily: 'Cairo',
                fontSize: 52,
                lineHeight: '125.69%',
                width: 398, 
                color: '#48483E',
                alignSelf: 'center',
                ' @media (max-width: 820px)': {
                    display: 'none'
                },
                
            }}>
            Save and keep all your development tools in one place
            </div>
            <div css={{ 
                width: 2,
                background: 'rgba(53, 53, 34, 0.6)',
                height: 387,
                opacity: 0.7,
                marginLeft: 64,
                marginRight: 64,
                ' @media (max-width: 920px)': {
                    marginRight: 24,
                    marginLeft: 24,
                },
                ' @media (max-width: 820px)': {
                    display: 'none'
                },
            }}></div>
            <form css={{
                alignSelf: "center",
                input: {
                    ' @media (max-width: 450px)': {
                        flexGrow: 1,
                        width: 'auto'
                    },
                },
                ' @media (max-width: 820px)': {
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid #D3D3D3',
                    padding: 16
                },
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
                <AuthInput id='username' required placeholder="Enter your username" />
                <Label htmlFor='password' css={{ marginTop: 12 }}>password</Label>
                <AuthInput id='password' type='password' required placeholder="Enter your Password" />
                
                <div css={{
                    marginTop: 16,
                    display: 'flex'
                }}>
                   <Button disabled={status ==='pending'}>{status === 'pending' ? 'loading' : 'Join'}</Button>
                    <span css={{
                        color: 'rgba(72, 72, 62, 0.9)',
                        fontSize: 14,
                        display: 'inline-block',
                        marginLeft: 16,
                        alignSelf: 'center'
                    }}>Already joined, <Link to='/login' css={{ color: 'rgba(72, 72, 62, 0.9)'}} >click here to log in</Link></span>
                </div>
            </form>
            </main>
        </div>
    )
}
