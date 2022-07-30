import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container,withStyles } from '@material-ui/core'
import Header from './components/Header/Header'
import Definitions from './components/Definitions/Definitions'
import Switch from '@material-ui/core/Switch';
import { grey } from '@material-ui/core/colors';
import styled from 'styled-components';

const FirstDiv = styled.div`
height: 100vh;
background-color: ${({ show }) => show ? "#fff" : "#282c34"};
color: ${({ show }) => show ? "#000" : "#fff"};
transition:all 0.5s linear;
`;

const SecondDiv = styled.div`
padding-bottom:40px;
`;

const SwitchDiv = styled.div`
position:absolute;
top:0;
right:0;
padding:10px 20px;
`;

const MainContainer = styled(Container)`
 display: flex;
flex-direction: column;
 height: 100vh ;

`;

const Span = styled.span``;
const App = () => {
  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en")
  const [LightMode, setLightMode] = useState(false)
  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

   console.log(meanings);
  
  useEffect(() => {
    dictionaryApi();
  },[word, category]);

  return (
    <FirstDiv show={LightMode}> 
      <MainContainer maxWidth="md" style={{ justifyContent: "space-evenly"}}>
        <SwitchDiv>
          <Span>{LightMode ? "Dark" : "Light"} Mode</Span>
          <DarkMode checked={LightMode} onChange={() => setLightMode(!LightMode)}  />
        </SwitchDiv>
        <SecondDiv>
          <Header category={category} setCategory={setCategory} word={word} setWord={setWord} LightMode={LightMode}  />
        </SecondDiv>
        <Definitions  word={word} category={category} meanings={meanings} LightMode={LightMode} />
      </MainContainer>
    </FirstDiv>
  )
}

export default App
