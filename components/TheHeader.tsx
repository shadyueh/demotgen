import Link from "next/link";
import Image from "next/image";
import { Navbar, DarkThemeToggle } from "flowbite-react";

export default function TheHeader() {
  return (
    <header>
      <Navbar fluid className="border-b border-gray-200">
        <Navbar.Brand as={Link} href="/">
          <Image src="/favicon.ico" width={36} height={36} className="mr-3" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-500 dark:text-white">FunTools</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <DarkThemeToggle />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}