import React from "react";
import Header from "../components/Common/Header/Header";
import Layout from "../components/Layout/Layout/Layout";
import type { NextPage } from "next";
import Script from "next/script";

const schedule: NextPage = () => {
  return (
    <Layout>
      <React.Fragment>
        <Header title="Schedule a Meet" />
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/bhaktijkoli/meet?primary_color=5a40ca"
          style={{
            minWidth: 320,
            height: 630,
          }}
        ></div>
        <Script src="https://assets.calendly.com/assets/external/widget.js" />
      </React.Fragment>
    </Layout>
  );
};

export default schedule;
