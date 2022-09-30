import { NavLinkProps } from "../src/components/theme/NavLink";

export const NavBarItems: NavLinkProps[] = [
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
    children: <img className="border-2 border-blue-300" src="/ramen.ico" />,
  },
  {
    link: "/read",
    children: "Read",
  },
  {
    link: "/joke",
    children: "Joke",
  },
];
