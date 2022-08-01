import React from 'react'
import Boxb from './pages/Boxb'
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductDetail from './pages/ProductDetail';
import {StyledApp,StyledCard,StyledHeader} from './styled'
import ToSearch from './components/ToSearch';


const App = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <StyledApp>
              <StyledCard>
                <StyledHeader>
                  <h3>인기중고</h3>
                  <ToSearch></ToSearch>
                </StyledHeader>

              <Boxb />
              </StyledCard>
            </StyledApp>}></Route>
            
        {/* App.js에서는 상세 페이지 주소(path)와 해당 주소에서 그려질 페이지 컴포넌트를(element)를 작성*/}
        {/* Boxb.js에서는 useNavigate를 이용하여 url 파라미터(detailID)를 전달 */}
        {/* ProductDetail.js에서는 useParams를 통해 url 파라미터를 넘겨받고 해당 주소에 맞는 화면을 그려줌 */}
        <Route
          path=":id"
          element={
            <ProductDetail />
          }>
            
        </Route>

      </Routes>
      </Router>
    </>
    
    
  );
};

export default App