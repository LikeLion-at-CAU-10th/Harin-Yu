import React from "react";
import LikeImg from '../data/img/Like.png';
import styled from "styled-components";

const CountBoxCon=styled.div`
border: solid #b7aebd 1px;
border-radius: 15%;
padding: 1.5px;
`
const CountLikeBox = (props) => {
    return (
        <CountBoxCon>
            <img className="Like" src={LikeImg} alt="no imag" onClick={props.addCount}></img>
            <span> {props.count} </span>
        </CountBoxCon>
        
    )
}

export default CountLikeBox