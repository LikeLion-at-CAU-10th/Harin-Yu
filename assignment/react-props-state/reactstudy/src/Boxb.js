//map 함수 사용할 때 : 박스 별로 키 값을 부여->고유한 값으로 식별 가능
import React from 'react';
import styled from "styled-components";
import data from "./data.json";
import "./Boxb.css"
import LikeButton from "./LikeButton";


const StyledBox=styled.button`
border: 1px solid transparent;
width: 30vh;
height: 30vh;
font-size : 12px;
background-color: white;
text-align: left;
margin: 0vh 2vh 2vh 0vh;
`;

const TextContainer=styled.div`
display: flex;
justify-content: space-between;
`


const Boxb = () => {
    return <>{data.products.map((product)=>(
        <>
            <StyledBox key={product.id}>
                <img src={product.img} alt="no imag"></img>
                
                    <textitem>
                        <p><b>{product.title}</b></p>
                        <p className="address"> {product.address}</p>
                        <TextContainer>
                            <p className="price"> {product.price}</p>
                            <LikeButton />
                        </TextContainer>
                    </textitem>
                    
                
            </StyledBox>
        </>
        ))}
        </>
    
};

export default Boxb