## 0. 들어가기 전 ##
> http 프로토콜 환경은 connectionless, stateless한 특성을 갖고 있기 때문에 서버는 클라이언트를 확인하는 과정을 또 한 번 거쳐야 한다. 
> 이처럼 클라이언트를 확인하는 데 사용하는 것이 바로 `쿠키`와 `세션`이며, 사용자 인증 방법에는 `세션 기반 인증`과 `토큰 기반 인증`이 있다.




## 1. 쿠키와 세션 ##
### 1-1 쿠키

**개념** : 클라이언트(브라우저) 로컬에 저장되는 키와 값이 들어있는 데이터 파일

⇒ 데이터를 클라이언트(브라우저)측에 저장

but, 데이터를 브라우저에 저장하여 보안 상에 문제를 발생시키기도한다.





**구성** : 이름 , 값, 만료일, 경로정보

만료일의 경우,  ‘팝업창 14일 동안 끄기’ 기능으로 사용하기도 함




### 1-2 세션

**개념** : 쿠키를 기반하고 있으며, 데이터를  서버 측에서 관리한다.

클라이언트 구분을 위해 세션 ID를 부여하여 브라우저가 서버에 접속해있는동안 인증상태를 유지할 수 있도록 도와준다.

⇒ 쿠키가 가진 보안 상의 문제를 보완


`여기서, 세션 ID값을 쿠키에 저장하여 사용함`





## 2. 세션 기반 인증과 토큰 기반 인증 ##
### 2-1 세션 기반 인증


**개념** : 서버에서 데이터를 관리하면서 사용자가 로그인 중인 것을 기억하고 있는 로직.

**인증과정**: 

1) 서버는 사용자가 정보가 세션 저장소에 등록되지 않은 경우, 세션 ID를 발급한다.

2) 해당 세션 ID는 브라우저 쿠키에 저장된다. 

3) 클라이언트의 요청에 따라 서버는 세션 저장소(DB)에서 세션 ID를 조회하고 로그인 여부를 결정함

(세션 ID가 명찰이라면, 쿠키는 이를 감싼 보자기)

⇒ 사용자 정보는 명찰(=세션 ID)에 각인되고 보자기(=쿠키)에 싸여 전달됌





#### 2-2 토큰 기반 인증


**개념** :토큰으로 사용자를 인증하는 로직

`토큰이란 사용자의 로그인 정보와 유저 고유의 정보를 담고 있는 문자열로, 서버에서 발급해줌 ex) JWT(Json Web Token`


**인증과정** : 

1) 서버가 토큰을 발급한다.

2) 클라이언트의 요청과 함께 토큰이 함께 요청된다.

3) 서버는 토큰의 유효성을 검증하고 이에 맞는 응답을 보낸다.


*세션 기반 인증과의 차이

`⇒토큰을 사용하여 세션 기반 인증과 달리 데이터베이스를 확인하는 과정이 생략됌`




## 3. CORS(Cross-Origin Resource Sharing) ##
**cross-origin**: 한 출처에서 실행 중인 웹 어플리케이션이 다른 `출처`의 자원에 대한 접근 권한을 부여하도록 브라우저에 알려주는 체제

⇒ cross-origin 을 위해서는 서버와 클라이언트 모두 CORS에러에 대한 처리를 명시해야함.

`서버의 위치를 나타내는 URL은 아래의 구성요소로 이루어져있는데, 출처란 URL에서 프로토콜과 호스트, 포트 번호까지 합친 것을 의미한다.`




## 4. 로컬 스토리지와 세션 스토리지 ##
### 웹 스토리지 (web storage)

: 로컬스토리지와 세션 스토리지로 포괄하는 개념으로, 

클라이언트에 대한 정보를 key-value의 형태로 브라우저에만 저장하며, 서버에 데이터를 저장하지 않는다.

(쿠키의 경우, 서버와 로컬에 데이터를 저장함)

⇒ 사용자정보(데이터)를 어떤 범위에서 얼마나 오래 보존시키는지의 여부에 따라 로컬 스토리지와 세션 스토리지로 나눌 수 있다.


|로컬스토리지|세션스토리지|
|---|---|
|세션이 끝나도 데이터가 삭제 되지 않음|세션이 끝날 때나 창이 닫힐 때 데이터가 삭제됌|
|ex) 자동로그인이 실행되는 경우|ex) 은행 창 이용시 일정시간마다 재로그인을 해야하는 경우|





