import React from "react";
import Link from "next/link";

export default function header() {
  return (
    <div>
      <nav className="navbar">
        <Link href='/'>Home</Link>
        <Link href='/contactus'>Contact Us</Link>
        <Link href='/aboutus'>About Us</Link>
      </nav>
    </div>
  );
}
