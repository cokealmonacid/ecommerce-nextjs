import "./../styles/globals.css";
import "./../styles/main.css";
import "react-toastify/dist/ReactToastify.css";

import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

import AuthProvider from "@/providers/AuthProvider";
import Sidebar from "@/components/dashboard/Sidebar";
import Back from "@/components/dashboard/Back";
import QueryProvider from "@/providers/QueryProvider";
import { Header } from "@/components/dashboard/Header";

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
            <div className="w-full md:w-5/6 bg-white h-screen p-4 overflow-y-scroll">
              <Header />
              <section className="my-2 py-6 bg-white shadow-lg rounded-md overflow-y-scroll">
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
