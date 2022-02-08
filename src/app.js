require("dotenv").config();
const express = require("express");
const apiaudio = require("apiaudio").default;
const cors = require("cors");

apiaudio.configure({ apiKey: process.env.APIKEY, debug: false });

const app = express();

// Global middlewares
app.use(express.json());
// CORS
app.use(cors("*"));

//Get the audio from the api
app.post("/api/audio", async (req, res) => {
  // sanitizing the inputs
  const {
    scriptText,
    voice,
    speed,
    effect,
    soundTemplate,
    collections,
    genre,
    tempo,
  } = req.body;

  try {
    const script = await apiaudio.Script.create({
      scriptText: scriptText,
      scriptName: "Hello Liana",
      projectName: "Hello Liana",
      moduleName: "Hello Liana",
    });
    console.log(script);

    //Create speech with chosen voice, speed and effect
    const speechRequest = await apiaudio.Speech.create({
      scriptId: script["scriptId"],
      voice: voice,
      speed: speed,
      effect: effect,
      // tag: "uplifting",
    });
    console.log("Response from text-to-speech:", speechRequest);

    const soundParameters = await apiaudio.Sound.parameters({
      scriptId: script["scriptId"],
    });

    console.log("SoundParameters log:", soundParameters);

    // Select from a collection of sound templates and genre
    // const soundList = await apiaudio.Sound.list({
    //   collections: collections,
    //   genre: genre,
    //   tempo: tempo,
    // });
    // console.log("This is the collection of sound templates:", soundList);

    //Master the speech file with good quality and background track
    const mastering = await apiaudio.Mastering.create({
      scriptId: script["scriptId"],
      soundTemplate: soundTemplate,
    });
    console.log("Mastering log:", mastering);
    console.log("soundtemplate log", soundTemplate);

    //Request validation notifications in the console
    res.status(200).send(speechRequest);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error happened!");
  }
});

module.exports = app;
