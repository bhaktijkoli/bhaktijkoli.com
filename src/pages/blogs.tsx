import React from "react";
import Header from "../components/Common/Header/Header";
import Layout from "../components/Layout/Layout/Layout";
import type { NextPage } from "next";

const Blogs: NextPage = () => {
  return (
    <Layout>
      <React.Fragment>
        <Header title="Blogs" />
        <div className="container" style={{ marginTop: 100 }}>
          <h1>Comming Soon</h1>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default Blogs;
