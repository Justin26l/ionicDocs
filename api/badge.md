# ion-badge

URL: https://ionicframework.com/docs/api/badge

Version: v8
[shadow](/docs/reference/glossary#shadow)Badges are inline block elements that usually appear near another element. Typically they contain a number or other characters. They can be used as a notification that there are additional items associated with an element and indicate how many items there are. Badges are hidden if no content is passed in.

## Basic Usage

## Badges in Tab Buttons

Badges can be added inside a tab button, often used to indicate notifications or highlight additional items associated with the element.

info
Empty badges are only available for `md` mode.

## Theming

### Colors

### CSS Properties

## Properties

### color

| **Description** | The color to use from your application's color palette. Default options are: `"primary"` , `"secondary"` , `"tertiary"` , `"success"` , `"warning"` , `"danger"` , `"light"` , `"medium"` , and `"dark"` . For more information on colors, see [theming](/docs/theming/basics) . 
| **Attribute** | `color` 
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined` 
| **Default** | `undefined` 

### mode

| **Description** | The mode determines which platform styles to use.

This is a [virtual property](/docs/core-concepts/fundamentals#virtual-properties) that is set once during initialization and will not update if you change its value after the initial render. 
| **Attribute** | `mode` 
| **Type** | `"ios" ｜ "md"` 
| **Default** | `undefined` 

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

- iOS
- MD

| Name | Description 
| `--background` | Background of the badge 
| `--color` | Text color of the badge 
| `--padding-bottom` | Bottom padding of the badge 
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the badge 
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the badge 
| `--padding-top` | Top padding of the badge 

| Name | Description 
| `--background` | Background of the badge 
| `--color` | Text color of the badge 
| `--padding-bottom` | Bottom padding of the badge 
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the badge 
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the badge 
| `--padding-top` | Top padding of the badge 

## Slots

No slots available for this component.