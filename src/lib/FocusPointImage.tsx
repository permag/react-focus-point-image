import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

type ImageProps = {
  src: string;
  $displayImage: boolean;
  $animate: boolean;
  $focusX?: number;
  $focusY?: number;
  $minWidth?: number;
  $minHeight?: number;
  $maxWidth?: number;
  $maxHeight?: number;
};

const Img = styled.img<ImageProps>`
  opacity: ${({ $displayImage }) => ($displayImage ? 1 : 0)};
  transition: ${({ $animate }) => ($animate ? 'opacity ease 0.5s' : 'none')};
  object-fit: cover;
  object-position: ${({ $focusX, $focusY }) =>
    $focusX && $focusY ? `${$focusX}% ${$focusY}%` : "50% 50%"};
  ${({ $minWidth }) => $minWidth && `min-width: ${$minWidth}px`};
  ${({ $minHeight }) => $minHeight && `min-height: ${$minHeight}px`};
  ${({ $maxWidth }) => $maxWidth && `max-width: ${$maxWidth}px`};
  ${({ $maxHeight }) => $maxHeight && `max-height: ${$maxHeight}px`};
  width: 100%;
  height: 100%;
`;

type Props = {
  src: string;
  alt?: string;
  focusPoint?: [number, number];
  animate?: boolean;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
};

const FocusPointImage: React.FunctionComponent<Props> = ({
  src,
  alt,
  focusPoint,
  animate,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
}: Props) => {
  const [didLoad, setDidLoad] = useState<boolean>(false);
  return (
    <Wrapper>
      <Img
        src={src}
        alt={alt}
        onLoad={() => setDidLoad(true)}
        draggable={false}
        $displayImage={didLoad}
        $animate={Boolean(animate)}
        $focusX={focusPoint && focusPoint[0]}
        $focusY={focusPoint && focusPoint[1]}
        $minWidth={minWidth}
        $minHeight={minHeight}
        $maxWidth={maxWidth}
        $maxHeight={maxHeight}
      />
    </Wrapper>
  );
};

export default FocusPointImage;
