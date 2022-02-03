import { useMutation } from "react-query";
import { createContext, useState } from "react";
import axios from "axios";

//Create the context
export const ApiContext = createContext();

const APIProvider = (props) => {
  //State to hold the url, included in the context value
  const [getUrl, setGetUrl] = useState(
    "https://redirector.dps.live/biobiosantiago/mp3/icecast.audio"
  );

  //audioConfig is the fn that will post data to the backend
  const createNewAudio = useMutation(
    (audioConfig) => {
      return axios.post("http://localhost:8000/api/audio", audioConfig); // audioConfig = req.body of the POST req
    },
    {
      onSuccess: () => console.log("success!"),
    }
  );

  //Provide the context
  return (
    <ApiContext.Provider value={{ createNewAudio, getUrl, setGetUrl }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default APIProvider;
