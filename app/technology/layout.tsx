"use client";

import { redirect } from "next/navigation";
import { siteConfig } from "@/config/site";
import useAuth from "@/hooks/useAuth";

export default function TechnologyNewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();

  if (!user) {
    redirect(siteConfig.authMenu.login.href);
  }

  return <section className="py-8">{user ? children : null}</section>;
}
