import React from "react";
import { useContext } from "react";
import { LayoutContext } from "../../context/LayoutProvider";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
// import "../templates/layout/LayoutStyles.css";

const { Header } = Layout;

const AppHeader = () => {
  const { collapsed, setCollapsed } = useContext(LayoutContext);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Header
      className="site-layout-background"
      style={{ padding: 0, background: "white" }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: toggleSidebar,
      })}
    </Header>
  );
};

export default AppHeader;
