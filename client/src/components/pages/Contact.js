import React from "react";
import { Layout } from "antd";
import { AppFooter } from "../molecules/AppFooter";
import SideBarMenu from "../organisms/SideBarMenu";
import AppHeader from "../molecules/AppHeader";
import ContactPageContents from "../molecules/ContactPageContents";

const Contact = () => {
  return (
    <Layout style={{ background: "#fff" }}>
      <SideBarMenu />
      <Layout>
        <AppHeader />
        <ContactPageContents />
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default Contact;
