import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(1, 6, 6, 1) 0%,
        rgba(34, 137, 161, 1) 100%
    );
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    };
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    };
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`

export const Form = styled.div`
    background: #010101;
    max-width: 600px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 16px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
`

export const SocialIconLink = styled.a`
    color: #fff;
    text-align: center;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
    margin: 10px 10px 0 10px;
    padding: 10px 0 15px 0;
    width: auto;
    border-bottom: 1px solid grey;

    &:hover {
        color: #2289A1;
    }
`

export const FormButton = styled(Link)`
    border-radius: 20px;
    margin-top: 32px;
    background: #2289A1;
    white-space: nowrap;
    padding: 16px 0;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-ease-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-ease-out;
        background: #fff;
        color: #010606;
    }
`