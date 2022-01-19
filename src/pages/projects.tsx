import * as React from "react";
import Header from "../components/Common/Header/Header";
import Layout from "../components/Layout/Layout/Layout";
import ProjectsGrid from "../components/ProjectsGrid/ProjectsGrid";

const Projects: React.FC = () => {
  return (
    <Layout>
      <React.Fragment>
        <Header title="My Projects" />
        <ProjectsGrid />
      </React.Fragment>
    </Layout>
  );
};

export default Projects;
