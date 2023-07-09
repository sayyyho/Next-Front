// import Image from "next/image";
// import foodImage from "/public/food0.png";
export default function List() {
  let itemName = ["Tomato", "Pasta", "Coconut"];
  let myArray = [1, 2, 3];
  myArray.map((a) => {
    console.log(a);
  });
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
          </div>
        );
      })}
    </div>
  );
}
