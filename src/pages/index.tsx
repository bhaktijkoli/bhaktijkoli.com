import React from "react";
import type { NextPage } from "next";
import { Hero } from "../components/Home";
import Layout from "../components/Layout/Layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default Home;
