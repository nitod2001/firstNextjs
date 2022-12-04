import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <div>Coders</div>
      </Link>
      <div>
        <Link href="/about">About</Link>
        <Link href="/coder">All Coders</Link>
      </div>
    </nav>
  );
}
