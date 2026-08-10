# ion-spinner

URL: https://ionicframework.com/docs/api/spinner

Version: v8
[shadow](/docs/reference/glossary#shadow)The Spinner component provides a variety of animated SVG spinners. Spinners are visual indicators that the app is loading content or performing another process that the user needs to wait on.

## Basic Usage

The default spinner is based on the mode. When the mode is `ios` the spinner will be `"lines"` , and when the mode is `md` the spinner will be `"circular"` . If the `name` property is set, then that spinner will be used instead of the mode specific spinner.

## Theming

### Colors

### Styling

You may use custom CSS to style the spinner. For example, you can resize the spinner by setting the width and height.

### CSS Custom Properties

## Properties

### color

| **Description** | The color to use from your application's color palette. Default options are: `"primary"` , `"secondary"` , `"tertiary"` , `"success"` , `"warning"` , `"danger"` , `"light"` , `"medium"` , and `"dark"` . For more information on colors, see [theming](/docs/theming/basics) . 
| **Attribute** | `color` 
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined` 
| **Default** | `undefined` 

### duration

| **Description** | Duration of the spinner animation in milliseconds. The default varies based on the spinner. 
| **Attribute** | `duration` 
| **Type** | `number ｜ undefined` 
| **Default** | `undefined` 

### name

| **Description** | The name of the SVG spinner to use. If a name is not provided, the platform's default spinner will be used. 
| **Attribute** | `name` 
| **Type** | `"bubbles" ｜ "circles" ｜ "circular" ｜ "crescent" ｜ "dots" ｜ "lines" ｜ "lines-sharp" ｜ "lines-sharp-small" ｜ "lines-small" ｜ undefined` 
| **Default** | `undefined` 

### paused

| **Description** | If `true` , the spinner's animation will be paused. 
| **Attribute** | `paused` 
| **Type** | `boolean` 
| **Default** | `false` 

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

| Name | Description 
| `--color` | Color of the spinner 

## Slots

No slots available for this component.