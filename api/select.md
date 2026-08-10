# ion-select

URL: https://ionicframework.com/docs/api/select

Version: v8
[shadow](/docs/reference/glossary#shadow)Selects are form controls to select an option, or options, from a set of options. When a user taps the select, a dialog appears with all of the options in a large, easy to select list.

A select should be used with child `<ion-select-option>` elements. If the child option is not given a `value` attribute then its text will be used as the value.

If `value` is set on the `<ion-select>` , the selected option will be chosen based on that value.

## Labels

Labels should be used to describe the select. They can be used visually, and they will also be read out by screen readers when the user is focused on the select. This makes it easy for the user to understand the intent of the select. Select has several ways to assign a label:

Select has several options for supplying a label for the component:

- `label` property: used for plaintext labels
- `label` slot: used for custom HTML labels
- `aria-label` : used to provide a label for screen readers but adds no visible label

### Label Placement

Labels will take up the width of their content by default. Developers can use the `labelPlacement` property to control how the label is placed relative to the control. While the `label` property is used here, `labelPlacement` can also be used with the `label` slot.

### Label Slot

While plaintext labels should be passed in via the `label` property, if custom HTML is needed, it can be passed through the `label` slot instead.

### No Visible Label

If no visible label is needed, developers should still supply an `aria-label` so the select is accessible to screen readers.

## Single Selection

By default, the select allows the user to select only one option. The alert interface presents users with a radio button styled list of options. The select component's value receives the value of the selected option's value.

Keyboard interactions for single selection are described in the Keyboard Interactions section below.

## Multiple Selection

By adding the `multiple` attribute to select, users are able to select multiple options. When multiple options can be selected, the alert, popover, or modal overlay presents users with a checkbox styled list of options. The select component's value receives an array of all of the selected option values.

note
The `action-sheet` interface is not supported with multiple selection.

Keyboard interactions for multiple selection are described in the Keyboard Interactions section below.

## Interfaces

By default, select uses [ion-alert](/docs/api/alert) to open up the overlay of options in an alert. The interface can be changed to use [ion-action-sheet](/docs/api/action-sheet) , [ion-popover](/docs/api/popover) , or [ion-modal](/docs/api/modal) by passing `action-sheet` , `popover` , or `modal` , respectively, to the `interface` property. Read on to the other sections for the limitations of the different interfaces.

### Alert

### Action Sheet

### Popover

### Modal

## Responding to Interaction

The main ways of handling user interaction with the select are the `ionChange` , `ionDismiss` , and `ionCancel` events. See Events for more details on these and other events that select fires.

`Console`
`Console messages will appear here when logged from the example above.`

## Object Value References

When using objects for select values, it is possible for the identities of these objects to change if they are coming from a server or database, while the selected value's identity remains the same. For example, this can occur when an existing record with the desired object value is loaded into the select, but the newly retrieved select options now have different identities. This will result in the select appearing to have no value at all, even though the original selection in still intact.

By default, the select uses strict equality ( `===` ) to determine if an option is selected. This can be overridden by providing a property name or a function to the `compareWith` property.

### Using compareWith

`Console`
`Console messages will appear here when logged from the example above.`

### Object Values and Multiple Selection

`Console`
`Console messages will appear here when logged from the example above.`

## Justification

Developers can use the `justify` property to control how the label and control are packed on a line.

## Filled Selects

Material Design offers filled styles for a select. The `fill` property on the select can be set to either `"solid"` or `"outline"` .

Filled selects can be used on iOS by setting the select's `mode` to `md` .

warning
Selects that use `fill` should not be used in an `ion-item` due to styling conflicts between the components.

## Select Buttons

The alert supports two buttons: `Cancel` and `OK` . Each button's text can be customized using the `cancelText` and `okText` properties.

The `action-sheet` and `popover` interfaces do not have an `OK` button, clicking on any of the options will automatically close the overlay and select that value. The `popover` interface does not have a `Cancel` button, clicking on the backdrop will close the overlay.

The `modal` interface has a single `Close` button in the header. This button is only responsible for dismissing the modal. Any selections made will persist after clicking this button or if the modal is dismissed using an alternative method.

## Interface Options

Since select uses the alert, action sheet, popover, and modal interfaces, options can be passed to these components through the `interfaceOptions` property. This can be used to pass a custom header, subheader, css class, and more.

See the [ion-alert docs](/docs/api/alert) , [ion-action-sheet docs](/docs/api/action-sheet) , [ion-popover docs](/docs/api/popover) , and [ion-modal docs](/docs/api/modal) for the properties that each interface accepts.

Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface.

## Start and End Slots

The `start` and `end` slots can be used to place icons, buttons, or prefix/suffix text on either side of the select. If the slot content is clicked, the select will not open.

note
In most cases, [Icon](/docs/api/icon) components placed in these slots should have `aria-hidden="true"` . See the [Icon accessibility docs](https://ionicframework.com/docs/api/icon#accessibility) for more information.

If slot content is meant to be interacted with, it should be wrapped in an interactive element such as a [Button](/docs/api/button) . This ensures that the content can be tabbed to.

## Customization

There are two units that make up the Select component and each need to be styled separately. The `ion-select` element is represented on the view by the selected value(s), or placeholder if there is none, and dropdown icon. The interface, which is defined in the Interfaces section above, is the dialog that opens when clicking on the `ion-select` . The interface contains all of the options defined by adding `ion-select-option` elements. The following sections will go over the differences between styling these.

### Styling Select Element

As mentioned, the `ion-select` element consists only of the value(s), or placeholder, and icon that is displayed on the view. To customize this, style using a combination of CSS and any of the CSS custom properties .

Alternatively, depending on the [browser support](https://caniuse.com/#feat=mdn-css_selectors_part) needed, CSS shadow parts can be used to style the select. Notice that by using `::part` , any CSS property on the element can be targeted.

### Styling Select Interface

Customizing the interface dialog should be done by following the styling sections (CSS shadow parts, CSS custom properties, and slots) in that interface's documentation:

- [Alert](/docs/api/alert#css-shadow-parts)
- [Action Sheet](/docs/api/action-sheet#css-shadow-parts)
- [Popover](/docs/api/popover#css-shadow-parts)
- [Modal](/docs/api/modal#css-shadow-parts)
However, the Select Option does set a class for easier styling and allows for the ability to pass a class to the overlay option, see the [Select Options documentation](/docs/api/select-option) for usage examples of customizing options.

### Custom Toggle Icons

The icon that displays next to the select text can be set to any [Ionicon](https://ionic.io/ionicons) using the `toggleIcon` and/or `expandedIcon` properties.

### Icon Flip Behavior

By default, when the select is open, the toggle icon will automatically rotate on `md` mode and remain static on `ios` mode. This behavior can be customized using CSS.

The below example also uses a custom `toggleIcon` to better demonstrate the flip behavior on `ios` , since the default icon is vertically symmetrical.

## Typeahead Component

Typeahead or autocomplete functionality can be built using existing Ionic components. We recommend using an `ion-modal` to make the best use of the available screen space.

## Helper & Error Text

Helper and error text can be used inside of a select with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-select` . This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

## Interfaces

### SelectChangeEventDetail

```typescript
interface SelectChangeEventDetail<T = any> {
  value: T;
}
```

### SelectCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface SelectCustomEvent<T = any> extends CustomEvent {
  detail: SelectChangeEventDetail<T>;
  target: HTMLIonSelectElement;
}
```

## Accessibility

### Keyboard Interactions

Ionic's keyboard interactions follow the implementation patterns of the web instead of the native iOS select for a consistent experience across all platforms.

These keyboard interactions apply to all `ion-select` elements when the following conditions are met:

- The select is closed.
- The select is focused.
- The select is not disabled.

| Key | Description 
| Enter | Opens the overlay and focuses on the first selected option. If there is no selected option, then it focuses on the first option. 
| Space | Opens the overlay and focuses on the first selected option. If there is no selected option, then it focuses on the first option. 

#### Single Selection

Single selection keyboard interaction follows the [ARIA implementation patterns of a radio](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) .

These keyboard interactions apply to `ion-action-sheet` , `ion-alert` , `ion-popover` , and `ion-modal` elements when the overlay is presented and focused.

| Key | Description 
| ArrowDown | Focuses and selects the next option in the list. If there is no next option, selection will cycle to the first option. 
| ArrowLeft | Focuses and selects the previous option in the list. If there is no previous option, selection will cycle to the last option. 
| ArrowRight | Focuses and selects the next option in the list. If there is no next option, selection will cycle to the first option. 
| ArrowUp | Focuses and selects the previous option in the list. If there is no previous option, selection will cycle to the last option. 
| Enter | If an option is focused, it will select the option. Overlays **without** an 'OK' button will commit the value immediately, dismiss the overlay and return focus to the `ion-select` element.

If the 'OK' button is focused, it will save the user's selection, dismiss the overlay and return focus to the `ion-select` element. 
| Escape | Closes the overlay without changing the submitted option. Returns the focus back to the `ion-select` element. 
| Space | If the focused radio button is not checked, unchecks the currently checked radio button and checks the focused radio button. Otherwise, does nothing. If the overlay does not have an 'OK' button, the value will be committed immediately and the overlay will dismiss. 
| Tab | Moves focus to the next focusable element (cancel button, 'OK' button, or either the selection or the first option) on the overlay. If the next focusable element is an option, then it will focus on the selected option, otherwise it will focus the first option. 

#### Multiple Selection

Multiple selection keyboard interaction follows the [ARIA implementation patterns of a checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) .

These keyboard interactions apply to `ion-alert` , `ion-popover` , and `ion-modal` elements when the overlay is presented and multiple selection is enabled.

| Key | Description 
| Enter | When the 'OK' button is focused, it will save the user's selection, dismiss the overlay, and return focus to the `ion-select` element. 
| Escape | Closes the overlay without changing the submitted option(s). Returns the focus back to the `ion-select` element. 
| Space | Selects or deselects the currently focused option. This does not deselect the other selected options. If the overlay does not have an 'OK' button, the value will be committed immediately. 
| Tab | Move focus to the next focusable element (cancel button, 'OK' button, or any of the options) on the overlay. If the next focusable element is the options list, then it should iterate through each option. 

## Properties

### cancelText

| **Description** | The text to display on the cancel button. 
| **Attribute** | `cancel-text` 
| **Type** | `string` 
| **Default** | `'Cancel'` 

### color

| **Description** | The color to use from your application's color palette. Default options are: `"primary"` , `"secondary"` , `"tertiary"` , `"success"` , `"warning"` , `"danger"` , `"light"` , `"medium"` , and `"dark"` . For more information on colors, see [theming](/docs/theming/basics) .

This property is only available when using the modern select syntax. 
| **Attribute** | `color` 
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined` 
| **Default** | `undefined` 

### compareWith

| **Description** | This property allows developers to specify a custom function or property name for comparing objects when determining the selected option in the ion-select. When not specified, the default behavior will use strict equality (===) for comparison. 
| **Attribute** | `compare-with` 
| **Type** | `((currentValue: any, compareValue: any) => boolean) ｜ null ｜ string ｜ undefined` 
| **Default** | `undefined` 

### disabled

| **Description** | If `true` , the user cannot interact with the select. 
| **Attribute** | `disabled` 
| **Type** | `boolean` 
| **Default** | `false` 

### errorText

| **Description** | Text that is placed under the select and displayed when an error is detected. 
| **Attribute** | `error-text` 
| **Type** | `string ｜ undefined` 
| **Default** | `undefined` 

### expandedIcon

| **Description** | The toggle icon to show when the select is open. If defined, the icon rotation behavior in `md` mode will be disabled. If undefined, `toggleIcon` will be used for when the select is both open and closed. 
| **Attribute** | `expanded-icon` 
| **Type** | `string ｜ undefined` 
| **Default** | `undefined` 

### fill

| **Description** | The fill for the item. If `"solid"` the item will have a background. If `"outline"` the item will be transparent with a border. Only available in `md` mode. 
| **Attribute** | `fill` 
| **Type** | `"outline" ｜ "solid" ｜ undefined` 
| **Default** | `undefined` 

### helperText

| **Description** | Text that is placed under the select and displayed when no error is detected. 
| **Attribute** | `helper-text` 
| **Type** | `string ｜ undefined` 
| **Default** | `undefined` 

### interface

| **Description** | The interface the select should use: `action-sheet` , `popover` , `alert` , or `modal` . 
| **Attribute** | `interface` 
| **Type** | `"action-sheet" ｜ "alert" ｜ "modal" ｜ "popover"` 
| **Default** | `'alert'` 

### interfaceOptions

| **Description** | Any additional options that the `alert` , `action-sheet` or `popover` interface can take. See the [ion-alert docs](/docs/api/alert) , the [ion-action-sheet docs](/docs/api/action-sheet) , the [ion-popover docs](/docs/api/popover) , and the [ion-modal docs](/docs/api/modal) for the create options for each interface.

Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface. 
| **Attribute** | `interface-options` 
| **Type** | `any` 
| **Default** | `{}` 

### justify

| **Description** | How to pack the label and select within a line. `justify` does not apply when the label and select are on different lines when `labelPlacement` is set to `"floating"` or `"stacked"` . `"start"` : The label and select will appear on the left in LTR and on the right in RTL. `"end"` : The label and select will appear on the right in LTR and on the left in RTL. `"space-between"` : The label and select will appear on opposite ends of the line with space between the two elements. 
| **Attribute** | `justify` 
| **Type** | `"end" ｜ "space-between" ｜ "start" ｜ undefined` 
| **Default** | `undefined` 

### label

| **Description** | The visible label associated with the select.

Use this if you need to render a plaintext label.

The `label` property will take priority over the `label` slot if both are used. 
| **Attribute** | `label` 
| **Type** | `string ｜ undefined` 
| **Default** | `undefined` 

### labelPlacement

| **Description** | Where to place the label relative to the select. `"start"` : The label will appear to the left of the select in LTR and to the right in RTL. `"end"` : The label will appear to the right of the select in LTR and to the left in RTL. `"floating"` : The label will appear smaller and above the select when the select is focused or it has a value. Otherwise it will appear on top of the select. `"stacked"` : The label will appear smaller and above the select regardless even when the select is blurred or has no value. `"fixed"` : The label has the same behavior as `"start"` except it also has a fixed width. Long text will be truncated with ellipses ("..."). When using `"floating"` or `"stacked"` we recommend initializing the select with either a `value` or a `placeholder` . 
| **Attribute** | `label-placement` 
| **Type** | `"end" ｜ "fixed" ｜ "floating" ｜ "stacked" ｜ "start" ｜ undefined` 
| **Default** | `'start'` 

### mode

| **Description** | The mode determines which platform styles to use.

This is a [virtual property](/docs/core-concepts/fundamentals#virtual-properties) that is set once during initialization and will not update if you change its value after the initial render. 
| **Attribute** | `mode` 
| **Type** | `"ios" ｜ "md"` 
| **Default** | `undefined` 

### multiple

| **Description** | If `true` , the select can accept multiple values. 
| **Attribute** | `multiple` 
| **Type** | `boolean` 
| **Default** | `false` 

### name

| **Description** | The name of the control, which is submitted with the form data. 
| **Attribute** | `name` 
| **Type** | `string` 
| **Default** | `this.inputId` 

### okText

| **Description** | The text to display on the ok button. 
| **Attribute** | `ok-text` 
| **Type** | `string` 
| **Default** | `'OK'` 

### placeholder

| **Description** | The text to display when the select is empty. 
| **Attribute** | `placeholder` 
| **Type** | `string ｜ undefined` 
| **Default** | `undefined` 

### required

| **Description** | If true, screen readers will announce it as a required field. This property works only for accessibility purposes, it will not prevent the form from submitting if the value is invalid. 
| **Attribute** | `required` 
| **Type** | `boolean` 
| **Default** | `false` 

### selectedText

| **Description** | The text to display instead of the selected option's value. 
| **Attribute** | `selected-text` 
| **Type** | `null ｜ string ｜ undefined` 
| **Default** | `undefined` 

### shape

| **Description** | The shape of the select. If "round" it will have an increased border radius. 
| **Attribute** | `shape` 
| **Type** | `"round" ｜ undefined` 
| **Default** | `undefined` 

### toggleIcon

| **Description** | The toggle icon to use. Defaults to `chevronExpand` for `ios` mode, or `caretDownSharp` for `md` mode. 
| **Attribute** | `toggle-icon` 
| **Type** | `string ｜ undefined` 
| **Default** | `undefined` 

### value

| **Description** | The value of the select. 
| **Attribute** | `value` 
| **Type** | `any` 
| **Default** | `undefined` 

## Events

| Name | Description | Bubbles 
| `ionBlur` | Emitted when the select loses focus. | `true` 
| `ionCancel` | Emitted when the selection is cancelled. | `true` 
| `ionChange` | Emitted when the value has changed.

This event will not emit when programmatically setting the `value` property. | `true` 
| `ionDismiss` | Emitted when the overlay is dismissed. | `true` 
| `ionFocus` | Emitted when the select has focus. | `true` 

## Methods

### open

| **Description** | Open the select overlay. The overlay is either an alert, action sheet, or popover, depending on the `interface` property on the `ion-select` . 
| **Signature** | `open(event?: UIEvent) => Promise<any>` 
| **Parameters** | **event** : The user interface event that called the open. 

## CSS Shadow Parts

| Name | Description 
| `bottom` | The container element for helper text, error text, and counter. 
| `container` | The container for the selected text or placeholder. 
| `error-text` | Supporting text displayed beneath the select when the select is invalid and touched. 
| `helper-text` | Supporting text displayed beneath the select when the select is valid. 
| `icon` | The select icon container. 
| `inner` | The inner element of the wrapper that manages the slots, selected values or placeholder, and toggle icons. 
| `label` | The label text describing the select. 
| `placeholder` | The text displayed in the select when there is no value. 
| `supporting-text` | Supporting text displayed beneath the select. 
| `text` | The displayed value of the select. 
| `wrapper` | The clickable label element that wraps the entire form field (label text, slots, selected values or placeholder, and toggle icons). 

## CSS Custom Properties

- iOS
- MD

| Name | Description 
| `--background` | Background of the select 
| `--border-color` | Color of the select border 
| `--border-radius` | Radius of the select border. A large radius may display unevenly when using fill="outline"; if needed, use shape="round" instead or increase --padding-start. 
| `--border-style` | Style of the select border 
| `--border-width` | Width of the select border 
| `--highlight-color-focused` | The color of the highlight on the select when focused 
| `--highlight-color-invalid` | The color of the highlight on the select when invalid 
| `--highlight-color-valid` | The color of the highlight on the select when valid 
| `--highlight-height` | The height of the highlight on the select. Only applies to md mode. 
| `--padding-bottom` | Bottom padding of the select 
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the select 
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the select 
| `--padding-top` | Top padding of the select 
| `--placeholder-color` | Color of the select placeholder text 
| `--placeholder-opacity` | Opacity of the select placeholder text 
| `--ripple-color` | The color of the ripple effect on MD mode. 

| Name | Description 
| `--background` | Background of the select 
| `--border-color` | Color of the select border 
| `--border-radius` | Radius of the select border. A large radius may display unevenly when using fill="outline"; if needed, use shape="round" instead or increase --padding-start. 
| `--border-style` | Style of the select border 
| `--border-width` | Width of the select border 
| `--highlight-color-focused` | The color of the highlight on the select when focused 
| `--highlight-color-invalid` | The color of the highlight on the select when invalid 
| `--highlight-color-valid` | The color of the highlight on the select when valid 
| `--highlight-height` | The height of the highlight on the select. Only applies to md mode. 
| `--padding-bottom` | Bottom padding of the select 
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the select 
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the select 
| `--padding-top` | Top padding of the select 
| `--placeholder-color` | Color of the select placeholder text 
| `--placeholder-opacity` | Opacity of the select placeholder text 
| `--ripple-color` | The color of the ripple effect on MD mode. 

## Slots

| Name | Description 
| `end` | Content to display at the trailing edge of the select. 
| `label` | The label text to associate with the select. Use the `labelPlacement` property to control where the label is placed relative to the select. Use this if you need to render a label with custom HTML. 
| `start` | Content to display at the leading edge of the select.