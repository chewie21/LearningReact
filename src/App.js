import { createGlobalStyle} from "styled-components";
import React from 'react';

import { NavBar } from './Components/NavBar'

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit
    }
    body {
        font-family: Roboto;
        margin: 0;
        background-color: #f0f0f0;
        font-size: 20px;
        color: black
    }
    
    a {
        text-decoration: none;
        color: inherit
    }
    
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    h1, h2, h3, p {
        font-family: Pacifico;
        padding: 0;
        margin: 0;
    }
    
    img {
        max-width: 100%;
        height: auto;
    }
`;

function App() {
  return (
      <React.Fragment>
          <div className="App">
              <GlobalStyle/>
              <NavBar/>
              <p>Привет</p>
          </div>
      </React.Fragment>
  );
}

export default App;
