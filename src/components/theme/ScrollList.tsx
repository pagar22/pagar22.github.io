interface ScrollListProps {
  title: String;
  children: JSX.Element | JSX.Element[];
}

export const ScrollList = ({ title, children }: ScrollListProps) => {
  return (
    <div className="scroll-list-container">
      <h1 className="text-2xl my-4">{title}</h1>
      <div className="scroll-list">{children}</div>
    </div>
  );
};
