import React from 'react';

import {GlobalStyle} from "./Components/Styles/GlobalStyle";
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from "./Components/ModalItem/ModalItem";
import { Order } from "./Components/Order/Order";

import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";

function App() {

    const openItem = useOpenItem();
    const orders = useOrders();

    console.log('Item', openItem);

    return (
      <React.Fragment>

          <GlobalStyle/>
          { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
          <NavBar/>
          <Order {...orders}/>
          <Menu {...openItem}/>

      </React.Fragment>
    );
}

export default App;
