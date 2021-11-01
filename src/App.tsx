import { useState } from "react";
import "./index.css";
import styled from "styled-components";
import FocusPointImage from "./lib";

const Container = styled.div`
  h2, p {
    margin: 8px 8px 20px;
  }
  i {
    font-size: smaller;
  }
`;

const ControlSection = styled.section`
  display: flex;
  align-items: center;
  margin: 8px;
  span {
    font-size: smaller;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const getComponent = (point: [number, number]) => (
  <FocusPointImage
    src="parrot.jpg"
    alt="A parrot"
    focusPoint={point}
    animate
  />
);

function App() {
  const [point, setPoint] = useState<[number, number]>([62, 22.5]);
  const [size, setSize] = useState<[number, number]>([75, 20])
  return (
    <Container>
      <h2>react-focus-point-image demo</h2>
      <p>
        Focus is set on one object in an image. When the aspect ratio of the
        image container changes responsively, the focused part of the image will
        always be visible.
      </p>
      <p>
        <i>
          Initially, focus is set on the eye of the parrot. Play around with the
          container size in order to see how the image changes and how the focus at
          the eye is always kept.
        </i>
      </p>
      <ControlSection>
        Set container width:
        <input
          type="range"
          min="1"
          max="100"
          value={size[0]}
          step="0.5"
          onInput={(event: React.FormEvent<HTMLInputElement>) =>
            setSize([Number(event.currentTarget.value), size[1]])
          }
        />
        <span>{size[0]}</span>
      </ControlSection>
      <ControlSection>
        Set container height:
        <input
          type="range"
          min="1"
          max="100"
          value={size[1]}
          step="0.5"
          onInput={(event: React.FormEvent<HTMLInputElement>) =>
            setSize([size[0], Number(event.currentTarget.value)])
          }
        />
        <span>{size[1]}</span>
      </ControlSection>
      <ControlSection>
        Set focus point x:
        <input
          type="range"
          min="1"
          max="100"
          value={point[0]}
          step="0.5"
          onInput={(event: React.FormEvent<HTMLInputElement>) =>
            setPoint([Number(event.currentTarget.value), point[1]])
          }
        />
        <span>{point[0]}</span>
      </ControlSection>
      <ControlSection>
        Set focus point y:
        <input
          type="range"
          min="1"
          max="100"
          value={point[1]}
          step="0.5"
          onInput={(event: React.FormEvent<HTMLInputElement>) =>
            setPoint([point[0], Number(event.currentTarget.value)])
          }
        />
        <span>{point[1]}</span>
      </ControlSection>

      <ImageWrapper>
        <div style={{ width: `${size[0]}vw`, height: `${size[1]}vh` }}>
          {getComponent(point)}
        </div>
      </ImageWrapper>
    </Container>
  );
}

export default App;
