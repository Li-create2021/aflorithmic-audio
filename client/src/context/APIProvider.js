import { useMutation } from "react-query";
import axios from "axios";
import { createContext, useState } from "react";

export const ApiContext = createContext();

const APIProvider = (props) => {
  // create a state to hold the url and include it in the context value
  const [getUrl, setGetUrl] = useState(false);

  const createNewAudio = useMutation(
    (audioConfig) => {
      return axios.post("/api/audio", audioConfig); // audioConfig = req.body of the POST req
    },
    {
      onSuccess: () => console.log("success!"),
    }
  );

  return (
    <ApiContext.Provider value={{ createNewAudio, getUrl, setGetUrl }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default APIProvider;
