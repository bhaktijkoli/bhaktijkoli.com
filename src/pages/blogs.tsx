import React from "react";
import Header from "../components/Common/Header/Header";
import Layout from "../components/Layout/Layout/Layout";
import type { NextPage } from "next";
import BlogList from "components/BlogList/BlogList";

const Blogs: NextPage = () => {
  return (
    <Layout>
      <React.Fragment>
        <Header title="Blogs" />
        <BlogList />
      </React.Fragment>
    </Layout>
  );
};

export default Blogs;
