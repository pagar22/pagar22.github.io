import { socials } from "../../utils/data/socials";

const SocialListItems = socials;

export const Socials = () => {
  return (
    <div className={"flex flex-row items-end mt-16 mb-8 p-2"}>
      {SocialListItems.map((item, index) => {
        return (
          <a key={index} href={item.href} target={"_blank"} rel={"noreferrer"}>
            <img
              className={"w-8 mx-4"}
              src={`/socials/${item.title}.svg`}
              alt={item.title}
            />
          </a>
        );
      })}
    </div>
  );
};
