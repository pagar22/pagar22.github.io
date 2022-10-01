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
  return (
    <div className="navbar">
      {NavBarItems?.map((item) => {
        return <NavLink link={item.link}>{item.children}</NavLink>;
      })}
    </div>
  );
};
