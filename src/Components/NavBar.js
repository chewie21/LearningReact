import React from 'react';
import styled from "styled-components";
import logoImg from "../image/logo.svg";
import loginImg from "../image/sign.svg";

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;  
    align-items: center; 
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Login = styled.div`
    display: flex;
    flex-flow: column wrap;
`;

const click = () => {
    console.log(1);
}

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
                <ImgLogo src={ logoImg } alt="logo"/>
                <H1>Ресторан</H1>
        </Logo>
        <Login onClick={click} type="button">
            <img src={ loginImg } alt="login"/>
            Войти
        </Login>
    </NavBarStyled>
)
