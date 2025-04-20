"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="border border-[#7d4f50] bg-[#2b2724] rounded-t-xl shadow-[0_4px_12px_rgba(0,0,0,0.4)] mx-4 mt-4">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1d1a1a] rounded-t-xl border-b border-[#7d4f50]">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-[#e8bcb9] rounded-full" />
          <div className="w-3 h-3 bg-[#7EA680] rounded-full" />
          <div className="w-3 h-3 bg-[#7d4f50] rounded-full" />
        </div>
        <div className="text-[#d8cfc4] font-y2k tracking-wider">SaraDesigns</div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#e8bcb9] text-xl"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>

        {/* Filler for spacing */}
        <div className="opacity-0 hidden md:block">_</div>
      </div>

      {/* Mobile & Desktop Navigation */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex items-center justify-between px-6 py-4`}
      >
        <nav className="w-full">
          <ul className="text-center md:flex md:gap-6 text-[#e8bcb9] font-medium font-y2k">
            <li className="my-2 md:my-0 md:hover:bg-[#2b2724] md:hover:text-[#7EA680] transition-all">
              <Link href="/">Home</Link>
            </li>
            <li className="my-2 md:my-0 md:hover:bg-[#2b2724] md:hover:text-[#7EA680] transition-all">
              <Link href="">About</Link>
            </li>
            <li className="my-2 md:my-0 md:hover:bg-[#2b2724] md:hover:text-[#7EA680] transition-all">
              <Link href="/projects/web-dev">Web Dev Projects</Link>
            </li>
            <li className="my-2 md:my-0 md:hover:bg-[#2b2724] md:hover:text-[#7EA680] transition-all">
              <Link href="/projects/design">Graphic Design Projects</Link>
            </li>

            <li className="my-4 md:hidden hover:bg-[#2b2724]">
              <button className="bg-[#7EA680] text-[#2b2724] px-4 py-2 rounded border border-[#e8bcb9] shadow-[2px_2px_0px_#e8bcb9] hover:shadow-[4px_4px_0px_#e8bcb9] transition-all">
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <button className="bg-[#7EA680] text-[#2b2724] px-4 py-2 rounded border border-[#e8bcb9] shadow-[2px_2px_0px_#e8bcb9] hover:shadow-[4px_4px_0px_#e8bcb9] transition-all">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
