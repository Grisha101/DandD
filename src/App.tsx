import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    font-size: 16px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      Character generator
    </>
  );
}

export default App;
