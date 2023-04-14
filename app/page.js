export default function Home() {
  let name = "sehopark";
  const site = "https://www.sayyyho.site";
  return (
    <div>
      <h2 style={{ color: "black", background: "white" }} className="title">
        SEHO PARK
      </h2>
      <a href={site}>view my page</a>
      <footer>
        <p className="sub">by dev {name}</p>
      </footer>
    </div>
  );
}
