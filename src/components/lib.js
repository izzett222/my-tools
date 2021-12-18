/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';
import { FaSpinner } from 'react-icons/fa'


export function Tag({ name, ...props }) {
    return <div css={{
        background: '#FBFBFB',
        border: '1px solid #F3F2F2',
        borderRadius: 2,
        marginRight: 4,
        color: '#353522',
        opacity: 0.9,
        padding: '2px 24px'
    }} {...props}><span>{name}</span></div>
} 

export const ToolHeader = styled.p({
    color: '#353522',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'normal',
})
export const Label = styled.label({
    color: '#48483E',
    fontFamily: 'Cairo',
    fontWeight: 'normal',
    fontSize: 18,
    display: 'inline-block'
})
export const AuthInput = styled.input({
    outline: 'none',
    background: 'none',
    display: 'block',
    boxShadow: 'inset 0px 1px 1px rgba(111, 112, 94, 0.13)',
    borderRadius: 3,
    backgroundColor: 'white',
    border: '1px solid #DEDEDE',
    width: 345,
    height: 40,
    fontFamily: 'Cairo',
    marginTop: 4,
    caretColor: '#B0B0B0',
    fontSize: 18,
    '&::placeholder': {
        color: '#B0B0B0',
        fontFamily: 'Cairo',
        fontSize: 18,
        paddingLeft: 16,
        lineHeight: 21
    }
})
export const Button = styled.button({
    border: 'none',
    background: '#F3ED5D',
    padding: '4px 24px',
    fontFamily: 'Cairo',
    fontSize: 18,
    color: '#48483E',
    borderRadius: 3
})

const spin = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
})
export const Spinner = styled(FaSpinner)({
    animation: `${spin} 1s linear infinite`,
})

export function FullPageSpinner() {
    return (
        <div
            css={{
                fontSize: '4em',
                height: 'calc(100vh - 16px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Spinner />
        </div>
    )
}

export const P = styled.p({
    fontSize: 16,
    color: '#353522'
})