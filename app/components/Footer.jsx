import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 text-white max-w-7xl mx-auto py-4">
      <div className="flex justify-between items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved by Arcane Fusion</p>
        <div className="flex space-x-4">
          <Link href={"https://www.linkedin.com/company/arcane-fusion/"} target="__blank">
            <Image alt="Arcane fusion's LinkedIn" src={"/linkedin.png"} width={40} height={40}></Image>
          </Link>
          <Image alt="Arcane fusion's Facebook" src={"/facebook.png"} width={40} height={40}></Image>
        </div>
      </div>
    </footer>
  );
}
