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
    children: <img width={"40px"} src="/ramen.ico" alt="index" />,
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

export const NavBar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [burgerIcon, setBurgerIcon] = useState("/burger.svg");
  useEffect(() => {
    setBurgerIcon(burgerOpen ? "/close.svg" : "/burger.svg");
  }, [burgerOpen]);

  const populateNavigationItems = (
    items: NavLinkProps[],
    className?: string
  ) => {
    return items?.map((item, index) => {
      return (
        <NavLink className={className} key={index} link={item.link}>
          {item.children}
        </NavLink>
      );
    });
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          {populateNavigationItems(NavBarItems, "text-lg")}
        </div>
        <div
          className={`burger ${burgerOpen ? `` : `p-1`}`}
          onClick={() => setBurgerOpen(!burgerOpen)}
        >
          <img className="w-8" src={burgerIcon} alt="burger" />
        </div>
      </div>
      {burgerOpen && (
        <div className={"modal-container"}>
          <div className={"modal"}>
            {populateNavigationItems(NavBarItems, "text-black text-3xl py-6")}
          </div>
        </div>
      )}
    </>
  );
};
