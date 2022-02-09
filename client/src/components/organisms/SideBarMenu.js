import React from "react";
import { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { Layout, Menu, Avatar } from "antd";
import { LayoutContext } from "../../context/LayoutProvider";
import "../templates/layout/LayoutStyles.css";
import {
  UserOutlined,
  MailOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBarMenu = () => {
  const { collapsed } = useContext(LayoutContext);
  const location = useLocation();

  return (
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
          <Menu.Item key="/projects/ierp">
            <span>IERP.ai</span>
            <Link to="/projects/ierp">Coming Soon 🥳</Link>
          </Menu.Item>
          {/*
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item> */}
        </SubMenu>
        <Menu.Item key="/contact" icon={<MailOutlined />}>
          <span>Contact</span>
          <Link to="/contact"></Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBarMenu;
