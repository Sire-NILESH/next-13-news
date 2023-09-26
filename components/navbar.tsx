"use client";

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
import { siteConfig } from "@/config/site";
import clsx from "clsx";
import NextLink from "next/link";
import { HeartFilledIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { usePathname } from "next/navigation";

// The category you want to get headlines for. Possible options: business, entertainment, general, health, science, sports, technology. Note: you can't mix this param with the sources param.

export const Navbar = () => {
  const pathname = usePathname();

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
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  // color={isActive ? "primary" : "foreground"}
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
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            // isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            // href={siteConfig.links.sponsor}
            href={"#"}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Subscribe
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
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
                  color={
                    isActive
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  className="hover:text-primary-500"
                  href={item.href}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
