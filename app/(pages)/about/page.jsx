"use client";

import CustomCarousel from "@/app/components/Custom Carousel";

const calculateWidth = () => {
  const isWindowDefined = typeof window !== "undefined";
  if (isWindowDefined) {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 300 && windowWidth <= 440) {
      return "350px";
    } else if (windowWidth > 440 && windowWidth <= 1290) {
      return "750px";
    } else {
      return "1000px";
    }
  }
};

export default function About() {
  const width = calculateWidth();
  return (
    <main className="text-gray-200 mt-24 sm:mt-0">
      <section className="flex" style={{ minHeight: "60dvh", backgroundImage: `url('/arcane-fusion-logo.svg')`, backgroundRepeat: "no-repeat", backgroundPositionX: "left" }}>
        <div className="flex justify-center items-center flex-col text-white w-full" style={{ backgroundColor: "rgba(0,0,0,0.95)" }}>
          <h1 className="text-2xl sm:text-5xl font-arcane">Who We Are?</h1>
          <p className="max-w-xs sm:max-w-lg text-xs sm:text-base">
            At Arcane Fusion, we are not just another gaming studio; we are a dynamic force, blending creativity and technology to craft immersive gaming experiences that transcend
            the ordinary. Our journey began with a simple yet ambitious idea - to fuse the arcane magic of storytelling with the cutting-edge technology of game development. We are
            not just making games; we are weaving digital spells that enchant and captivate players across the gaming realms.
          </p>
        </div>
      </section>
      <section
        className="flex"
        style={{ minHeight: "60dvh", backgroundSize: "contain", backgroundImage: `url('/arcane-fusion-logo.svg')`, backgroundRepeat: "no-repeat", backgroundPositionX: "right" }}
      >
        <div className="flex-1 flex justify-center items-center flex-col text-white" style={{ backgroundColor: "rgba(0,0,0,0.95)" }}>
          <h1 className="text-2xl sm:text-5xl font-arcane">Technologies We Use</h1>
          <p className="max-w-xs sm:max-w-lg text-xs sm:text-base">
            Arcane Fusion operates at the intersection of Unreal and Unity, wielding the combined might of these two formidable platforms. It&apos;s not just a choice; it&apos;s a
            fusion of power, much like combining two epic spells to create an unstoppable force. Our developers seamlessly navigate the realms of Unreal and Unity, harnessing the
            strengths of each to conjure gaming experiences that leave players spellbound.
          </p>
          <div className="mt-12 mx-auto" style={{ width: width }}>
            <CustomCarousel />
          </div>
        </div>
      </section>
    </main>
  );
}
