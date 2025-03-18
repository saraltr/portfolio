"use client"
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';



function Nav() {
    return (
        <div className="header">
        <div className="logo m-2">
                <h1 className="nature-logo">Sara<span className="highlight">Designs</span></h1>
          </div>
        <nav className="nav">
            <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><Link href="/projects">Projects</Link></li>
            </ul>
        </nav>
        <div className="cta-container">
            <button className="nature-button">Contact</button>
            <div className="cta-decoration"></div>
        </div>
    </div>
    );
}

function SmallNav() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <div className="logo m-2 flex items-center justify-between cursor-pointer relative">
        <h1 className="nature-logo ">
          Sara<span className="highlight">Designs</span>
        </h1>

        <FontAwesomeIcon
          icon={isNavVisible ? faXmark : faBars}
          style={{
            height: '2rem',
            color: isNavVisible ? '#fefae0' : 'rgba(var(--highlight-rgb))',
            transition: 'transform 0.3s ease, color 0.3s ease',
          }}
          onClick={toggleNav}
          className={`hover:text-highlight z-50 ${
            isNavVisible ? 'rotate-45' : 'rotate-0'
          }`}
        />
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
          isNavVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleNav} // Close the nav when clicking outside the menu
      ></div>

      <nav
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-[#4a6955] shadow-lg transform transition-transform duration-500 ease-in-out ${
          isNavVisible ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <ul className="z-10 flex flex-col justify-center h-full text-center space-y-8">
          <li className="text-lg text-[#fefae0] font-semibold transform transition duration-500 ease-in-out hover:translate-x-2">
            <Link href="/">Home</Link>
          </li>
          <li className="text-lg text-[#fefae0] font-semibold transform transition duration-500 ease-in-out hover:translate-x-2">
            <a href="#about">About</a>
          </li>
          <li className="text-lg text-[#fefae0] font-semibold transform transition duration-500 ease-in-out hover:translate-x-2">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="text-lg text-[#fefae0] font-semibold transform transition duration-500 ease-in-out hover:translate-x-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

const Header: React.FC = () => {
  return (
    <header>
      <div className="lg:hidden smallerNav">
        <SmallNav />
      </div>
      <div className="hidden lg:block">
        <Nav />
      </div>
    </header>
  );
};

export default Header;