"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Logout from "./Logout";

const NavbarLogged = () => {
  const {status} = useSession();
  if (status !== "authenticated") {
    return null;
  }

  return (
    <div className="bg-black">
      <div className="container mx-auto flex items-center text-white px-4 py-2 justify-between">
        <p>¡Hola, Delakalleskateshop!</p>
        <div className="flex gap-4">
          <Link href="/dashboard/products">
            <Image src="/dashboard.png" alt="Panel de administración" width={20} height={20} />          
          </Link>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default NavbarLogged;
