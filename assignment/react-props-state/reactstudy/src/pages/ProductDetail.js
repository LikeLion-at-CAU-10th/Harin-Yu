import React , {useEffect, useState} from 'react'
// import detail from '../data/productDetail'
import {useParams, useLocation} from 'react-router-dom';
import "../css/Detail.css";
import axios from 'axios';

import {
    ProdDetCon,
    ProdContainer,
    ProdName,
    ProdDesc,
    AboutDetail,
} from "../styled"

const ProductDetail = (props) => {
    //useParams()=> 현재 url 의 붙어 있는 url parameter를 인식하는 역할
    //'detailID'에 현재 url 파라미터를 담게 됌
    // const {detailID} = useParams();
    // const id = detailID;

    //map함수를 사용하면 리스트에 저장된 모든 데이터 값이 출력되지만,
    //filter함수를 사용하면 상세 페이지에 해당하는 특정 데이터 값만을 선택적으로 출력가능. 
    // const which = detail.detailProd.filter((one)=>one.id===id)[0];

    //Boxb.js에서 axios로 받아온 데이터를 useLocation을 사용해 넘겨 받음
    const {state} = useLocation();


    return ( 
        <ProdDetCon>
            {/* <h5> {which.id}번 상품에 대한 상세페이지</h5> */}
            <ProdContainer>
                <ProdName> 
                    {state.title} 
                </ProdName>
                <img className="imgDetail" 
                src={state.img}
                alt='no img'></img>
                
                <ProdDesc>
                    <AboutDetail>
                        <div className='textMenu'> 가격 </div>
                        <div className='textContents'> 
                        {state.price} 
                        </div>
                    </AboutDetail>

                    <AboutDetail>
                        <div className='textMenu'> 거래 장소 </div>
                        <div className='textContents'> 
                        {state.address} 
                        </div>
                    </AboutDetail>

                    <AboutDetail>
                        <div className='textMenu'> 상세정보 </div>
                        <div className='textContents'> 
                        {state.contents} 
                        </div>
                    </AboutDetail>
                </ProdDesc>
            </ProdContainer>
        </ProdDetCon>
    )
}

export default ProductDetail;