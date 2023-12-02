"use client";

import Image from "next/image";
import companyLogo from "../../public/arcane-fusion-logo.svg";
import { useGlitch } from "react-powerglitch";

export default function Hero() {
  const glitch = useGlitch().ref;
  return (
    <main>
      <section className="flex items-center justify-center glitch-background" style={{ minHeight: "93vh" }}>
        <div className="flex items-center justify-center">
          <Image src={companyLogo} alt="Arcane Fusion Logo" ref={glitch} />
          <div className="verticalLine" ref={glitch}></div>
          <div className="flex font-arcane h-4 pt-6 items-center text-5xl text-slate-300" ref={glitch}>
            arcane fusion
          </div>
        </div>
        {/* <video src="/arcane fusion.mp4" autoPlay muted loop></video> */}
      </section>
    </main>
  );
}
