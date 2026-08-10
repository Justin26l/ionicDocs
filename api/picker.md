# ion-picker

URL: https://ionicframework.com/docs/api/picker

Version: v8
[shadow](/docs/reference/glossary#shadow)A Picker displays one or more columns with options for users to choose from.

## Prefix & Suffix Content

Use the `prefix` and `suffix` slots to add additional content to the picker.

## Theming

### CSS Variables

The picker highlight and fade can be customized using CSS variables on `ion-picker` . Developers can customize the individual appearance of `ion-picker-column-options` by targeting them directly and using host level styling.

## Picker in Modal

Pickers can be displayed inside of overlays, such as `ion-modal` to create a picker experience with confirmation or cancellation buttons.

`Console`
`Console messages will appear here when logged from the example above.`

## Accessibility

### Screen Readers

Picker supports navigation using a screen reader by implementing the [`slider` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role) on each [Picker Column](/docs/api/picker-column) . The following gestures can be used to navigate the Picker.

| Gesture | Function 
| Swipe Left | Move focus to the previous Picker Column. 
| Swipe Right | Move focus to the next Picker Column. 
| Swipe Up | Select the next option in the Picker Column. 
| Swipe Down | Select the previous option in the Picker Column. 
| Double Tap and Slide Up/Down | Adjust the selected option in the Picker Column. Can be used as an alternative to swiping up and down. 

caution
The Swipe Up and Swipe Down gestures rely on the correct key events being synthesized as noted on the [`slider` documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role) . [Chromium-based browsers do not synthesize keyboard events correctly](https://issues.chromium.org/issues/40816094) , but the "Double Tap and Slide Up/Down" gesture can be used as an alternative until this has been implemented in Chromium-based browsers.

### Keyboard Interactions

Each [Picker Column](/docs/api/picker-column) can be navigated using the keyboard when focused.

| Key | Description 
| ArrowUp | Scroll to the previous option. 
| ArrowDown | Scroll to the next option. 
| PageUp | Scroll up by more than one option. 
| PageDown | Scroll down by more than one option. 
| Home | Scroll to the first option. 
| End | Scroll to the last option. 

## Properties

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
| `--fade-background-rgb` | Background of the gradient covering non-selected items in rgb format 
| `--highlight-background` | Background of the picker highlight for the selected item 
| `--highlight-border-radius` | Border radius of the picker highlight for the selected item 

| Name | Description 
| `--fade-background-rgb` | Background of the gradient covering non-selected items in rgb format 
| `--highlight-background` | Background of the picker highlight for the selected item 
| `--highlight-border-radius` | Border radius of the picker highlight for the selected item 

## Slots

No slots available for this component.