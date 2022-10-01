export interface NavLinkProps {
  children: JSX.Element | string;
  link: string;
}

export const NavLink = ({ children, link }: NavLinkProps) => {
  return (
    <a
      className={
        "nav-text text-lg hover:italic hover:font-semibold hover-text-gradient"
      }
      href={link}
    >
      {children}
    </a>
  );
};
