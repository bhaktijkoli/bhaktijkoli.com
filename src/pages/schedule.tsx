import React from "react";
import Header from "../components/Common/Header/Header";
import Layout from "../components/Layout/Layout/Layout";
import type { NextPage } from "next";

const schedule: NextPage = () => {
  return (
    <Layout>
      <React.Fragment>
        <Header title="Schedule your Appointment" />
        <iframe
          width="100%"
          height="750px"
          src="https://bhaktijkoli-bhaktijkoli.zohobookings.com/portal-embed#/customer/4310576000000027015"
          frameBorder={0}
          allowFullScreen
        >
          {" "}
        </iframe>
      </React.Fragment>
    </Layout>
  );
};

export default schedule;
