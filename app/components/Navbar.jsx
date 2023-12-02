"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useState, useEffect } from "react";

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

  // const headerStyle = {
  //   backgroundColor: navbarColor,
  //   height: "7vh",
  //   transition: "background-color 0.3s ease",
  // };

  const linksStyle = {
    color: navlinksColor,
  };

  const navlinks = ["Home", "About Us", "Our Team", "Careers", "Contact Us"];
  const links = ["/", "about", "team", "careers", "contact"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <header className="flex items-center justify-between font-arcane sticky top-0 backdrop-blur-md z-10">
      <div className="flex items-center justify-between mx-auto" style={{ width: "1440px" }}>
        <div className={logoVisible ? "" : "invisible"}>
          <Logo />
        </div>
        <nav className="flex">
          <ul className="flex items-center justify-evenly space-x-10" style={linksStyle}>
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
      </div>
    </header>
  );
}
