"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Home() {


  const pathname = usePathname()


  const [counter, setCounter] = useState(0)
  return (
    <div className="container mx-auto">



      <h3>{counter}</h3>
      <div
        onClick={() => setCounter(counter + 1)}
        className="bg-red-400 py-3.5 px-2.5 text-white cursor-pointer">button</div>


      <div>
        <Link className={`btn ${pathname === '/posts' ? 'btn-accent' : ''}`} href={'/posts'}>Posts</Link>
      </div>
    </div>
  );
}
