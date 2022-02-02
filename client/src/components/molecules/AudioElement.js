import { useRef } from "react";
import styled from "styled-components";

const StyledMain = styled.div`
  border: 2px solid rgb(7, 170, 7);
  border-radius: 5px;
  padding: 10px;
`;

const AudioElement = () => {
  const inputEl = useRef(null);
  // const onButtonClick = () => {
  //   inputEl.current.focus();
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
          src="https://v1.api.audio/url/4c6a7/hello.mp3" // consume the context and use the state that holds the url here
          controls
          autoPlay
        />
        <button>Download / Copy URL</button>
      </div>
    </StyledMain>
  );
};

export default AudioElement;
