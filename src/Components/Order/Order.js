import React from 'react';
import styled from "styled-components";

import { ModalButton } from "../Styles/ModalButton";
import { OrderListItem } from "./OrderListItem";

const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 80px;
    left: 0;
    background: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
`;

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div`
    display: flex;
    margin-bottom: 30px;
    & span:first-child {
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

export const Order = ({ orders }) => {

    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            { orders.length ? <div>
                <OrderContent>
                    <OrderList>
                        {orders.map(order =>  <OrderListItem order={order}/>)}
                    </OrderList>
                </OrderContent>
                <Total>
                    <span>Итог:</span>
                    <span>5</span>
                    <TotalPrice>850 P</TotalPrice>
                </Total>
                <ModalButton>Оформить</ModalButton>
            </div> : <EmptyList>Список заказов пуст</EmptyList>}
        </OrderStyled>
    )
}
