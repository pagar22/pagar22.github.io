import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NavLinkProps, NavLink } from "../theme/NavLink";

const NavBarItems: NavLinkProps[] = [
  {
    link: "/about",
    children: "About",
  },
  {
    link: "/resume",
    children: "Resume",
  },
  {
    link: "/",
    children: <img width={"60px"} src="/ramen.png" alt="index" />,
  },
  {
    link: "/read",
    children: "Read",
  },
  {
    link: "/jokes",
    children: "Jokes",
  },
];

const populateNavigationItems = (items: NavLinkProps[], className?: string) => {
  const { pathname } = useRouter();
  return items?.map((item, index) => {
    const ramenSpecial = pathname === item.link && item.link === "/";
    return (
      <NavLink
        className={`${className} ${
          pathname === item.link ? `navbar-selected` : ``
        }`}
        key={index}
        link={item.link}
        openInNewTab={item.openInNewTab}
      >
        {ramenSpecial ? (
          <img width={"70px"} src="/ramen.gif" alt="index" />
        ) : (
          item.children
        )}
      </NavLink>
    );
  });
};

export const NavBar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [burgerIcon, setBurgerIcon] = useState("/burger.svg");
  useEffect(() => {
    setBurgerIcon(burgerOpen ? "/close.svg" : "/burger.svg");
  }, [burgerOpen]);
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <>
      <div className={"navbar-container"}>
        <div className={"navbar"}>
          {populateNavigationItems(NavBarItems, "text-lg")}
        </div>
        <div
          className={`burger ${burgerOpen ? `` : `p-1`}`}
          onClick={toggleBurger}
        >
          <img className="w-8" src={burgerIcon} alt={"burger"} />
        </div>
      </div>
      {burgerOpen && (
        <div className={"modal-container"} onClick={toggleBurger}>
          <div className={"modal"}>
            {populateNavigationItems(NavBarItems, "text-black text-3xl py-6")}
          </div>
        </div>
      )}
    </>
  );
};
