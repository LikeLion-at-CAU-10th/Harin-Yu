import React, {useState} from 'react'
import {SearchCon, SearchContainer} from '../styled.js'
import '../css/Boxb.css'

const ToSearch = () => {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };


    return (
        <SearchCon>
            <SearchContainer>
                <input onChange={onChange} val={text} placeholder="검색어를 입력 하세요"/>
                <button> 검색 </button>
                
            </SearchContainer>
            <div className="searchText"> 입력한 검색어: {text} </div>

        </SearchCon>
        
    )
}

export default ToSearch