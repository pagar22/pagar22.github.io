import { ScrollList } from "../theme/ScrollList";
import { projects } from "../../utils/data/projects";
import { NavLink } from "../theme/NavLink";

export const ProjectList = () => {
  return (
    <ScrollList title={"Projects & Research"}>
      <div className={`projects-container`}>
        {projects.map((item, index) => {
          return (
            <div key={index} className={"project"}>
              <h1 className={"text-2xl text-gradient font-bold"}>
                {item.title}
              </h1>
              <p className={"text-md"}>{item.description}</p>
              <hr className={"w-full mb-4"} />
              <div className={"flex flex-row items-center"}>
                <div className={"flex flex-row flex-wrap"}>
                  {item.technologies.map((tech, index) => {
                    return (
                      <p key={index} className={"tech-item"}>
                        {tech}
                      </p>
                    );
                  })}
                </div>
                <NavLink
                  className={"self-end my-2"}
                  link={item.github}
                  openInNewTab
                >
                  <img
                    className={"w-20"}
                    src={"/socials/github.svg"}
                    alt={"github"}
                  />
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollList>
  );
};
