# react-focus-point-image
Focus is set on one object in an image. When the aspect ratio of the image container changes resposivly, the focused part of the image will always be visible.

## Demo
See working [Demo here](https://permag.github.io/react-focus-point-image)

## Example
```
<FocusPointImage
  src="parrot.jpg"
  alt="A parrot"
  focusPoint={[61, 20]}
  animate
/>
```

## Options

| Prop       | Description                     |
| ---------- | ------------------------------- |
| src        | {string} `src` of image         |
| alt?       | {string} `alt` text             |
| focusPoint | {number[]} [x, y] 0-100         |
| animate?   | {boolean} when true fade in     |
| minWidth?  | {number}                        |
| minHeight? | {number}                        |
| maxWidth?  | {number}                        |
| maxHeight? | {number}                        |
