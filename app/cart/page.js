// 파일 최상단에 'use client'를 선언하면 해당 파일의 컴포넌트는 모두 클라이언트 컴포넌트가 된다.
// 하지 않으면 모두가 server 컴포넌트인데, useState, event 등 자바스크립트 속성들을 사용하지 못함
// server 컴포넌트는 로딩이 빠름 (자바스크립트 기능이 배제 되기 때문에)
// client 컴포넌트는 로딩이 느림 왜냐하면 자바스크립트 기능이 존재. hydration 과정이 필요함 (html을 자바스크립트로 다시 분석하는 과정)
// 따라서 큰 페이지는 서버 컴포넌트를 사용하고, 자바스크립트 기능이 필요할 때, 클라이언트 컴포넌트를 사용하자
import { age, Greeting } from "./data.js";

export default function Cart() {
  let items = ["tomatoes", "pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {/* <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div> */}
      {/* Component로 덩어리식으로 묶자 */}
      <Greeting></Greeting>
      <h4>Info : {age}</h4>
      <CartItem item={items[0]}></CartItem>
      <CartItem item={items[1]}></CartItem>
      {/* 재사용이 잦은 요소들만 컴포넌트화 시키는게 좋음 */}
      <Banner card="현대카드" />
      <Banner card="롯데카드" />
      <ColorButton select="red" />
      <ColorButton select="blue" />
    </div>
  );
}

function ColorButton(props) {
  return <button style={{ backgroundColor: props.select }}>버튼</button>;
}

function Banner(props) {
  return <h4>{props.card} 결제 행사중</h4>;
}
// nextJS는 서버 컴포넌트랑 클라이언트 컴포넌트가 나뉨

// 컴포넌트는 다른 요소 밖에서 만드는 것이 좋음

// props는 부모 컴포넌트가 자식 컴포넌트에게 값을 전송하는 문법
// 하위에서 사용할 값들은 최상위 부모 컴포넌트에 값을 선언하는게 좋음
function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
