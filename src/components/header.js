/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";

export default function Header({ logout }) {
    return (<div css={{
        display: 'flex',
        height: '50px',
        width: '100%',
        borderBottom: '2px solid #F4F4F4'
    }}>
        <div
            css={{
                width: 672,
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
                "@media (max-width: 704px)": {
                    marginRight: 16,
                    marginLeft: 16,
                }
            }}>
            <h1 css={{
                fontFamily: "'Rakkas', cursive",
                color: '#DC7C7C',
                fontSize: 24,
                fontWeight: 'normal',
                "@media (max-width: 704px)": {
                    marginLeft: 0
                },
                marginLeft: !logout ? 0 : 'auto',

            }}>My Tools</h1>
            {logout && <button css={{
                marginLeft: 'auto',
                display: 'block',
                border: '1px solid #D3D3D3',
                boxSizing: 'border-box',
                background: ' #FFFFFF',
                fontSize: 16,
                color: '#65655B',
                padding: '4px 16px',
                borderRadius: 2,
                cursor: 'pointer'


            }} onClick={logout}>log out</button>}
        </div>

    </div>)
}

