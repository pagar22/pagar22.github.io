export interface NavLinkProps {
  className?: string;
  children: JSX.Element | string;
  link: string;
}

export const NavLink = ({ className, children, link }: NavLinkProps) => {
  return (
    <a
      className={`${className} p-1 hover:italic hover:font-semibold hover-text-gradient`}
      href={link}
    >
      {children}
    </a>
  );
};
