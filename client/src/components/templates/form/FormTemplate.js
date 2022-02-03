import React, { useContext } from "react";
import { Form, Input, Button, Select } from "antd";
import AudioElement from "../../molecules/AudioElement";
import { ApiContext } from "../../../context/APIProvider";

const { TextArea } = Input;

const FormTemplate = () => {
  //All data is stored in a context to be accessable globally
  const apiContext = useContext(ApiContext);

  //Event handler for selecting the speaker/voice
  function voiceHandleChange(value) {
    console.log(`selected ${value}`);
  }

  //Event handler for selecting sound template
  function SoundDesignHandleChange(value) {
    console.log(`selected ${value}`);
  }

  // on form submit, execute this handler to get the audio
  const onSubmitHandler = async (values) => {
    // e.preventDefault();

    const scriptText = (
      values.introduction +
      values.mainCopy +
      values.cta
    ).toUpperCase();

    // let script = await apiaudio.Script.create({ scriptText: scriptText });
    // console.log(script);

    const audioData = {
      scriptText: scriptText,
      voice: values.speaker,
      soundDesign: values.soundTemplate,
    };
    console.log(audioData);

    //execute post request
    const audio = await apiContext.createNewAudio.mutateAsync(audioData);

    console.log(audio.data.default.url);

    apiContext.setGetUrl(audio.data.default.url);
  };

  return (
    <Form
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 25,
      }}
      layout="horizontal"
      onFinish={onSubmitHandler}
    >
      <Form.Item label="Introduction" name="introduction">
        <TextArea
          rows={2}
          placeholder="Write a sweet but short intro for your audio"
        />
      </Form.Item>
      <Form.Item label="Main Copy" name="mainCopy">
        <TextArea
          rows={4}
          placeholder="Explain your product in less than 50 words"
        />
      </Form.Item>
      <Form.Item label="Call to action" name="cta">
        <TextArea rows={2} placeholder="Say goodbye with a CTA" />
      </Form.Item>
      <Form.Item label="Speaker" name="speaker">
        <Select onChange={voiceHandleChange}>
          <Select.Option value="Mia">Mia</Select.Option>
          <Select.Option value="Libby">Libby</Select.Option>
          <Select.Option value="Guy">Guy</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Sound Design" name="soundTemplate">
        <Select onChange={SoundDesignHandleChange}>
          <Select.Option value="Newhorizons">
            New Horizons(uptempo electronic tunes)
          </Select.Option>
          <Select.Option value="Openup">
            Open Up (emotional acoustic piano){" "}
          </Select.Option>
          <Select.Option value="Fairytale">
            Fairy Tale (acoustic music for kid's stories)
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <AudioElement />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          PRODUCE & PREVIEW AUDIO
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormTemplate;
