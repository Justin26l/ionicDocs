# ion-segment-button

URL: https://ionicframework.com/docs/api/segment-button

Version: v8
[shadow](/docs/reference/glossary#shadow)Segment buttons are groups of related buttons inside of a [segment](/docs/api/segment) . They are displayed in a horizontal row. A segment button can be selected by default by setting the `value` of the segment to the `value` of the segment button. Only one segment button can be selected at a time.

## Basic Usage

## Layout

The `layout` property is set to `"icon-top"` by default. When a segment button has both an icon and a label, it will display the icon on top of the label. This behavior can be changed by setting the `layout` property to `"icon-bottom"` , `"icon-start"` , or `"icon-end"` which will show the icon below the label, to the start of the label (left in LTR and right in RTL) or to the end of the label (right in LTR and left in RTL), respectively.

## Theming

### CSS Shadow Parts

### CSS Custom Properties

## Properties

### contentId

| **Description** | The `id` of the segment content. 
| **Attribute** | `content-id` 
| **Type** | `string ｜ undefined` 
| **Default** | `undefined` 

### disabled

| **Description** | If `true` , the user cannot interact with the segment button. 
| **Attribute** | `disabled` 
| **Type** | `boolean` 
| **Default** | `false` 

### layout

| **Description** | Set the layout of the text and icon in the segment. 
| **Attribute** | `layout` 
| **Type** | `"icon-bottom" ｜ "icon-end" ｜ "icon-hide" ｜ "icon-start" ｜ "icon-top" ｜ "label-hide" ｜ undefined` 
| **Default** | `'icon-top'` 

### mode

| **Description** | The mode determines which platform styles to use.

This is a [virtual property](/docs/core-concepts/fundamentals#virtual-properties) that is set once during initialization and will not update if you change its value after the initial render. 
| **Attribute** | `mode` 
| **Type** | `"ios" ｜ "md"` 
| **Default** | `undefined` 

### type

| **Description** | The type of the button. 
| **Attribute** | `type` 
| **Type** | `"button" ｜ "reset" ｜ "submit"` 
| **Default** | `'button'` 

### value

| **Description** | The value of the segment button. 
| **Attribute** | `value` 
| **Type** | `number ｜ string` 
| **Default** | `'ion-sb-' + ids++` 

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name | Description 
| `indicator` | The indicator displayed on the checked segment button. 
| `indicator-background` | The background element for the indicator displayed on the checked segment button. 
| `native` | The native HTML button element that wraps all child elements. 

## CSS Custom Properties

- iOS
- MD

| Name | Description 
| `--background` | Background of the segment button 
| `--background-checked` | Background of the checked segment button 
| `--background-focused` | Background of the segment button when focused with the tab key 
| `--background-focused-opacity` | Opacity of the segment button background when focused with the tab key 
| `--background-hover` | Background of the segment button on hover 
| `--background-hover-opacity` | Opacity of the segment button background on hover 
| `--border-color` | Color of the segment button border 
| `--border-radius` | Radius of the segment button border 
| `--border-style` | Style of the segment button border 
| `--border-width` | Width of the segment button border 
| `--color` | Color of the segment button 
| `--color-checked` | Color of the checked segment button 
| `--color-focused` | Color of the segment button when focused with the tab key 
| `--color-hover` | Color of the segment button on hover 
| `--indicator-box-shadow` | Box shadow on the indicator for the checked segment button 
| `--indicator-color` | Color of the indicator for the checked segment button 
| `--indicator-height` | Height of the indicator for the checked segment button 
| `--indicator-transform` | Transform of the indicator for the checked segment button 
| `--indicator-transition` | Transition of the indicator for the checked segment button 
| `--margin-bottom` | Bottom margin of the segment button 
| `--margin-end` | Right margin if direction is left-to-right, and left margin if direction is right-to-left of the segment button 
| `--margin-start` | Left margin if direction is left-to-right, and right margin if direction is right-to-left of the segment button 
| `--margin-top` | Top margin of the segment button 
| `--padding-bottom` | Bottom padding of the segment button 
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the segment button 
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the segment button 
| `--padding-top` | Top padding of the segment button 
| `--transition` | Transition of the segment button 

| Name | Description 
| `--background` | Background of the segment button 
| `--background-checked` | Background of the checked segment button 
| `--background-focused` | Background of the segment button when focused with the tab key 
| `--background-focused-opacity` | Opacity of the segment button background when focused with the tab key 
| `--background-hover` | Background of the segment button on hover 
| `--background-hover-opacity` | Opacity of the segment button background on hover 
| `--border-color` | Color of the segment button border 
| `--border-radius` | Radius of the segment button border 
| `--border-style` | Style of the segment button border 
| `--border-width` | Width of the segment button border 
| `--color` | Color of the segment button 
| `--color-checked` | Color of the checked segment button 
| `--color-focused` | Color of the segment button when focused with the tab key 
| `--color-hover` | Color of the segment button on hover 
| `--indicator-box-shadow` | Box shadow on the indicator for the checked segment button 
| `--indicator-color` | Color of the indicator for the checked segment button 
| `--indicator-height` | Height of the indicator for the checked segment button 
| `--indicator-transform` | Transform of the indicator for the checked segment button 
| `--indicator-transition` | Transition of the indicator for the checked segment button 
| `--margin-bottom` | Bottom margin of the segment button 
| `--margin-end` | Right margin if direction is left-to-right, and left margin if direction is right-to-left of the segment button 
| `--margin-start` | Left margin if direction is left-to-right, and right margin if direction is right-to-left of the segment button 
| `--margin-top` | Top margin of the segment button 
| `--padding-bottom` | Bottom padding of the segment button 
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the segment button 
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the segment button 
| `--padding-top` | Top padding of the segment button 
| `--transition` | Transition of the segment button 

## Slots

No slots available for this component.