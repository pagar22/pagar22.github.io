import { NavLink, NavLinkProps } from "./theme/NavLink";

interface NavBarProps {
  items?: NavLinkProps[];
}

export const NavBar = ({ items }: NavBarProps) => {
  return (
    <div className="navbar">
      {/* {items?.map((item) => {
        return <NavLink link={item.link}>{item.children}</NavLink>;
      })} */}
      <NavLink link="/about">About</NavLink>
      <NavLink link="/resume">Resume</NavLink>
      <NavLink link="/">
        <img className="w-8" src="ramen.ico" alt="index" />
      </NavLink>
      <NavLink link="/read">Read</NavLink>
      <NavLink link="/joke">Joke</NavLink>
    </div>
  );
};
