export default function Button({onOpen, setOnOpen}) {
  return (
    <button className="btn-toggle" onClick={() => setOnOpen((open) => !open)}>
      {onOpen ? "–" : "+"}
    </button>
  );
}