export interface NavLinkProps {
  className?: string;
  children: JSX.Element | string;
  link: string;
  openInNewTab?: boolean;
}

export const NavLink = ({
  className,
  children,
  link,
  openInNewTab = false,
}: NavLinkProps) => {
  return (
    <a
      className={`${className} p-1 hover:italic hover:font-semibold hover-text-gradient`}
      href={link}
      target={openInNewTab ? "_blank" : ""}
    >
      {children}
    </a>
  );
};
