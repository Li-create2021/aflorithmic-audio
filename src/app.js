require("dotenv").config();
const express = require("express");
const apiaudio = require("apiaudio").default;

apiaudio.configure({ apiKey: process.env.APIKEY, debug: false });

const app = express();

//middleware
app.use(express.json());

//Get the audio from the api
app.get("/api/audio", async (req, res) => {
  // sanitizing the inputs
  const { scriptText, voice } = req.body;

  try {
    const script = await apiaudio.Script.create({
      scriptText: scriptText,
      scriptName: "hello",
      projectName: "hello",
      moduleName: "hello",
    });
    console.log(script);

    //create speech with chosen voice
    const speech = await apiaudio.Speech.create({
      scriptId: script["scriptId"],
      voice: voice,
    });
    console.log(speech);

    //Master the speech file with good quality and background track
    const template = "parisianmorning";
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

    res.status(200).send(speech);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error happened!");
  }
});

module.exports = app;
