# ion-radio

URL: https://ionicframework.com/docs/api/radio

Version: v8
[shadow](/docs/reference/glossary#shadow)Radios should be used inside of a [radio group](/docs/api/radio-group) . Pressing a radio will check it and uncheck the previously selected radio, if there is one. They can also be checked programmatically by setting the value property of the parent radio group to the value of the radio.

When radios are inside of a radio group, only one radio will be checked at any time. If more than one item should be selected, [checkboxes](/docs/api/checkbox) should be used instead. Radios can be disabled within a group to prevent interaction with them.

## Basic Usage

## Label Placement

Developers can use the `labelPlacement` property to control how the label is placed relative to the control. This property mirrors the flexbox `flex-direction` property.

## Label Wrapping

Regardless of label placement, long text will not wrap by default. If the width of the radio is constrained, overflowing text will be truncated with an ellipsis. You can enable text wrapping by adding the `ion-text-wrap` class to a wrapper around the radio text or styling the `label` shadow part using the `::part()` selector.

## Object Value References

By default, the radio group uses strict equality ( `===` ) to determine if an option is selected. This can be overridden by providing a property name or a function to the `compareWith` property.

`Console`
`Console messages will appear here when logged from the example above.`

## Alignment

Developers can use the `alignment` property to control how the label and control are aligned on the cross axis. This property mirrors the flexbox `align-items` property.

note
Stacked radios can be aligned using the `alignment` property. This can be useful when the label and control need to be centered horizontally.

## Justification

Developers can use the `justify` property to control how the label and control are packed on a line. This property mirrors the flexbox `justify-content` property.

note
`ion-item` is only used in the demos to emphasize how `justify` works. It is not needed in order for `justify` to function correctly.

## Deselecting Radios

By default, once a radio is selected it cannot be deselected; pressing it again will keep it selected. This behavior can be modified by using the `allowEmptySelection` property on the parent radio group, which enables the radios to be deselected.

## Helper & Error Text

Helper and error text can be used inside of a radio group with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-radio-group` . This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

## Theming

### Colors

### CSS Custom Properties

### CSS Shadow Parts

## Properties

### alignment

| **Description** | How to control the alignment of the radio and label on the cross axis. `"start"` : The label and control will appear on the left of the cross axis in LTR, and on the right side in RTL. `"center"` : The label and control will appear at the center of the cross axis in both LTR and RTL. Setting this property will change the radio `display` to `block` . 
| **Attribute** | `alignment` 
| **Type** | `"center" ｜ "start" ｜ undefined` 
| **Default** | `undefined` 

### color

| **Description** | The color to use from your application's color palette. Default options are: `"primary"` , `"secondary"` , `"tertiary"` , `"success"` , `"warning"` , `"danger"` , `"light"` , `"medium"` , and `"dark"` . For more information on colors, see [theming](/docs/theming/basics) . 
| **Attribute** | `color` 
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined` 
| **Default** | `undefined` 

### disabled

| **Description** | If `true` , the user cannot interact with the radio. 
| **Attribute** | `disabled` 
| **Type** | `boolean` 
| **Default** | `false` 

### justify

| **Description** | How to pack the label and radio within a line. `"start"` : The label and radio will appear on the left in LTR and on the right in RTL. `"end"` : The label and radio will appear on the right in LTR and on the left in RTL. `"space-between"` : The label and radio will appear on opposite ends of the line with space between the two elements. Setting this property will change the radio `display` to `block` . 
| **Attribute** | `justify` 
| **Type** | `"end" ｜ "space-between" ｜ "start" ｜ undefined` 
| **Default** | `undefined` 

### labelPlacement

| **Description** | Where to place the label relative to the radio. `"start"` : The label will appear to the left of the radio in LTR and to the right in RTL. `"end"` : The label will appear to the right of the radio in LTR and to the left in RTL. `"fixed"` : The label has the same behavior as `"start"` except it also has a fixed width. Long text will be truncated with ellipses ("..."). `"stacked"` : The label will appear above the radio regardless of the direction. The alignment of the label can be controlled with the `alignment` property. 
| **Attribute** | `label-placement` 
| **Type** | `"end" ｜ "fixed" ｜ "stacked" ｜ "start"` 
| **Default** | `'start'` 

### mode

| **Description** | The mode determines which platform styles to use.

This is a [virtual property](/docs/core-concepts/fundamentals#virtual-properties) that is set once during initialization and will not update if you change its value after the initial render. 
| **Attribute** | `mode` 
| **Type** | `"ios" ｜ "md"` 
| **Default** | `undefined` 

### name

| **Description** | The name of the control, which is submitted with the form data. 
| **Attribute** | `name` 
| **Type** | `string` 
| **Default** | `this.inputId` 

### value

| **Description** | the value of the radio. 
| **Attribute** | `value` 
| **Type** | `any` 
| **Default** | `undefined` 

## Events

| Name | Description | Bubbles 
| `ionBlur` | Emitted when the radio button loses focus. | `true` 
| `ionFocus` | Emitted when the radio button has focus. | `true` 

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name | Description 
| `container` | The container for the radio mark. 
| `label` | The label text describing the radio. 
| `mark` | The checkmark or dot used to indicate the checked state. 

## CSS Custom Properties

- iOS
- MD

| Name | Description 
| `--border-radius` | Border radius of the radio 
| `--color` | Color of the radio 
| `--color-checked` | Color of the checked radio 
| `--inner-border-radius` | Border radius of the inner checked radio 

| Name | Description 
| `--border-radius` | Border radius of the radio 
| `--color` | Color of the radio 
| `--color-checked` | Color of the checked radio 
| `--inner-border-radius` | Border radius of the inner checked radio 

## Slots

| Name | Description 
|  | The label text to associate with the radio. Use the "labelPlacement" property to control where the label is placed relative to the radio.