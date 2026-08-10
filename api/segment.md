# ion-segment

URL: https://ionicframework.com/docs/api/segment

Version: v8
[shadow](/docs/reference/glossary#shadow)Segments display a group of related buttons, sometimes known as segmented controls, in a horizontal row. They can be displayed inside of a toolbar or the main content.

Their functionality is similar to tabs, where selecting one will deselect all others. Segments are useful for toggling between different views inside of the content. Tabs should be used instead of a segment when clicking on a control should navigate between pages.

## Basic Usage

Segments consist of [segment buttons](/docs/api/segment-button) with a `value` property on each button. Set the `value` property on the segment to match the value of a button to select that button. Segments can also be disabled to prevent users from interacting with them.

## Scrollable Segments

Segments are not scrollable by default. Each segment button has a fixed width, and the width is determined by dividing the number of segment buttons by the screen width. This ensures that each segment button can be displayed on the screen without having to scroll. As a result, some segment buttons with longer labels may get cut off. To avoid this we recommend either using a shorter label or switching to a scrollable segment by setting the `scrollable` property to `true` . This will cause the segment to scroll horizontally, but will allow each segment button to have a variable width.

## Segments in Toolbars

## Swipeable Segments

Each [segment button](/docs/api/segment-button) can be associated with a [segment content](/docs/api/segment-content) element that will be displayed when the segment is active. With this approach, each segment's content can be swiped or scrolled between and the segment will be updated to reflect the currently visible content.

warning
If no initial `value` is assigned to the `ion-segment` when using swipeable segments, the segment will default to the value of the first segment button.

Segment buttons cannot be disabled when used with swipeable segments.

## Theming

### Colors

### CSS Custom Properties

## Accessibility

### Keyboard Interactions

The component has full keyboard support for navigating between and selecting `ion-segment-button` elements. By default, keyboard navigation will only focus `ion-segment-button` elements, but you can use the `selectOnFocus` property to ensure that they get selected on focus as well. The following table details what each key does:

| Key | Description 
| ArrowRight | Focuses the next focusable element. 
| ArrowLeft | Focuses the previous focusable element. 
| Home | Focuses the first focusable element. 
| End | Focuses the last focusable element. 
| Space or Enter | Selects the element that is currently focused. 

## Interfaces

### SegmentChangeEventDetail

```typescript
interface SegmentChangeEventDetail {
  value?: string;
}
```

### SegmentCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface SegmentCustomEvent extends CustomEvent {
  target: HTMLIonSegmentElement;
  detail: SegmentChangeEventDetail;
}
```

## Properties

### color

| **Description** | The color to use from your application's color palette. Default options are: `"primary"` , `"secondary"` , `"tertiary"` , `"success"` , `"warning"` , `"danger"` , `"light"` , `"medium"` , and `"dark"` . For more information on colors, see [theming](/docs/theming/basics) . 
| **Attribute** | `color` 
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined` 
| **Default** | `undefined` 

### disabled

| **Description** | If `true` , the user cannot interact with the segment. 
| **Attribute** | `disabled` 
| **Type** | `boolean` 
| **Default** | `false` 

### mode

| **Description** | The mode determines which platform styles to use.

This is a [virtual property](/docs/core-concepts/fundamentals#virtual-properties) that is set once during initialization and will not update if you change its value after the initial render. 
| **Attribute** | `mode` 
| **Type** | `"ios" ｜ "md"` 
| **Default** | `undefined` 

### scrollable

| **Description** | If `true` , the segment buttons will overflow and the user can swipe to see them. In addition, this will disable the gesture to drag the indicator between the buttons in order to swipe to see hidden buttons. 
| **Attribute** | `scrollable` 
| **Type** | `boolean` 
| **Default** | `false` 

### selectOnFocus

| **Description** | If `true` , navigating to an `ion-segment-button` with the keyboard will focus and select the element. If `false` , keyboard navigation will only focus the `ion-segment-button` element. 
| **Attribute** | `select-on-focus` 
| **Type** | `boolean` 
| **Default** | `false` 

### swipeGesture

| **Description** | If `true` , users will be able to swipe between segment buttons to activate them. 
| **Attribute** | `swipe-gesture` 
| **Type** | `boolean` 
| **Default** | `true` 

### value

| **Description** | the value of the segment. 
| **Attribute** | `value` 
| **Type** | `number ｜ string ｜ undefined` 
| **Default** | `undefined` 

## Events

| Name | Description | Bubbles 
| `ionChange` | Emitted when the value property has changed and any dragging pointer has been released from `ion-segment` .

This event will not emit when programmatically setting the `value` property. | `true` 

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

- iOS
- MD

| Name | Description 
| `--background` | Background of the segment button 

| Name | Description 
| `--background` | Background of the segment button 

## Slots

No slots available for this component.