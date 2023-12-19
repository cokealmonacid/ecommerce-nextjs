"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import Logout from "./Logout";
import { AdminPanel } from "@/utils/icons";

const NavbarLogged = () => {
  const {status} = useSession();
  if (status !== "authenticated") {
    return null;
  }

  return (
    <div className="bg-slate-900">
      <div className="container mx-auto flex items-center text-white px-4 py-2 justify-between">
        <p>¡Hola, Delakalleskateshop!</p>
        <div className="flex gap-4">
          <Link href="/dashboard/products"><AdminPanel /></Link>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default NavbarLogged;
