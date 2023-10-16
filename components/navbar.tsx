"use client";

import { Logo } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import useAuth from "@/hooks/useAuth";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import NavbarAvatar from "./NavbarAvatar";

export const Navbar = () => {
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ATLAS TODAY</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-extrabold"
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex">
          <ThemeSwitch />
        </NavbarItem>

        {/* <NavbarItem className="hidden sm:flex">
          <NavbarAvatar />
        </NavbarItem> */}

        {user && (
          <NavbarItem className="hidden sm:flex">
            <NavbarAvatar />
          </NavbarItem>
        )}

        {!user && (
          <NavbarItem className="hidden md:flex">
            <Button
              as={NextLink}
              color="secondary"
              className="text-sm font-normal"
              href={siteConfig.authMenu.login.href}
            >
              Login
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />

        {user && (
          <NavbarItem>
            <NavbarAvatar />
          </NavbarItem>
        )}

        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => {
            // const isActive = pathname.startsWith(item.href);
            const isActive = pathname === item.href;

            return (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  as={NextLink}
                  color={isActive ? "primary" : "foreground"}
                  className="hover:text-primary-500"
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          })}
          {!user && (
            <NavbarMenuItem>
              <Link
                as={NextLink}
                color={"primary"}
                className="hover:text-primary-500"
                href={siteConfig.authMenu.login.href}
                size="lg"
              >
                {siteConfig.authMenu.login.label}
              </Link>
            </NavbarMenuItem>
          )}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
