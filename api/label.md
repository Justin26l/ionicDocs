# ion-label

URL: https://ionicframework.com/docs/api/label

Version: v8
[scoped](/docs/reference/glossary#scoped)Label is an element used primarily to add text content to [Item](/docs/api/item) components. Label can also be used inside of form control components such as [Input](/docs/api/input) or [Radio](/docs/api/radio) when specifying the visible label, but it is not required.

The position of the label inside of an item can be inline, fixed, stacked, or floating.

## Basic Usage

## Item Labels

## Theming

### Colors

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

### position

| **Description** | The position determines where and how the label behaves inside an item. 
| **Attribute** | `position` 
| **Type** | `"fixed" ｜ "floating" ｜ "stacked" ｜ undefined` 
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
| `--color` | Color of the label. This property is only available when using `ion-label` inside of an `ion-item` . 

| Name | Description 
| `--color` | Color of the label. This property is only available when using `ion-label` inside of an `ion-item` . 

## Slots

No slots available for this component.