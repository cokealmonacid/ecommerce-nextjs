"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { dashboardRouter } from "@/utils/config";
import { RoutesProps } from "@/utils/interfaces";

export const SidebarMobile = () => {
  const pathname = usePathname();

  return (
    <div className="w-full bg-[#0b0e18] shadow-lg">
      <main className="py-6">
        {
          dashboardRouter.map((route: RoutesProps) => (
            <Link href={route.url} key={route.title}>
              <div className="py-4 px-8">
                <h1 className={`text-xl text-white ${pathname.includes(route.url) ? "font-bold" : "font-thin"}`}>{route.title}</h1>
              </div>
            </Link>
          ))
        }
      </main>
    </div>
  );
};
