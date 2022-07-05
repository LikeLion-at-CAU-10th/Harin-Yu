import React from 'react';
import styled from "styled-components";
import "./Box.css"
import data from "./data.json";

const StyledBoxC=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
padding: 0.5vw;
`

const StyledBox=styled.div`
width: 95%;
height: 95%;
padding: 0.5vw;
background-color: skyblue;
`;

const StyledBoxT=styled.div`
width: 95%;
height: 95%;
background-color: navy;
opacity: 70%;
font-size: 1.5vw;
font-weight: bold;
color: white;
text-align: center;
margin: -8vw 0.5vw 0 0.5vw;

`;

const ItemBox=styled.div`
width: 95%;
height: 95%;
display: flex;
justify-content: space-evenly;
align-items: center;

`

const Box = () => {
    return <>
    <StyledBoxC>
        <ItemBox className="animalImg">
        {data.images.map((box)=>(
            <StyledBox key={box.id}>
                <img src={box.img} alt="X"></img>
            </StyledBox>
        
            ))}
        </ItemBox>
        

        <ItemBox className="animalDesc">
        {data.texts.map((box2)=>(
            <StyledBoxT key={box2.id}>
                    <p clssName="desc">{box2.comp}</p>
                    <p className="imoji">{"...🧡"}</p>
            </StyledBoxT>
            ))}
        </ItemBox>

    </StyledBoxC>
        </>

    
};

export default Box