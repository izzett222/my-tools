/** @jsxRuntime classic /
/* @jsx jsx */
// import { jsx, keyframes } from '@emotion/react';
import styled from '@emotion/styled/macro';

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
