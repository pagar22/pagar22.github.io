export interface NavLinkProps {
  children: JSX.Element | string;
  link: string;
}

export const NavLink = ({ children, link }: NavLinkProps) => {
  return (
    <a className={"nav-text"} href={link}>
      {children}
    </a>
  );
};
