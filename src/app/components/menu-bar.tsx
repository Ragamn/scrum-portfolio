import React from "react";
import Link from "next/link";
import "/src/app/style/components/menu-bar.css";

const MenuBar = () => {
  return (
    <nav className="menu-bar">
      <ul className="menu-list">
        <li className="menu-item">
          <Link href="/">TOP</Link>
        </li>
        <li className="menu-item">
          <Link href="/about">ABOUT ME</Link>
        </li>
        <li className="menu-item">
          <Link href="/skills">SKILL</Link>
        </li>
        <li className="menu-item">
          <Link href="/portfolio">PORTFOLIO</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
