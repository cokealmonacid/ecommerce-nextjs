"use client";

import { signOut } from "next-auth/react";

import { Exit } from "@/utils/icons";

const Logout = () => {
  const handleLogout = () => signOut();

  return (
    <button onClick={handleLogout}>
      <Exit />
    </button>
  );
};

export default Logout;
