import React from "react";
import { Layout } from "antd";
import { AppFooter } from "../molecules/AppFooter";
import SideBarMenu from "../organisms/SideBarMenu";
import AppHeader from "../molecules/AppHeader";
import AflorithmicPageContents from "../molecules/AflorithmicPageContents";

const Aflorithmic = () => {
  return (
    <Layout style={{ background: "#fff" }}>
      <SideBarMenu />
      <Layout>
        <AppHeader />
        <AflorithmicPageContents />
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default Aflorithmic;
