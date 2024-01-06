import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Arcane Fusion | Gaming Redefined, Imagination Unleashed",
  description: "Gaming Redefined, Imagination Unleashed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/arcane-fusion-logo.svg" />
      </head>
      <body className={raleway.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
