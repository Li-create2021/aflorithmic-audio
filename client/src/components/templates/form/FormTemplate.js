import React from "react";
import { Form, Input, Button, Select } from "antd";
import AudioElement from "../../molecules/AudioElement";

const { TextArea } = Input;

const FormTemplate = () => {
  // const [componentSize, setComponentSize] = useState("default");

  // const onFormLayoutChange = ({ size }) => {
  //   setComponentSize(size);
  // };

  return (
    <Form
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 25,
      }}
      layout="horizontal"
      // initialValues={{
      //   size: componentSize,
      // }}
      // onValuesChange={onFormLayoutChange}
      // size={componentSize}
    >
      <Form.Item label="Introduction">
        <TextArea
          rows={2}
          placeholder="Write a sweet but short intro for your audio"
        />
      </Form.Item>
      <Form.Item label="Main Copy">
        <TextArea
          rows={4}
          placeholder="Explain your product in less than 50 words"
        />
      </Form.Item>
      <Form.Item label="Call to action">
        <TextArea rows={2} placeholder="Say goodbye with a CTA" />
      </Form.Item>
      <Form.Item label="Speaker">
        <Select>
          <Select.Option value="demo">Mia</Select.Option>
          <Select.Option value="demo">Libby</Select.Option>
          <Select.Option value="demo">Guy</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Sound Design">
        <Select>
          <Select.Option value="demo">
            New Horizons(uptempo electronic tunes)
          </Select.Option>
          <Select.Option value="demo">
            Open Up (emotional acoustic piano){" "}
          </Select.Option>
          <Select.Option value="demo">
            Fairy Tale (acoustic music for kid's stories)
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="">
        <AudioElement />
      </Form.Item>
      <Form.Item label="">
        <Button>PRODUCE & PREVIEW AUDIO</Button>
      </Form.Item>
    </Form>
  );
};

export default FormTemplate;
