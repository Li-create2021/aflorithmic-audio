require("dotenv").config();
const express = require("express");
const apiaudio = require("apiaudio").default;

apiaudio.configure({ apiKey: process.env.APIKEY, debug: false });

const app = express();

//middleware to ensure all routes can read a JSON formatted req body
app.use(express.json());

//Get the audio from the api
app.get("/api/audio", async (req, res) => {
  // sanitizing the inputs
  const { scriptText, voice, speech } = req.body;

  try {
    const script = await apiaudio.Script.create({
      scriptText: scriptText,
      scriptName: "hello",
      projectName: "hello",
      moduleName: "hello",
    });
    console.log(script);

    //Create speech with chosen voice
    const speechRequest = await apiaudio.Speech.create({
      scriptId: script["scriptId"],
      voice: voice,
      speech: speech,
    });
    console.log(speechRequest);

    // //Select from a collection of sound templates **new and not sure if it works
    // const SoundTemplate = await Sound.list({
    //   scriptId: script["scriptID"],
    //   collection: collection["collectionID"],
    // });
    // console.log(SoundTemplate);

    //Sound template selected
    const template = "curtaincall";

    //Master the speech file with good quality and background track
    const mastering = await apiaudio.Mastering.create({
      scriptId: script["scriptId"],
      soundTemplate: template,
    });
    console.log(mastering);

    //get the url's of the audio file generated, download or get req in postman
    const masteringResult = await apiaudio.Mastering.retrieve(
      script["scriptId"],
      {}
    );
    console.log(masteringResult);

    res.status(200).send(speechRequest);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error happened!");
  }
});

module.exports = app;
