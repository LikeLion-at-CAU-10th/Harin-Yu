## 리액트 3번째 세션 과제 (좋아요 버튼 만들기)
<img width="728" alt="스크린샷 2022-07-19 오후 1 04 13" src="https://user-images.githubusercontent.com/101720703/179667658-8e8c6f5f-fdd5-41ff-86f7-6c69a55484fd.png">

## 리액트 4번째 세션 과제 (제품 상세 페이지로 이동하기)
<li> url parameter로 동적 라우팅 실습(useNavigate, useParams) </li>
<li> 상세페이지 url path="/detail/:detailID" </li>
<img width="982" alt="스크린샷 2022-07-25 오후 8 58 17" src="https://user-images.githubusercontent.com/101720703/180772834-b3804f52-22d4-407f-a56a-d75465cf3707.png">
<img width="982" alt="스크린샷 2022-07-25 오후 8 58 40" src="https://user-images.githubusercontent.com/101720703/180772846-302dd24c-8f25-490f-93f2-fa55df627bc4.png">
<img width="975" alt="스크린샷 2022-07-25 오후 8 58 52" src="https://user-images.githubusercontent.com/101720703/180772858-8ef3505c-cf69-4e38-96af-8d0fb6a43071.png">

## 리액트 5번째 세션 과제(API로 통신하기)
<li> async/await: 비동기 처리 문법으로, callback과 Promise의 단점을 보완해줌 </li>
<p> async 함수 내의 await를 통해 Promise의 반환 값을 변수에 저장함 <p>
<li> data-fetching 
<p> 1. axios로 서버에 있는 데이터를 받아오고(Get) <p>
<p> 2. 받아온 데이터를 useEffect와 useState를 통해 저장한다. <p>
<p> 3. 데이터를 다른 페이지로 이동해서 사용하고 싶으면 useNavigate(데이터를 받아온 페이지 컴포넌트)와 useLocation(데이터를 이동해서 사용할 페이지 컴포넌트)를 사용해야한다. 이 때 Link로는 props를 전달할 수 없다. navigate를 이용한다. <p>