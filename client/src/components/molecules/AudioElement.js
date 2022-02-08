import { useRef, useContext } from "react";
import { ApiContext } from "../../context/APIProvider";
import styled from "styled-components";

const StyledMain = styled.div`
  border: 2px solid rgb(7, 170, 7);
  border-radius: 5px;
  padding: 10px;
`;

const AudioElement = () => {
  const apiContext = useContext(ApiContext);

  const inputEl = useRef(null);

  // const handlePlay = () => {
  //   inputEl.current.play();
  // };

  // const handlePause = () => {
  //   inputEl.current.pause();
  // };

  return (
    <StyledMain>
      <h1>🥳 Success - Your Ad is ready</h1>
      <p>Beautiful, you are now ready for prime time!</p>
      <div>
        <audio
          input={inputEl.toString()}
          ref={inputEl}
          type="text"
          src={apiContext.getUrl}
          controls
        />
        {/* <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button> */}
        <button>Download / Copy URL</button>
      </div>
    </StyledMain>
  );
};

export default AudioElement;
