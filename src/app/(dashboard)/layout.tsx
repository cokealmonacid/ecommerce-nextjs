import "./../styles/globals.css";
import "./../styles/main.css";
import "react-toastify/dist/ReactToastify.css";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer } from "react-toastify";

import AuthProvider from "@/providers/AuthProvider";
import Sidebar from "@/components/dashboard/Sidebar";
import Logout from "@/components/dashboard/Logout";
import Back from "@/components/dashboard/Back";
import QueryProvider from "@/providers/QueryProvider";

export const metadata: Metadata = {
  title: "Panel de Administración | Delakalle Skateshop 🛹",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="es">
      <body>
        <QueryProvider>
          <AuthProvider>
          <div className="w-full h-full flex">
            <Sidebar />
            <div className="w-5/6 bg-white h-screen p-4">
              <div className="bg-[#0b0e18] flex gap-4 justify-end p-4 rounded-md shadow-lg">
                <Link href="/">
                  <Image src="/web.png" alt="Panel de administración" width={20} height={20} />          
                </Link>
                <Logout />
              </div>
              <section className="my-2 py-6 bg-white shadow-lg rounded-md">
              <Back />
              { children }
              </section>
            </div>
          </div>
          <ToastContainer position="bottom-right" theme='dark' autoClose={3000}/>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
