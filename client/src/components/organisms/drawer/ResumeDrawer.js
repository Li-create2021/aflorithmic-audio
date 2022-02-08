import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, List, Avatar, Divider, Col, Row, Button } from "antd";
import "./DrawerStyle.css";

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const ResumeDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <List
        dataSource={[
          {
            name: "Liana van Zyl",
          },
        ]}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <Button type="primary" onClick={showDrawer}>
                View Profile
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src="/././liana.jpeg" />}
              title={<Link to="https://ant.design/index-cn">{item.name}</Link>}
              description="Frontend Developer"
            />
          </List.Item>
        )}
      />
      <Drawer
        width={500}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p
          className="site-description-item-profile-p"
          style={{ marginBottom: 24 }}
        >
          User Profile
        </p>
        <p className="site-description-item-profile-p">Personal</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Full Name" content="Liana van Zyl" />
          </Col>
          <Col span={12}>
            <DescriptionItem
              title="Email"
              content="lianavanzyl.webdev@gmail.com"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Current City" content="Barcelona, Spain" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Birth Country" content="South Africa🇿🇦" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Birthday" content="March 2" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Website" content="website name" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Message"
              content="Our deepest fear is not that we are inadequate. Our deepest fear is that we're powerful beyond measure. It is our light, not our darkness, that most frighten us."
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Company</p>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Position" content="Frontend Developer" />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Responsibilities" content="Coding" />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <DescriptionItem title="Company" content="Aflorithmic" />
          </Col>
          {/* <Col span={12}>
              <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
            </Col> */}
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Skills"
              content="Javascript, ReactJS, CSS, HTML, Ant Design, Typescript, GraphQL, NodeJS, Express, MySQL, MongoDB"
            />
          </Col>
        </Row>
        <Divider />
        <p className="site-description-item-profile-p">Contacts</p>
        <Row>
          <Col span={12}>
            <DescriptionItem
              title="Email"
              content="lianavanzyl.webdev@gmail.com"
            />
          </Col>
          <Col span={12}>
            <DescriptionItem title="Mobile" content="+34 645 664 687" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <DescriptionItem
              title="Github"
              content={<Link to="https://github.com/Li-create2021"></Link>}
            />
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default ResumeDrawer;
