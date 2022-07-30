import React from 'react'
import styled from 'styled-components';

const FirstDiv = styled.div`
    display:flex;
    flex-direction:column;
    overflow-y:scroll;
    scrollbar-width: none;
    height:55vh;
    border:10px solid gray;
    border-radius:10px;
    padding:10px 20px;
    overflow-x:hidden;
    @media screen and (max-width:900px) {
        height:60vh;
        overflow-x:hidden;
        overflow-y:scroll;
    }
`;

const Subtitle = styled.span`
    font-size:5vw;
    font-family:"Montserrat","sans-serif";
`;

const Span = styled.span``;

const Span2 = styled.span``;

const SingleMean = styled.div`
    background-color: ${({ show }) => show ? "#3b5360" : "#fff"};;
    color: ${({ show }) => show ? "#ff" : "#000"};
    display:flex;
    flex-direction:column;
    border-radius:10px;
    padding:10px 20px;
    margin : 10px 0;
`;

const Bold = styled.b``;

const Line = styled.hr`
    background-color:black;
    width:100%;
`;


const Definitions = ({word, category, meanings, LightMode}) => {
    return (
        <FirstDiv>
        {meanings[0] && word && category === "en" && (
                <audio 
                src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} 
                style={{backgroundColor:"#fff",borderRadius:10}}
                controls
                >
                Your browser doesn't support Audio
                </audio>
            )}

           { word === "" ? (
               <Subtitle>Start by typing a word in Search</Subtitle>
           ) : (
               meanings.map((mean) => mean.meanings.map((item) => (
                   item.definitions.map((def) => (
                       <SingleMean show={LightMode}>
                       <Bold>Meaning : </Bold>
                           <Bold>{def.definition}</Bold>
                           <Line />
                           { def.example && (
                             <Span>
                                 <Bold>Example : </Bold>
                                 {def.example}
                             </Span>
                           )}
                           {def.synonyms && (
                            <Span2>
                                 <Bold>Synonyms : </Bold>
                                 {def.synonyms.map((s) => `${s},`)}
                             </Span2>
                           )}
                       </SingleMean>
                   ))
               )))
           )}
        </FirstDiv>
    )
}

export default Definitions
