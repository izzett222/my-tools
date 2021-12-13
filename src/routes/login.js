/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import Header from "../components/header";
import { AuthInput, Button, Label } from "../components/lib";
import { useAsync } from "../utils/hooks/useAsync";

export default function Login({ handleSubmit }) {
    const { isLoading, run } = useAsync()
    const submit = (event) => {
        event.preventDefault();
        const { username, password } = event.target.elements
        run(handleSubmit(username.value, password.value));
    }
    return <div css={{
        display: 'flex',

        width: '100%',
        margin: 0,
        padding: 0,
        flexDirection: "column"
    }}>
        <Header />
        <main css={{
            display: 'flex',
            width: '100%',
            flexGrow: 1,
            justifyContent: "center"
        }}>
            <form onSubmit={submit} css={{
                border: '1px solid #D3D3D3',
                height: 341,
                width: 487,
                marginTop: 100,
                paddingLeft: 40

            }}>
                <h1 css={{
                    fontSize: 30,
                    color: '#48483E',
                    fontFamily: 'Cairo',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    margin: 0,
                    marginTop: 24,
                    marginBottom: 16,
                }}>Welcome back</h1>
                <Label htmlFor="username">Username</Label>
                <AuthInput type='text' id='username' required placeholder="Enter your username" />
                <Label htmlFor="password">Password</Label>
                <AuthInput type='password' id='password' required placeholder="Enter your password" />
                <Button css={{
                    marginTop: 16
                }} disabled={isLoading}>{isLoading ? 'loading' : 'Login'}</Button>


            </form>
        </main>
    </div>
}