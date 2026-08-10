# ion-item-divider

URL: https://ionicframework.com/docs/api/item-divider

Version: v8
[shadow](/docs/reference/glossary#shadow)Item dividers are block elements that can be used to separate [items](/docs/api/item) in a list. They are similar to list headers, but instead of only being placed at the top of a list, they should go in between groups of items.

## Basic Usage

## Theming

### Colors

### CSS Custom Properties

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

### sticky

| **Description** | When it's set to `true` , the item-divider will stay visible when it reaches the top of the viewport until the next `ion-item-divider` replaces it.

This feature relies in `position:sticky` : [https://caniuse.com/#feat=css-sticky](https://caniuse.com/#feat=css-sticky) 
| **Attribute** | `sticky` 
| **Type** | `boolean` 
| **Default** | `false` 

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name | Description 
| `container` | The wrapper element that contains the default slot. 
| `inner` | The inner wrapper element that arranges the divider content. 

## CSS Custom Properties

- iOS
- MD

| Name | Description 
| `--background` | Background of the item divider 
| `--color` | Color of the item divider 
| `--inner-padding-bottom` | Bottom inner padding of the item divider 
| `--inner-padding-end` | End inner padding of the item divider 
| `--inner-padding-start` | Start inner padding of the item divider 
| `--inner-padding-top` | Top inner padding of the item divider 
| `--padding-bottom` | Bottom padding of the item divider 
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the item divider 
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the item divider 
| `--padding-top` | Top padding of the item divider 

| Name | Description 
| `--background` | Background of the item divider 
| `--color` | Color of the item divider 
| `--inner-padding-bottom` | Bottom inner padding of the item divider 
| `--inner-padding-end` | End inner padding of the item divider 
| `--inner-padding-start` | Start inner padding of the item divider 
| `--inner-padding-top` | Top inner padding of the item divider 
| `--padding-bottom` | Bottom padding of the item divider 
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the item divider 
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the item divider 
| `--padding-top` | Top padding of the item divider 

## Slots

| Name | Description 
|  | Content is placed between the named slots if provided without a slot. 
| `end` | Content is placed to the right of the divider text in LTR, and to the left in RTL. 
| `start` | Content is placed to the left of the divider text in LTR, and to the right in RTL.