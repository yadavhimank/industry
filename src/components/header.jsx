import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const navLinks = [
    {
      href: "/",
      label: "Home"
    },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex items-center justify-between bg-white md:px-10 px-5 py-3 shadow-sm">
      <Link href="/">
        <Image width={100} height={100} src="/Logo-Pabrica.png" alt="Pabrica Logo" className="w-40" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10 items-center text-[#014152] font-medium">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-[#0191B4] transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="p-2">
            <Menu className="text-[#014152]" />
          </SheetTrigger>
          <SheetContent side="right" className="p-0 w-[250px]">
            <SheetHeader className="text-white">
              <div className="bg-[#1f2a30] h-screen p-5">
                <Image width={100} height={100} src="/Logo-Pabrica.png" alt="Pabrica Logo" className="w-32 mb-8" />
                <nav>
                  <ul className="flex flex-col gap-5">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-white hover:text-gray-300 text-lg transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;