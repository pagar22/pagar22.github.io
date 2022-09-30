import { NavBarItems } from "../../utils/NavBarItems";
import { NavBar } from "../components/NavBar";

interface BaseLayoutProps {
  className?: string;
  children: JSX.Element;
}

export const BaseLayout = ({ className, children }: BaseLayoutProps) => {
  return (
    <div className={`${className} base-layout`}>
      <NavBar items={NavBarItems} />
      {children}
    </div>
  );
};
