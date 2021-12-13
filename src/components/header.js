/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";

export default function Header() {
    return (<div css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        borderBottom: '2px solid #F4F4F4'
    }}>
        <h1 css={{
            fontFamily: "'Rakkas', cursive",
            color: '#DC7C7C',
            fontSize: 24,
            fontWeight: 'normal',

        }}>My Tools</h1>
    </div>)
}
