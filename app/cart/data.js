let age = 23;
const name = "Seho Park";
function Greeting() {
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}

// export default age;
// 두 개 이상 내보낼때
export { age, Greeting };
