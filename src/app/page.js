"use client"

import { useState } from "react";

export default function Home() {


  const [counter, setCounter] = useState(0)
  return (
    <div>
      Hello there homepage!

      <h3>{counter}</h3>
      <div
        onClick={() => setCounter(counter + 1)}
        className="bg-red-400 py-3.5 px-2.5 text-white cursor-pointer">button</div>
    </div>
  );
}
