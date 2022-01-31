import React from "react";
import Header from "../components/Common/Header/Header";
import Layout from "../components/Layout/Layout/Layout";
import type { NextPage } from "next";
import ExperienceTimeline from "components/ExperienceTimeline/ExperienceTimeline";

const Experience: NextPage = () => {
  return (
    <Layout>
      <React.Fragment>
        <Header title="Experience" />
        <ExperienceTimeline />
      </React.Fragment>
    </Layout>
  );
};

export default Experience;
