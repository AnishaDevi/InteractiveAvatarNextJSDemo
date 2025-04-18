"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import { GithubIcon, HeyGenLogo } from "./Icons";
import { ThemeSwitch } from "./ThemeSwitch";

export default function NavBar() {
  return (
    <Navbar className="w-full">
      <NavbarBrand>
        <Link isExternal aria-label="HeyGen" href="">
          <HeyGenLogo />
        </Link>
        <div className="bg-gradient-to-br from-sky-300 to-indigo-500 bg-clip-text ml-4">
          <p className="text-xl font-semibold text-transparent">
            HeyGen Interactive Avatar SDK NextJS Demo
          </p>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem className="flex flex-row items-center gap-4">


          <Link
            isExternal
            color="foreground"
            href="https://docs.heygen.com/reference/new-session-copy"
          >
            API Docs
          </Link>
          <Link
            isExternal
            color="foreground"
            href="https://help.heygen.com/en/articles/9182113-interactive-avatar-101-your-ultimate-guide"
          >
            Guide
          </Link>
         
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
