import React from 'react';
import styled from "styled-components";

export const ModalButton = ({setOpenItem}) => {
    const Button = styled.button`
        background: #299B01;
    `;

    const close = () => {
        setOpenItem(null);
    };

    return (
        <Button onClick={close}>
            Добавить
        </Button>
    )
};
