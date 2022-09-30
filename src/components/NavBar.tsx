import { NavLink, NavLinkProps } from "./theme/NavLink";

interface NavBarProps {
  items?: NavLinkProps[];
}

export const NavBar = ({ items }: NavBarProps) => {
  return (
    <div className="navbar">
      {items?.map((item) => {
        return <NavLink link={item.link}>{item.children}</NavLink>;
      })}
    </div>
  );
};
