import { useState } from "react";

export default function Search({setQuery}) {
  const [tempQuery, setTempQuery] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    setQuery(tempQuery)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={tempQuery}
        onChange={(e) => setTempQuery(e.target.value)}
      />
    </form>
  );
}
