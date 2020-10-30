import React from 'react';
import styled from "styled-components";
import { ModalButton } from "../Styles/ModalButton";

const Overlay = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 600px;
`;

const Banner = styled.div`
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
    width: 100%;
`;

const ModalBody = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
`;

const ModalContent = styled.div`
    display: flex;
    justify-content: space-around;
`;


export const ModalItem = ({ openItem, setOpenItem, orders, setOrders}) => {

    const close = (event) => {
        if(event.target.id === 'overlay') setOpenItem(null);
    }

    const order = {
        ...openItem
    };

    const addToOrder = () => {
        console.log(1);
        setOrders([...orders, order]);
        setOpenItem(null);
    }

    return (
        <Overlay id='overlay' onClick={close}>
            <Modal>
                <Banner img={openItem.img}/>
                <ModalBody>
                    <ModalContent>
                        <p>
                            {openItem.name}
                        </p>
                        <p>
                            {openItem.price}
                        </p>
                    </ModalContent>
                </ModalBody>
                <ModalButton onClick={addToOrder}>Добавить</ModalButton>
            </Modal>
        </Overlay>
    )
}
