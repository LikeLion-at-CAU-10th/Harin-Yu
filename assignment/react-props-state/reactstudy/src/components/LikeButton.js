import React, { useState } from "react";
import "../css/LikeButton.css"
import CountLikeBox from './CountLikeBox'


const LikeButton = (props) => {
    const [count, setCount] = useState(0);
    const addCount = ()=>{
        //count를 count+1로 (count 상태 바뀜)
        setCount(count+1); 
    };

    return (
        <>
            <CountLikeBox 
            count={count} 
            addCount={addCount} />
        </>
    )
}

export default LikeButton