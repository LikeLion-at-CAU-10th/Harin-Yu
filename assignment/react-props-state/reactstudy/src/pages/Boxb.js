//map 함수 사용할 때 : 박스 별로 키 값을 부여->고유한 값으로 식별 가능
import React from 'react';
import detail from "../data/productDetail.js"
import "../css/Boxb.css"
import LikeButton from "../components/LikeButton";
import {useNavigate, Link} from 'react-router-dom';

import {
    StyledBox,
    TextContainer,
    Button,
} from "../styled"

const Boxb = () => {
    const navigate = useNavigate();

    const handleClick =(url) => {
        navigate(url);
    };

    return <>{detail.detailProd.map((product)=>(
        <>

            <StyledBox key={product.id}>
                <Link to= "" ><img src={product.img} alt="no imag"></img></Link>
                
                    <textitem>
                        <p><b>{product.title}</b></p>
                        <p className="address"> {product.address}</p>
                        <TextContainer>
                            <p className="price"> {product.price}</p>
                            <LikeButton />
                        </TextContainer>

                        {/* 상세보기 버튼 */}
                        <Button onClick={()=> handleClick('/detail/' + product.id)}> 상세보기 </Button> 
                    </textitem>

            </StyledBox>

        </>
        ))}
        </>
    
};

export default Boxb