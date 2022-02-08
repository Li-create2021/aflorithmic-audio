import React from "react";
import { Modal, Button } from "antd";
import AudioElement from "../molecules/AudioElement";

const AppModal = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  //   const [modalText, setModalText] = React.useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{
          alignItems: "center",
          margin: "auto",
          display: "flex",
          justifyContents: "center",
          backgroundColor: "rgb(58,215,96)",
          hover: "rgb(60,216,97)",
        }}
      >
        LISTEN TO YOUR AUDIO
      </Button>
      <Modal
        title="🥳 Success - Your Ad is ready
        Beautiful, you are now ready for prime time!"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <AudioElement />
      </Modal>
    </>
  );
};

export default AppModal;
