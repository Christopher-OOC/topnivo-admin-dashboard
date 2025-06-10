import { clsx } from "clsx";

import { Link, useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import FlexBox from "../core/FlexBox";
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

export default function NavLinksDesktop() {
  const { currentPage, setCurrentPage } = useMenu();
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const isLog = location.pathname === '/';
  const NAV_LINKS = [
    { href: "home", text: "Home" },
    { href: "about-us", text: "About Us" },
    { href: "shop", text: "Shop" },
    { href: "collection", text: "Collection" },
    { href: "page", text: "Page" },
  ];

  return (
    <nav className="hidden flex-1 justify-start gap-10 capitalize text-black md:flex md:text-sm lg:text-base">
      {NAV_LINKS.map((link) => {
        const linkClass = clsx(
          "after:bg-primary after:transition-width relative py-4 after:absolute after:bottom-0 after:left-0 after:hidden after:h-1 after:rounded after:duration-300 hover:after:w-full md:after:inline-block",
          {
            "after:w-0": currentPage !== link.href,
            "after:w-full": currentPage === link.href,
          }
        );

        return link.href === "collection" || link.href === "about-us" ? (
          <Link
            // onClick={setCurrentPage.bind(null, link.href)}
            className={linkClass}
            key={link.href}
            to={`/${link.href}`}
            onClick={() => {
              setCurrentPage.bind(null, link.href);
              window.scrollTo(0, 0);
            }}
          >
            {link.text}
          </Link>
        ) : isHomePage ? (
          <AnchorLink
            // className={linkClass}
            className={linkClass}
            key={link.href}
            href={`#${link.href}`}
            offset={100}
            onClick={setCurrentPage.bind(null, link.href)}
          >
            {link.text}
          </AnchorLink>
        ) : (
          <Link
            // onClick={setCurrentPage.bind(null, link.href)}
            className={linkClass}
            onClick={() => {
              setCurrentPage.bind(null, link.href);
              window.scrollTo(0, 0);
            }}
            key={link.href}
            to={`/#${link.href}`}
          >
            {link.text}
          </Link>
        );
      })}
      <FlexBox className="ml-16 mt-4">
        <Link to="/">
          <User className="w-5 h-5 text-gray-700 cursor-pointer hover:text-yellow-500" />
        </Link>
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
      </FlexBox>
    </nav>
  );
}
