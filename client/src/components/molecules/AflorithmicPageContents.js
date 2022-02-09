import React from "react";
import FormTemplate from "../templates/form/FormTemplate";
import { Layout } from "antd";

const { Content } = Layout;

const AflorithmicPageContents = () => {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      <FormTemplate />
    </Content>
  );
};

export default AflorithmicPageContents;
