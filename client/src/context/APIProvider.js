import { useQuery } from "react-query";
import axios from "axios";
import { createContext } from "react";

export const ApiContext = createContext();

const APIProvider = (props) => {
  const {
    isFetched: audioIsFetched,
    error: audioError,
    data: audioData,
  } = useQuery(
    // query key: an array with a name and a variable used in the endpoint
    "audio",
    () => axios.get("/api/audio"),
    {
      enabled: true,
    }
  );

  return (
    <ApiContext.Provider value={{ audioIsFetched, audioError, audioData }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default APIProvider;
