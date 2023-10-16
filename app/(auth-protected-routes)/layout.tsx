"use client";

import { redirect } from "next/navigation";
import { siteConfig } from "@/config/site";
import useAuth from "@/hooks/useAuth";

export default function AuthProtectedRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();

  if (!user) {
    return redirect(siteConfig.authMenu.login.href);
  }

  return <section className="py-8">{user ? children : null}</section>;
}
