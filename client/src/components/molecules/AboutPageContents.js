import React from "react";
import { Layout, Typography } from "antd";
// import Title from "antd/lib/skeleton/Title";
import ResumeDrawer from "../organisms/drawer/ResumeDrawer";

const { Title } = Typography;
const { Content } = Layout;

const AboutPageContents = () => {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      <ResumeDrawer />
      <Title level={3}>Hi👋🏻, I'm Liana. Welcome to my page.</Title>
      <Title level={5}>This page is still under construction🚧</Title>
    </Content>
  );
};

export default AboutPageContents;
