export default function List() {
  let itemName = ["🍑", "🍊", "🍒"];
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
          <div className="food">
            <h4>
              {index + 1}번째 item : {item} $40
            </h4>
          </div>
        );
      })}
    </div>
  );
}
