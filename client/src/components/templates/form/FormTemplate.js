import React, { useContext } from "react";
import { Form, Input, Button, Select } from "antd";
import { ApiContext } from "../../../context/APIProvider";
import AppModal from "../../organisms/Modal";

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

    //Function to concatenate the 3 text input values
    const scriptText = `${values.introduction} ${values.mainCopy} ${values.cta}`;

    //Audio file data
    const audioData = {
      scriptText: scriptText,
      voice: values.speaker,
      soundTemplate: values.soundTemplate,
    };
    console.log("Audio data:", audioData);

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
          placeholder="A good intro is important to catch attention"
        />
      </Form.Item>
      <Form.Item label="Main Copy" name="mainCopy">
        <TextArea
          rows={4}
          placeholder="Explain your amazing product in less than 50 words"
        />
      </Form.Item>
      <Form.Item label="Call to action" name="cta">
        <TextArea rows={2} placeholder="Say goodbye with a Call To Action" />
      </Form.Item>
      <Form.Item label="Speaker" name="speaker">
        <Select onChange={voiceHandleChange}>
          <Select.Option value="Mia">Mia</Select.Option>
          <Select.Option value="Libby">Libby</Select.Option>
          <Select.Option value="Guy">Guy</Select.Option>
          <Select.Option value="Kent">Kent</Select.Option>
          <Select.Option value="Clara">Clara</Select.Option>
          <Select.Option value="Liam">Liam</Select.Option>
          <Select.Option value="Aria">Aria</Select.Option>
          <Select.Option value="Colin">Colin</Select.Option>
          <Select.Option value="Leah">Leah</Select.Option>
          <Select.Option value="Adri">Adri</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Sound Design" name="soundTemplate">
        <Select onChange={SoundDesignHandleChange}>
          <Select.Option value="copacabana">Copacabana</Select.Option>
          <Select.Option value="curtaincall">
            Curtaincall (An energetic jingle with an easy going, melodic tune)
          </Select.Option>
          <Select.Option value="driftingoff">
            Drifting off (A relaxing guitar player on a sunny coast. Crashing
            waves in the background.)
          </Select.Option>
          <Select.Option value="fairytale">
            Fairy Tale (acoustic music for kid's stories)
          </Select.Option>
          <Select.Option value="citynights">
            City Nights (Downtempo with bass elements, takes you out to a New
            York city night)
          </Select.Option>
          <Select.Option value="sunnyday">
            Sunny Day (Acoustic with mid tempo)
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            alignItems: "center",
            margin: "auto",
            display: "flex",
            justifyContents: "center",
          }}
        >
          CLICK TO PRODUCE YOUR AUDIO
        </Button>
        <Form.Item>
          <AppModal />
        </Form.Item>
      </Form.Item>
    </Form>
  );
};

export default FormTemplate;
