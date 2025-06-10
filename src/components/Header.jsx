import { Bars3Icon } from "@heroicons/react/24/solid";
import Container from '../core/Container';
import React from 'react';
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { useMenu } from "../hooks/useMenu";
import NavLinksDesktop from "./NavDesktop";
import NavLinksMobile from "./NavMobile";

export default function Header() {
  const { openMenu } = useMenu();

  return (
    <React.Fragment>
      <header className="sticky top-0 left-0 z-10 w-full bg-primary px-10 py-8 lg:py-4">
        <Container>
          <div className="flex items-center justify-between">
            {/* <Logo /> */}
            <h1>LOGO</h1>
            {/* Show desktop nav only on large screens */}
            <div className="hidden lg:flex md:hidden">
              <NavLinksDesktop />
            </div>
            {/* Show hamburger menu on mobile & tablets */}
            <Bars3BottomRightIcon
              onClick={openMenu}
              className="relative z-20 ml-auto size-8 cursor-pointer text-black md:flex lg:hidden"
            />
          </div>
        </Container>
      </header>
      <NavLinksMobile />
    </React.Fragment>
  );
}
