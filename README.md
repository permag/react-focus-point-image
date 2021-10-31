# react-focus-point-image
Focus is set on one object in an image. When the aspect ratio of the image container changes responsively, the focused part of the image will always be visible.

## Demo
See working [Demo here](https://permag.github.io/react-focus-point-image)

## Install
### yarn
`yarn add react-focus-point-image`

### npm
`npm i react-focus-point-image`

## Example usage
```
<FocusPointImage
  src="parrot.jpg"
  alt="A parrot"
  focusPoint={[61, 20]}
  animate
/>
```

## Options
| Property   | Description                              |
| ---------- | ---------------------------------------- |
| src        | {string} `src` of the image              |
| alt?       | {string} `alt` text                      |
| focusPoint | {number[]} [x, y] 0-100                  |
| animate?   | {boolean} when `true` image will fade in |
| minWidth?  | {number}                                 |
| minHeight? | {number}                                 |
| maxWidth?  | {number}                                 |
| maxHeight? | {number}                                 |
