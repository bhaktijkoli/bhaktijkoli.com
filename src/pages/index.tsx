import React from "react";
import type { NextPage } from "next";
import { Hero, Services } from "../components/Home";
import Layout from "../components/Layout/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <React.Fragment>
        <Hero />
        <Services />
      </React.Fragment>
    </Layout>
  );
};

export default Home;
