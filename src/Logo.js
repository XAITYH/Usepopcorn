export default function Logo() {
  return (
    <div className="logo" onClick={() => window.location = "/"}>
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}