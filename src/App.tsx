import FocusPointImage from './lib';
// import FocusPointImage from "react-focus-point-image";
import styled from 'styled-components';

const FlexWrapper = styled.div`
  display: flex;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-shrink: 0;
`;

const component = (
  <FocusPointImage
    src="parrot.jpg"
    alt="A parrot"
    focusPoint={[61, 20]}
    animate
  />
);

function App() {
  return (
    <>
      <h2>react-focus-point-image</h2>
      <p>
        Focus is set on the eye of the parrot. Resize the browser window in
        order to see how the image size changes and the focus at the eye is always
        kept.
      </p>
      <FlexWrapper>
        <Item>
          <h3>w: 30vw / h: 40vh</h3>
          <div style={{ width: "30vw", height: "40vh" }}>{component}</div>
        </Item>

        <Item>
          <h3>w: 10vw / h: 40vh</h3>
          <div style={{ width: "10vw", height: "40vh" }}>{component}</div>
        </Item>
      </FlexWrapper>

      <FlexWrapper>
        <Item>
          <h3>w: 40vw / h: 10vh</h3>
          <div style={{ width: "40vw", height: "10vh" }}>{component}</div>
        </Item>

        <Item>
          <h3>w: 60px / h: 50px</h3>
          <div style={{ width: 60, height: 50 }}>{component}</div>
        </Item>
      </FlexWrapper>
    </>
  );
}

export default App;
