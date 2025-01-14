"use client";
import { useState } from "react";

export default function ModeSwitch() {
  const [licht, setLicht] = useState<boolean>(true);

  const modeSwitch = () => {
    setLicht(!licht);
  };
  return (
    <div>
      <button onClick={modeSwitch}>Switch {licht ? "Dark" : "Light"}</button>
    </div>
  );
}
