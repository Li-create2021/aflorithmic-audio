import React from "react";
import ContactForm from "../templates/form/ContactForm";
import { Layout } from "antd";

const { Content } = Layout;

const ContactPageContents = () => {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      <ContactForm />
    </Content>
  );
};

export default ContactPageContents;
