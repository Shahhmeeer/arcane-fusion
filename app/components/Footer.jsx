import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 text-white max-w-7xl mx-auto py-4">
      <div className="flex justify-between items-center mx-4 sm:mx-0">
        <p className="text-xs sm:text-base">Copyright © {new Date().getFullYear()} - Arcane Fusion</p>
        <div className="flex space-x-4">
          <Link href={"https://www.linkedin.com/company/arcane-fusion/"} target="__blank">
            <Image alt="Arcane fusion's LinkedIn" src={"/linkedin.svg"} width={30} height={30}></Image>
          </Link>
          <Link href={"#"}>
            <Image alt="Arcane fusion's Facebook" src={"/facebook.svg"} width={30} height={30}></Image>
          </Link>
        </div>
      </div>
    </footer>
  );
}
