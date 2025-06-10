import { clsx } from "clsx";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, useLocation } from "react-router-dom";

import {
    ShoppingCart,
    User,
    Heart,
    Instagram,
    Twitter,
    Youtube,
    Phone,
  } from "lucide-react";
import { useMenu } from "../hooks/useMenu";

export default function NavLinksMobile() {
  const { isNavOpen, closeMenu } = useMenu();
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const NAV_LINKS = [
    { href: "home", text: "Home" },
    { href: "about-us", text: "About Us" },
    { href: "shop", text: "Shop" },
    { href: "collection", text: "Collection" },
    { href: "page", text: "Page" },
  ];
  
  
  return (
    <>
      <figure
        className={clsx(
          "fixed inset-0 z-10 backdrop-blur-[3px] backdrop-brightness-75 md:hidden",
          { hidden: !isNavOpen }
        )}
        onClick={closeMenu}
      />
      <nav
        className={clsx(
          "transition-right fixed top-0 bottom-0 z-20 w-2/3 space-y-8 bg-primary px-3 py-6 duration-500 sm:w-1/2 lg:hidden",
          { "-right-[100dvw]": !isNavOpen, "right-0": isNavOpen }
        )}
      >
        <button
          className="absolute top-4 right-4 text-black text-2xl"
          onClick={closeMenu}
        >
          &times;
        </button>
        <ul className="py-10 grid gap-3 text-center capitalize *:px-3 *:py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="text-black text-left">
              {link.href === "contact" || link.href === "about-us" ? (
                <Link
                  to={`/${link.href}`}
                  onClick={() => {
                    closeMenu();
                    window.scrollTo(0, 0);
                  }}
                >
                  {link.text}
                </Link>
              ) : isHomePage ? (
                <AnchorLink
                  href={`#${link.href}`}
                  offset={110}
                  onClick={closeMenu}
                >
                  {link.text}
                </AnchorLink>
              ) : (
                <Link to={`/${link.href}`} onClick={closeMenu}>
                  {link.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="grid gap-3">
        <Link to="/">
          <User className="w-5 h-5 text-gray-700 cursor-pointer hover:text-yellow-500" />
        </Link>
        {/* <User className="w-5 h-5 text-gray-700 cursor-pointer hover:text-yellow-500" /> */}
        <Heart className="w-5 h-5 text-gray-700 cursor-pointer hover:text-yellow-500" />
        <div className="relative">
          <ShoppingCart className="w-5 h-5 text-gray-700 cursor-pointer hover:text-yellow-500" />
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
        <span className="text-gray-700">$0.00</span>

        <div className="hidden md:flex space-x-4 ml-4">
          <Instagram className="w-5 h-5 text-gray-700 cursor-pointer hover:text-yellow-500" />
          <Twitter className="w-5 h-5 text-gray-700 cursor-pointer hover:text-yellow-500" />
          <Youtube className="w-5 h-5 text-gray-700 cursor-pointer hover:text-yellow-500" />
        </div>
          
        </div>
      </nav>
    </>
  );
}
