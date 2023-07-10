"use client";
// import Image from "next/image";
// import foodImage from "/public/food0.png";
import { useState } from "react";
export default function List() {
  let itemName = ["Tomato", "Pasta", "Coconut"];
  let [amount, addAmount] = useState([0, 0, 0]);
  // state도 클라이언트 컴포넌트 내에서만 가능
  // state 이점 : state 변경 시 자동 재랜더링 기능 제공

  // array 내 요소만큼 함수 실행
  // 1st event는 array 내 요소 하나씩
  // 2nd evnet는 현재 인덱스 출력
  // return 넣어주면 그 return을 통해 어레이를 만들 수 있음
  // map은 jsx 안에서 사용 가능
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {itemName.map((item, index) => {
        return (
          // 같은 요소 반복할 때, key라는 값을 생성해주는 것을 권장
          <div className="food" key={index}>
            <img
              src={"/food" + index + ".png"}
              alt={item}
              className="food-img"
            />
            {/* public 폴더에 넣어 놓으면 알아서 루트경로로 인식해서 사용가능
              
              {/* 하단은 최적화 하는 법 */}
            {/* <Image src={foodImage} className="food-img" /> */}
            {/* 사용할 image를 import 해와야 함 */}
            {/* 추가로 외부링크 사용 시 width랑 height를 모두 작성해야함 */}
            {/* 그리고 next.config.js에 작성도 해줘야함 - 검색해보기 */}
            <h4>{item} : $40</h4>
            <span>{amount[index]}</span>
            <button
              onClick={() => {
                // state는 이전의 값과 완전히 다를 때, 수정이 된다.
                // 그냥 let copy = amount를 통해 값을 할당받고
                // copy를 수정시켜도, 가리키는 포인터가 일치하기 때문에, == 연산 시 늘 true가 나와 수정되지 않는다.
                let copy = [...amount];
                // 전개연산을 통해야 포인터(레퍼런스)가 다르고, 값이 동일한 새로운 배열을 만들 수 있다.
                copy[index]++;
                addAmount(copy);
              }}
            >
              +
            </button>
            {/* addAmount 소괄호 내에서 data를 갈아치워줌 */}
          </div>
        );
      })}
    </div>
  );
}
