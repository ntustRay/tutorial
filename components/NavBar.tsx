import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="max-w3-xl mx-auto p-4 flex gap-x-4">
      <Link href="/">Home</Link>
      <Link href="/counter">Counter</Link>
      <Link href="/tours">Tours</Link>
      <Link href="/actions">Actions</Link>
    </nav>
  );
};

export default NavBar;