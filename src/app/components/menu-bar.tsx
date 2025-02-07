"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "/src/app/style/components/menu-bar.css";

const MenuBar = () => {
  const pathname = usePathname();
  const textClass = pathname === "/" ? "text-custommenutop" : "text-custommenu";

  return (
    <nav className="menu-bar">
      <ul className="menu-list">
        <li className={`menu-item ${textClass}`}>
          <Link href="/">TOP</Link>
        </li>
        <li className={`menu-item ${textClass}`}>
          <Link href="/about">ABOUT ME</Link>
        </li>
        <li className={`menu-item ${textClass}`}>
          <Link href="/skills">SKILL</Link>
        </li>
        <li className={`menu-item ${textClass}`}>
          <Link href="/portfolio">PORTFOLIO</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
