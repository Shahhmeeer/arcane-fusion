"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import CustomSheet from "./Custom Sheet";

export default function Navbar() {
  // const [navbarColor, setNavbarColor] = useState("transparent");
  const [navlinksColor, setNavlinksColor] = useState("#ccc");
  const [logoVisible, setLogoVisible] = useState(false);

  function settingNavbarColor() {
    if (window.scrollY > 500) {
      // setNavbarColor("white");
      setLogoVisible(true);
      setNavlinksColor("#ccc");
    } else {
      // setNavbarColor("transparent");
      setLogoVisible(false); // Hide the logo
      setNavlinksColor("#ccc");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", settingNavbarColor);

    return () => {
      window.removeEventListener("scroll", settingNavbarColor);
    };
  }, []);

  const linksStyle = {
    color: navlinksColor,
  };

  const navlinks = ["Home", "About Us", "Contact Us"];
  const links = ["/", "about", "contact"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <header className="flex items-center justify-between font-arcane fixed backdrop-blur-md top-0 z-10 w-full" style={{ backgroundColor: "rgba(0,0,0,0.15)", minHeight: "8dvh" }}>
      <div className="flex items-center justify-between sm:mx-auto mx-6" style={{ width: "1440px" }}>
        <div>
          <Logo />
        </div>
        <nav className="hidden sm:flex">
          <ul className="flex items-center justify-evenly space-x-8" style={linksStyle}>
            {navlinks.map((navlink, index) => {
              return (
                <li key={index}>
                  <Link
                    href={links[index]}
                    key={index}
                    className={activeTab === index ? `active cursor-pointer glitch-text` : "cursor-pointer"}
                    onClick={() => setActiveTab(index)}
                  >
                    {navlink}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="sm:hidden">
          <CustomSheet />
        </div>
      </div>
    </header>
  );
}
