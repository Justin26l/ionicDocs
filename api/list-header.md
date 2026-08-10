# ion-list-header

URL: https://ionicframework.com/docs/api/list-header

Version: v8
[shadow](/docs/reference/glossary#shadow)List headers are block elements that are used to describe the contents of a [list](/docs/api/list) . Unlike [item dividers](/docs/api/item-divider) , list headers should only be used once at the top of a list of [items](/docs/api/item) .

## Basic Usage

## Buttons in List Headers

A [button](/docs/api/button) placed in a list header can be useful for showing part of a list and redirecting to the full list with the button.

## List Header Lines

List headers do not show a bottom border by default. The `lines` property can be modified to `"full"` or `"inset"` which will show a full width border or an inset border with left padding, respectively.

## Theming

### Colors

### CSS Custom Properties

## Properties

### color

| **Description** | The color to use from your application's color palette. Default options are: `"primary"` , `"secondary"` , `"tertiary"` , `"success"` , `"warning"` , `"danger"` , `"light"` , `"medium"` , and `"dark"` . For more information on colors, see [theming](/docs/theming/basics) . 
| **Attribute** | `color` 
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined` 
| **Default** | `undefined` 

### lines

| **Description** | How the bottom border should be displayed on the list header. 
| **Attribute** | `lines` 
| **Type** | `"full" ｜ "inset" ｜ "none" ｜ undefined` 
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

| Name | Description 
| `inner` | The inner wrapper element that arranges the list header content. 

## CSS Custom Properties

- iOS
- MD

| Name | Description 
| `--background` | Background of the list header 
| `--border-color` | Color of the list header border 
| `--border-style` | Style of the list header border 
| `--border-width` | Width of the list header border 
| `--color` | Color of the list header text 
| `--inner-border-width` | Width of the inner list header border 

| Name | Description 
| `--background` | Background of the list header 
| `--border-color` | Color of the list header border 
| `--border-style` | Style of the list header border 
| `--border-width` | Width of the list header border 
| `--color` | Color of the list header text 
| `--inner-border-width` | Width of the inner list header border 

## Slots

No slots available for this component.