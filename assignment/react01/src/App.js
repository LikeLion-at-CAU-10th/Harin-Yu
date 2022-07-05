import React from 'react'
import Box from "./Box"
import styled from "styled-components"
import './App.css';


const StyledCont=styled.div`
display: flex;
justify-content:center;
`;

const StyledCard=styled.div`
/* width: 100vh; */
height: 100vh;
display: flex;
justify-content:center;
align-items: center;

`;


const App = () => {
  return (
    <StyledCont>

      <StyledCard>

        <Box></Box>

      </StyledCard>

    </StyledCont>

  );
}

export default App;
