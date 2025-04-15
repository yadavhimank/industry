import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-white  justify-between md:px-10 px-5">
        <img src="/Logo-Pabrica.png" className="w-40"></img>
        <ul className="flex gap-10 mt-3 text-[#014152]">
          <Link href={"/"}> Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/contact"}>Contact</Link>
        </ul>
        <div className=" mt-3 hidden md:block">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Header;
