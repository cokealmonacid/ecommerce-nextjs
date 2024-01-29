"use client";

import { useState } from "react";
import Link from "next/link";

import Logout from "@/components/dashboard/Logout";
import { Menu, Web } from "@/utils/icons";
import { SidebarMobile } from "./SidebarMobile";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <>
      <div className="bg-[#0b0e18] flex gap-4 justify-between md:justify-end p-4 rounded-md shadow-lg">
        <div className="block md:hidden" onClick={handleMenu}>
          <Menu />
        </div>
        <div className="flex gap-4">
          <Link href="/"><Web /></Link>
          <Logout />
        </div>
      </div>
      {showMenu && <div className="w-2/3" onClick={handleMenu}><SidebarMobile /></div>}
    </>
  );
};
