import { NavBar } from "../components/features/NavBar";

interface BaseLayoutProps {
  className?: string;
  children: JSX.Element;
}

export const BaseLayout = ({ className, children }: BaseLayoutProps) => {
  return (
    <div className={`${className} base-layout`}>
      <NavBar />
      {children}
    </div>
  );
};
