import React, {useEffect, useState} from 'react';
// import detail from "../data/productDetail.js"
import "../css/Boxb.css"
import LikeButton from "../components/LikeButton";
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

import {
    StyledBox,
    TextContainer,
    Button,
} from "../styled"


const Boxb = () => {
    const navigate = useNavigate();
    const handleClick=(url, id)=>{
        navigate(url, {state:productList[id-1]})
    }

    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        axios.get("https://9abff952-ea24-484a-ad0a-e7167e39a5fb.mock.pstmn.io/session5")
        .then(response=>{
            setProductList(response.data.products);

        })
    })
    console.log(productList);

    if(!productList){ return null;}


    
    return <>{productList.map((product)=>(
        <>

            <StyledBox key={product.id}>
                <Link to= "" >
                    <img src={product.img} alt="no imag"></img>
                </Link>
                
                    <textitem>
                        <p><b>{product.title}</b></p>
                        <p className="address"> {product.address}</p>
                        <TextContainer>
                            <p className="price"> {product.price}</p>
                            <LikeButton />
                        </TextContainer>

                        {/* 상세보기 버튼 */}
                        <Button onClick={()=> handleClick(`${product.id}`, product.id)}> 상세보기 </Button> 
                    </textitem>
            
            </StyledBox>

        </>
        ))}
        </>
    
};

export default Boxb