import React from "react";
import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { Layout, Menu, Avatar } from "antd";
import FormTemplate from "../form/FormTemplate";
import { LayoutContext } from "../../../context/LayoutProvider";
import "./LayoutStyles.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  MailOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const LayoutTemplate = () => {
  const { collapsed, setCollapsed } = useContext(LayoutContext);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Avatar
          size={40}
          style={{ float: "right", margin: 15 }}
          src="/././user.png"
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
        >
          <Menu.Item key="/" icon={<UserOutlined />}>
            <span>About Liana</span>
            <Link to="/"></Link>
          </Menu.Item>
          <SubMenu
            key="/projects"
            icon={<PlayCircleOutlined />}
            title="Liana's Projects"
          >
            <Menu.Item key="/projects/aflorithmic">
              <span>Aflorithmic</span>
              <Link to="/projects/aflorithmic"></Link>
            </Menu.Item>
            {/* <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item> */}
          </SubMenu>
          <Menu.Item key="/contact" icon={<MailOutlined />}>
            <span>Contact</span>
            <Link to="/contact"></Link>
          </Menu.Item>
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
          <FormTemplate />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutTemplate;
