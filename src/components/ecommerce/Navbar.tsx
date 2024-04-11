"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NavbarProps } from "@/utils/interfaces";
import { useCartStore } from "@/utils/store";
import MenuMobile from "./MenuMobile";
import Menu from "./Menu";
import { Burger, Instagram, ShoppingCart } from "@/utils/icons";
import useFromStore, { useOutsideClick } from "@/utils/customHooks";

const Navbar = ({ categories }: NavbarProps) => {
  const [menuVisibility, setMenuVisibility] = useState({ desktop: false, mobile: false });
  const totalCartItems = useFromStore(useCartStore, state => state.totalItems);
  

  const handleMenuVisibility = (opt: string) => {
    setMenuVisibility({ ...menuVisibility, [opt]: !menuVisibility[opt as keyof typeof menuVisibility] });
  };

  const ref = useOutsideClick(() => {
    if (menuVisibility.desktop) {
      handleMenuVisibility("desktop");
    }

    if (menuVisibility.mobile) {
      handleMenuVisibility("mobile");
    }
  });

  return (
    <>
      <div className="border-b-2 border-b-stone-800 py-2">
        <div className="container mx-auto flex items-center px-4">
          <div className="hidden md:flex flex-row gap-10 lg:gap-20 flex-1">
            <Link href="/"><h1>Home</h1></Link>
            <div className="cursor-pointer" onClick={() => handleMenuVisibility("desktop")}><h1>Productos</h1></div>
          </div>
          <div className="md:hidden flex-1" onClick={() => handleMenuVisibility("mobile")}><Burger /></div>
          <Link href="/">
            <Image src="/logo.png" alt="Delakalle Skateshop" width={80} height={80} />
          </Link>
          <div className="flex flex-row gap-8 flex-1 justify-end">
            <a className="p-4" href="https://www.instagram.com/delakalleskateshop/"><Instagram /></a>
            <Link href="/cart" className="relative p-4">
              <ShoppingCart />
              {
                totalCartItems  && totalCartItems > 0 && <span className="absolute bg-red-500 text-white font-bold rounded-full text-xs flex justify-center items-center py-1 px-2 top-1 right-1">{totalCartItems}</span>
              }
            </Link>
          </div>
        </div>
      </div>
      <div ref={ref}>
        {menuVisibility.desktop && <Menu categories={categories} handleMenu={handleMenuVisibility}  />}
        {menuVisibility.mobile && <MenuMobile categories={categories}  handleMenu={handleMenuVisibility} />}
      </div>
    </>
  );
};

export default Navbar;
