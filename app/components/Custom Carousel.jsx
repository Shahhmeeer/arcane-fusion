"use client";

import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
export default function CustomCarousel() {
  const technologies = [
    "/1.unity.png",
    "/2. unreal engine.png",
    "/3.blender.png",
    "/4. 3ds max.png",
    "/4. maya.png",
    "/5.vray.png",
    "/6.zbrush.png",
    "/7.PS.png",
    "/8.ai.png",
    "/9.Subtsance painter.png",
    "/10 after effect.png",
    "/11.primere.png",
    "/12.spine.png",
  ];
  return (
    <Carousel
      className="h-full -ml-4"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="relative h-full w-full">
        {technologies.map((technology, index) => (
          <CarouselItem key={index} className="sm:basis-1/5 md:basis-1/6 basis-1/3">
            <Image src={technology} alt="Technologies" width={150} height={150}></Image>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
