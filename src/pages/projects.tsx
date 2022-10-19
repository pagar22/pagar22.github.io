import type { NextPage } from "next";
import { ProjectList } from "../components/features/ProjectList";
import { BaseLayout } from "../layouts/BaseLayout";

const Projects: NextPage = () => {
  return (
    <BaseLayout>
      <ProjectList />
    </BaseLayout>
  );
};

export default Projects;
