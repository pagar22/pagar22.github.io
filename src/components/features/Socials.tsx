const SocialsItems = [
  {
    title: "github",
    href: "https://www.github.com/pagar22",
  },
  {
    title: "instagram",
    href: "https://www.instagram.com/pagar_22",
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/pagar22",
  },
  {
    title: "mail",
    href: "mailto: aaryanpagar@hotmail.com",
  },
];

export const Socials = () => {
  return (
    <div className="flex flex-row items-end mt-16 mb-8 p-2">
      {SocialsItems.map((item, index) => {
        return (
          <a key={index} href={item.href} target="_blank" rel="noreferrer">
            <img
              className="w-8 mx-4"
              src={`/socials/${item.title}.svg`}
              alt={item.title}
            />
          </a>
        );
      })}
    </div>
  );
};
