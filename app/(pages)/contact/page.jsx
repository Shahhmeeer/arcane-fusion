// import Form from "../../components/Form";

import Form from "@/app/components/Form";

export default function Contact() {
  return (
    <main className="sm:mt-6 mt-14">
      <section className="flex text-gray-200 flex-col items-center justify-center" style={{ minHeight: "40dvh" }}>
        <h1 className="text-4xl font-arcane mb-2">Get in Touch</h1>
        <p className="sm:max-w-xl max-w-xs text-sm sm:text-base">
          In the world of gaming, where every pixel tells a story, Arcane Fusion stands as a beacon of innovation and creativity. Join us on this epic quest, where games
          aren&apos;t just played; they&apos;re experienced, and where the fusion of the arcane and the digital creates something truly magical. Let the gaming adventure begin - with Arcane Fusion, where imagination meets technology in a spellbinding dance.
        </p>
      </section>
      <Form />
      <div className="pb-8"></div>
    </main>
  );
}
