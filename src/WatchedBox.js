import Button from "./Button";
import { useState } from "react";

export default function WatchedBox({ children }) {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <Button onOpen={isOpen2} setOnOpen={setIsOpen2} />
      {isOpen2 && children}
    </div>
  );
}