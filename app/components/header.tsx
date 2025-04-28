"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const pathname = usePathname(); // get the current pathname from next/navigation

  useEffect(() => {
    // close the menu whenever the pathname changes
    setMenuOpen(false);
  }, [pathname]); // run every time the pathname changes

  return (
    <div className="border border-[#5b6bc0] bg-[#23263a] rounded-t-xl shadow-[0_4px_12px_rgba(0,0,0,0.4)] mx-4 mt-4">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1a1d2d] rounded-t-xl border-b border-[#5b6bc0]">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-[#8c8edf] rounded-full" />
          <div className="w-3 h-3 bg-[#6a74d9] rounded-full" />
          <div className="w-3 h-3 bg-[#5b6bc0] rounded-full" />
        </div>
        <div className="text-[#e6e6f2] font-y2k tracking-wider">
          <h1>
            <Link href="/">SaraDesigns</Link>
          </h1>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#8c8edf] text-xl"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>

        <div className="opacity-0 hidden md:block">_</div>
      </div>

      {/* Mobile & Desktop Navigation */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex items-center justify-between px-6 py-4`}
      >
        <nav className="w-full">
          <ul className="text-center md:flex md:gap-6 text-[#e6e6f2] font-medium font-y2k">
            <li className="my-2 md:my-0 md:hover:bg-[#23263a] md:hover:text-[#6a74d9] transition-all">
              <Link href="/">Home</Link>
            </li>
            <li className="my-2 md:my-0 md:hover:bg-[#23263a] md:hover:text-[#6a74d9] transition-all">
              <Link href="">About</Link>
            </li>
            <li className="my-2 md:my-0 md:hover:bg-[#23263a] md:hover:text-[#6a74d9] transition-all">
              <Link href="/projects/web-dev">Web Dev Projects</Link>
            </li>
            <li className="my-2 md:my-0 md:hover:bg-[#23263a] md:hover:text-[#6a74d9] transition-all">
              <Link href="/projects/design">Graphic Design Projects</Link>
            </li>

            <li className="my-4 md:hidden hover:bg-[#23263a]">
              <button className="bg-[#252E93] text-white px-4 py-2 rounded border border-[#8c8edf] shadow-[2px_2px_0px_#8c8edf] hover:shadow-[4px_4px_0px_#8c8edf] transition-all">
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <button className="bg-[#252E93] text-white px-4 py-2 rounded border border-[#8c8edf] shadow-[2px_2px_0px_#8c8edf] hover:shadow-[4px_4px_0px_#8c8edf] transition-all">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
