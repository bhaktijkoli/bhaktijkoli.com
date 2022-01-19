import * as React from "react";
import Header from "../components/Common/Header/Header";
import Layout from "../components/Layout/Layout/Layout";

const Projects: React.FC = () => {
  return (
    <Layout>
      <React.Fragment>
        <Header title="My Projects" />
      </React.Fragment>
    </Layout>
  );
};

export default Projects;
