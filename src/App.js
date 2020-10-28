import React from 'react';

import {GlobalStyle} from "./Components/GlobalStyle";
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { ModalItem } from "./Components/ModalItem";

function App() {

    const [openItem, setOpenItem] = React.useState(null);

    console.log('Item', openItem);

    return (
      <React.Fragment>

          <GlobalStyle/>
          <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
          <NavBar/>
          <Menu setOpenItem={setOpenItem}/>

      </React.Fragment>
    );
}

export default App;
