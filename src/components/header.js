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
                margin: 'auto'
            }}>
            <h1 css={{
                fontFamily: "'Rakkas', cursive",
                color: '#DC7C7C',
                fontSize: 24,
                fontWeight: 'normal',
                marginLeft: !logout ? 0 : 'auto'

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
                cursor:'pointer'


            }} onClick={logout}>log out</button>}
        </div>

    </div>)
}

// /* Group 13 */

// position: absolute;
// width: 96px;
// height: 32px;
// left: 815px;
// top: 14px;



// /* Rectangle 6 */

// position: absolute;
// width: 96px;
// height: 32px;
// left: 815px;
// top: 14px;

// background: #FFFFFF;
// border: 1px solid #D3D3D3;
// box-sizing: border-box;
// border-radius: 2px;


// /* Log out */

// position: absolute;
// width: 48px;
// height: 16px;
// left: 839px;
// top: 22px;

// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 14px;
// line-height: 16px;

// color: #65655B;


