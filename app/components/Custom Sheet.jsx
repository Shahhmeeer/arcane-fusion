import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function CustomSheet() {
  const navlinks = ["Home", "About Us", "Contact Us"];
  const links = ["/", "about", "contact"];
  return (
    <Sheet className="bg-black">
      <SheetTrigger>
        <Image src={"/hamburger.svg"} alt="hamburger icon" width={30} height={40}></Image>
      </SheetTrigger>
      <SheetContent style={{ backgroundColor: "#010102", color: "white" }}>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <nav>
            <ul className="flex flex-col items-center justify-evenly space-y-8">
              {navlinks.map((navlink, index) => {
                return (
                  <li key={index}>
                    <Link href={links[index]} key={index}>
                      {navlink}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
