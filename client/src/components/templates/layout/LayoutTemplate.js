import React from "react";
import { useContext } from "react";
import FormTemplate from "../form/FormTemplate";
import { Layout, Menu } from "antd";
import { Typography } from "antd";

import { LayoutContext } from "../../../context/LayoutProvider";
import "./LayoutStyles.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Header, Sider, Content } = Layout;

const LayoutTemplate = () => {
  const { collapsed, setCollapsed } = useContext(LayoutContext);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["Home"]}>
          <Menu.Item key="Home" icon={<UserOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}></Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}></Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggleSidebar,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Title level={3}>
            Self-Service Audio Ad Builder from Aflorithmic
          </Title>
          <Title level={5}>1. Write Your Ad</Title>
          <Title level={5}>2. Select Your Speaker & Add Music</Title>
          <FormTemplate />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutTemplate;
