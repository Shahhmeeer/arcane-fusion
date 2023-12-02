"use client";
import Link from "next/link";
import Image from "next/image";
import companyLogo from "../../public/arcane-fusion-logo.svg";
import { useGlitch } from "react-powerglitch";
import "../globals.css";

export default function Logo() {
  // Calling the Glitch Library.
  const glitch = useGlitch().ref;

  return (
    <div className="flex items-center justify-center">
      <Image src={companyLogo} width={40} alt="Arcane Fusion Logo" ref={glitch} />
      <div className="verticalLine bg-gray-200" ref={glitch} style={{ height: "3rem" }}></div>
      <Link href="/" className="flex font-arcane pt-4 items-center text-2xl text-gray-200" ref={glitch}>
        arcane fusion
      </Link>
    </div>
  );
}
