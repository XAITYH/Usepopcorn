import { useState } from "react";
import Button from "./Button";

export default function Box({ children }) {// { element }
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <Button onOpen={isOpen} setOnOpen={setIsOpen} />
      {isOpen && children}
    </div>
  );
}
