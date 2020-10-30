import React from 'react';
import styled from "styled-components";

export const ModalButton = styled.button`
    display: block;
    margin: 0 auto;
    width: 250px;
    height: 65px;
    font-size: inherit;
    font-family: inherit;
    background: #299B01;
    border-color: transparent;
    cursor: pointer;
    transition-property: color, background-color, border-color;
    transition-duration: .3s;
    
    &:hover {
        background-color: #fff;
        color: #299b01;
        border-color: #299B01;
    }
`;
