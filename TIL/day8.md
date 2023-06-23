바닐라 js 순수 자바스크립트

cdn
웹에서 사용되는 다양한 컨텐츠(리소스)를 저장하여 제공하는 시스템
unpkg 등등



babel : js 컴파일러
오래된 브라우저 실행안되는 Js나 jsx같은 파일을 실행가능한 Js로 컴파일 해준다.

jsx
html + js
리액트 엘리먼트를 생성 

함수를 이용하여 재사용 가능한 요소로 사용가능
이용시 태그로 이용해서 사용가능
태그로 이용시 함수의 첫글자는 대문자여야함
```
children이라는 속성으로 하위노드를 정의가능
근데 걍 태그로 쓰샘 읽기편함

const element = (
    <div children = {<h1>hi</h1>} />
)
==똑같다==
const element = (
    <div>
     <h1>hi</h1>
    </div>

``` 
리액트 랜더링
리액트는 바뀐 곳만 리렌더링이된다.
비교알고리즘
버추얼 돔에서 루트 엘리먼트부터 비교시작
엘리먼트 타입이 다르면 완전히 버리고 다시빌드
돔 엘리먼트 타입이 같으면
key를 비교,
if(key is same)
props를 비교해 동일한내역은 유지 , 변경된 속성은 갱신

이벤트핸들러써보기
순수js 와 달리 camal case를 이용한다

tmp html의 대부분의 속성을 쓸수있다.
몇개는 다르다 
html attibute for
in React `HtmlFor`

dom 논리트리
컴포넌트 엘리먼트의 집합

useState
state가 변경될때마다 리랜더링됨.

sideeffect
LocalStorage
저장한 데이터를 명시적으로 지우지 않는 이상 영구적으로 보관이 가능하다.

도메인마다 별도로 LocalStorage가 생성된다.
: 도메인만 같으면 전역적으로 공유가 가능하다.
Windows 전역 객체의 LocalStorage라는 컬렉션을 통해 저장과 조회가 이루어진다.

SessionStorage
데이터의 지속성과 액세스 범위에 특수한 제한이 존재한다.
: Web Storage의 기본 보안처럼 도메인별로 별도로 생성된다. 같은 사이트의 같은 도메인이라도 브라우저가 다르면 서로 다른 영역이 된다. ✔️브라우저 컨텍스트가 다르기 때문이다.

✔️ 브라우저 컨텍스트
Document를 표시하는 환경을 말한다.
즉, 브라우저가 불러온 웹페이지라고 생각하면 된다.

Windows 전역 객체의 SessionStorage라는 컬렉션을 통해 저장과 조회가 이루어진다.