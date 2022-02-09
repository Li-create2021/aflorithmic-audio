import React from "react";
import { Layout } from "antd";
import { AppFooter } from "../molecules/AppFooter";
import SideBarMenu from "../organisms/SideBarMenu";
import AppHeader from "../molecules/AppHeader";
import AboutPageContents from "../molecules/AboutPageContents";

const About = () => {
  return (
    <Layout style={{ background: "#fff" }}>
      <SideBarMenu />
      <Layout>
        <AppHeader />
        <AboutPageContents />
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default About;
