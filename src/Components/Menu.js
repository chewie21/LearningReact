import React from 'react';
import styled from "styled-components";

import dbMenu from "./DBMenu";
import { ListItem } from "./ListItem";
import BannerImg from '../image/banner.png';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
`;

const MenuBanner = styled.div`
    background-image: url(${BannerImg});
    background-position: center;
    background-size: cover; 
    height: 210px;
`;

export const Menu = ({setOpenItem}) => (
    <MenuStyled>
        <MenuBanner/>
        <section>
            <h2>Бургеры</h2>
            <ListItem
                setOpenItem={setOpenItem}
                itemList={dbMenu.burger}/>
        </section>

        <section>
            <h2>Закуски / Напитки</h2>
            <ListItem
                setOpenItem={setOpenItem}
                itemList={dbMenu.other}/>
        </section>
    </MenuStyled>
);
