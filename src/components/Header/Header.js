import React from 'react'
import styled from 'styled-components'
import { TextField, MenuItem, createTheme, ThemeProvider } from "@material-ui/core"
import categories from '../../data/category' ;

const HeaderDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-direction:column;
    height:35vh;
    width:100%; 
    
    @media screen and (max-width:900px) {
            height:25vh;
        }
`;

const Title = styled.span`
    font-size:7vw;
    padding-top:40px;
    text-transform:uppercase;
    font-family:"Montserrat","sans-serif";

    @media screen and (max-width:900px) {
            font-size:11vw;
        }
`;

const HeaderDivTwo = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
`;

const HeaderInputOne = styled(TextField)`
    width:43%;
`;

const HeaderInputTwo = styled(TextField)`
    width:43%;
`;

const Header = ({setCategory, category, word, setWord, LightMode}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightMode ? "#000" : "#fff",
            },
            type:LightMode ? "light" :  'dark',
        },
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    }
    return (
        <HeaderDiv>
            <Title>
                Word Chase
            </Title>
            <HeaderDivTwo>
                <ThemeProvider theme={darkTheme} >
                    <HeaderInputOne  label="Search a word" value={word} onChange={(e)=>setWord(e.target.value)} />
                    <HeaderInputTwo value={category} onChange={(e)=> handleChange(e.target.value) } select label="Lamguage" >
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label} >{option.value}</MenuItem>
                            ))
                        }    
                    </HeaderInputTwo>
                </ThemeProvider>
            </HeaderDivTwo>
        </HeaderDiv>
    )
}

export default Header
