# ion-modal

URL: https://ionicframework.com/docs/api/modal

Version: v8
[shadow](/docs/reference/glossary#shadow)A Modal is a dialog that appears on top of the app's content, and must be dismissed by the app before interaction can resume. It is useful as a select component when there are a lot of options to choose from, or when filtering items in a list, as well as many other use cases.

## Inline Modals (Recommended)

`ion-modal` can be used by writing the component directly in your template. This reduces the number of handlers you need to wire up in order to present the modal.

When using `ion-modal` with Angular, React, or Vue, the component you pass in will be destroyed when the modal is dismissed. As this functionality is provided by the JavaScript framework, using `ion-modal` without a JavaScript framework will not destroy the component you passed in. If this is a needed functionality, we recommend using the `modalController` instead.

### Using `isOpen`

The `isOpen` property on `ion-modal` allows developers to control the presentation state of the modal from their application state. This means when `isOpen` is set to `true` the modal will be presented and when `isOpen` is set to `false` the modal will be dismissed.

`isOpen` uses a one-way data binding, meaning it will not automatically be set to `false` when the modal is dismissed. Developers should listen for the `ionModalDidDismiss` or `didDismiss` event and set `isOpen` to `false` . The reason for this is it prevents the internals of `ion-modal` from being tightly coupled with the state of the application. With a one way data binding, the modal only needs to concern itself with the boolean value that the reactive variable provides. With a two way data binding, the modal needs to concern itself with both the boolean value as well as the existence of the reactive variable itself. This can lead to non-deterministic behaviors and make applications harder to debug.

## Controller Modals

With the `modalController` developers can present an `ion-modal` programmatically. Developers will have complete control over when a modal is presented and dismissed.

## Preventing a Modal from Dismissing

When entering data into a modal, it is often desirable to have a way of preventing accidental data loss. The `canDismiss` property on `ion-modal` gives developers control over when a modal is allowed to dismiss.

There are two different ways of using the `canDismiss` property: setting a boolean value or setting a callback function.

note
Note: When using a sheet modal, `canDismiss` will not be checked on swipe if there is no `0` breakpoint set. However, it will still be checked when pressing `Esc` or the hardware back button.

### Setting a boolean value

Developers can set `canDismiss` to a boolean value. If `canDismiss` is `true` , then the modal will close when users attempt to dismiss the modal. If `canDismiss` is `false` , then the modal will not close when users attempt to dismiss the modal.

Setting a boolean value should be used when you need to require a particular action to be taken prior to a modal being dismissed. For example, if developers want to require that a "Terms of Use" checkbox is checked prior to closing the modal, they could set `canDismiss` to `false` initially and update it to `true` when the checkbox is checked.

### Setting a callback function

Developers can set `canDismiss` to be a function. This function must return a `Promise` that resolves to either `true` or `false` . If the promise resolves to `true` , then the modal will dismiss. If the promise resolves to `false` , then the modal will not dismiss.

Setting a callback function should be used when you have complex dismissing criteria such as showing a confirmation dialog prior to dismissing the modal. The option that users select in this dialog can then be used to determine whether or not the modal should proceed with dismissing.

Note that setting a callback function will cause the swipe gesture to be interrupted when using a card or sheet modal. This is because Ionic does not know what your callback function will resolve to ahead of time.

### Prevent swipe to close

Developers may want to prevent users from swiping to close a card or sheet modal. This can be done by setting a callback function for `canDismiss` and checking if the `role` is not `gesture` .

### Modifying dismiss behavior in child components

In certain scenarios, developers may need to customize the behavior of the `canDismiss` callback based on the state of a presented modal. This customization can be particularly useful, for instance, when developers want to prevent the modal from being dismissed if a form within it is invalid.

To achieve this customization, child components can employ various techniques such as function callbacks, event emission, or other reactivity mechanisms to communicate with the parent component and update the conditions governing the `canDismiss` callback.

Here's a simplified example illustrating how a child component can interact with a parent component to modify the `canDismiss` callback:

## Card Modal

Developers can create a card modal effect where the modal appears as a card stacked on top of your app's main content. To create a card modal, developers need to set the `presentingElement` property on `ion-modal` .

The `presentingElement` property accepts a reference to the element that should display under your modal. This is typically a reference to `ion-router-outlet` .

The `canDismiss` property can be used to control whether or not the card modal can be swiped to close.

note
The card display style is only available on iOS.

## Sheet Modal

info
[Content](/docs/api/content) should be used inside of the sheet modal if you want your modal content to be scrollable.

Developers can create a sheet modal effect similar to the drawer components available in maps applications. To create a sheet modal, developers need to set the `breakpoints` and `initialBreakpoint` properties on `ion-modal` .

The `breakpoints` property accepts an array which states each breakpoint that the sheet can snap to when swiped. A `breakpoints` property of `[0, 0.5, 1]` would indicate that the sheet can be swiped to show 0% of the modal, 50% of the modal, and 100% of the modal. When the modal is swiped to 0%, the modal will be automatically dismissed. Note that the modal cannot be dismissed on swipe if no `0` breakpoint is included, but it can still be dismissed by pressing `Esc` or the hardware back button.

The `initialBreakpoint` property is required so that the sheet modal knows which breakpoint to start at when presenting. The `initialBreakpoint` value must also exist in the `breakpoints` array. Given a `breakpoints` value of `[0, 0.5, 1]` , an `initialBreakpoint` value of `0.5` would be valid as `0.5` is in the `breakpoints` array. An `initialBreakpoint` value of `0.25` would not be valid as `0.25` does not exist in the `breakpoints` array.

The `backdropBreakpoint` property can be used to customize the point at which the `ion-backdrop` will begin to fade in. This is useful when creating interfaces that have content underneath the sheet that should remain interactive. A common use case is a sheet modal that overlays a map where the map is interactive until the sheet is fully expanded.

### Interacting with background content

### Custom Sheet Height

Developers should use the `--height` CSS Variable to change the height of the sheet modal instead of changing the last breakpoint in the `breakpoints` array. The reason for this is changing the last breakpoint in the `breakpoints` array to a value less than `1` will cause some of the modal to be inaccessible outside of the viewport.

The following example shows how to get a sheet modal that is automatically sized based on its content. Note that by keeping the maximum breakpoint at `1` we ensure that the entire modal is accessible in the viewport.

### Handle Behavior

Sheet modals can optionally render a handle indicator used for dragging the sheet between breakpoints. The `handleBehavior` property can be used to configure the behavior of when the handle is activated by the user.

### Scrolling content at all breakpoints

Sheet modals can be configured to allow scrolling content at all breakpoints, making them ideal for displaying content larger than the viewport. By setting the `expandToScroll` property to `false` , the content remains scrollable at every breakpoint. Otherwise, by default, scrolling is only enabled when the sheet modal is fully expanded.

## Styling

Modals are presented at the root of your application so they overlay your entire app. This behavior applies to both inline modals and modals presented from a controller. As a result, custom modal styles can not be scoped to a particular component as they will not apply to the modal. Instead, styles must be applied globally. For most developers, placing the custom styles in `global.css` is sufficient.

note
If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file. Read Style Placement in the Angular section below for more information.

note
`ion-modal` works under the assumption that stacked modals are the same size. As a result, each subsequent modal will have no box shadow and a backdrop opacity of `0` . This is to avoid the effect of shadows and backdrops getting darker with each added modal. This can be changed by setting the `--box-shadow` and `--backdrop-opacity` CSS variables:

```text
ion-modal.stack-modal {
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);
}
```

### Animations

The enter and leave animations can be customized by using our animation builder and assigning animations to `enterAnimation` and `leaveAnimation` .

## Custom Dialogs

While `ion-modal` is most often used for full-page views, cards, or sheets, it is also possible to use it for custom dialogs. This is useful if developers need an interface that is more complex than what components such as [ion-alert](/docs/api/alert) or [ion-loading](/docs/api/loading) provide.

A few things to keep in mind when creating custom dialogs:

- `ion-content` is intended to be used in full-page modals, cards, and sheets. If your custom dialog has a dynamic or unknown size, `ion-content` should not be used.
- Creating custom dialogs provides a way of ejecting from the default modal experience. As a result, custom dialogs should not be used with card or sheet modals.

## Event Handling

### Using `ionDragStart` and `ionDragEnd`

The `ionDragStart` event is emitted as soon as the user begins a dragging gesture on the modal. This event fires at the moment the user initiates contact with the handle or modal surface, before any actual displacement occurs. It is particularly useful for preparing the interface for a transition, such as hiding certain interactive elements (like headers or buttons) to ensure a smooth dragging experience.

The `ionDragEnd` event is emitted when the user completes the dragging gesture by releasing the modal. Like the move event, it includes the final `ModalDragEventDetail` object. This event is commonly used to finalize state changes once the modal has come to a rest.

`Console`
`Console messages will appear here when logged from the example above.`

### Using `ionDragMove`

The `ionDragMove` event is emitted continuously while the user is actively dragging the modal. This event provides a `ModalDragEventDetail` object containing real-time data, essential for creating highly responsive UI updates that react instantly to the user's touch. For example, the `progress` value can be used to dynamically darken a header's opacity as the modal is dragged upward.

`Console`
`Console messages will appear here when logged from the example above.`

## Interfaces

### ModalOptions

Below you will find all of the options available to you when using the `modalController` . These options should be supplied when calling `modalController.create()` .

```typescript
interface ModalOptions {
  component: any;
  componentProps?: { [key: string]: any };
  presentingElement?: HTMLElement;
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  cssClass?: string | string[];
  animated?: boolean;
  canDismiss?: boolean | ((data?: any, role?: string) => Promise<boolean>);

  mode?: 'ios' | 'md';
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;

  breakpoints?: number[];
  initialBreakpoint?: number;
  backdropBreakpoint?: number;
  handle?: boolean;
}
```

### ModalCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ModalCustomEvent extends CustomEvent {
  target: HTMLIonModalElement;
}
```

### ModalDragEventDetail

When using the `ionDragMove` and `ionDragEnd` events, the event detail contains the following properties:

```typescript
interface ModalDragEventDetail {
  /**
   * The current Y position of the modal.
   *
   * This can be used to determine how far the modal has been dragged.
   */
  currentY: number;
  /**
   * The change in Y position since the gesture started.
   *
   * This can be used to determine the direction of the drag.
   */
  deltaY: number;
  /**
   * The velocity of the drag in the Y direction.
   *
   * This can be used to determine how fast the modal is being dragged.
   */
  velocityY: number;
  /**
   * A number between 0 and 1.
   *
   * In a sheet modal, progress represents the relative position between
   * the lowest and highest defined breakpoints.
   *
   * In a card modal, it measures the relative position between the
   * bottom of the screen and the top of the modal when it is fully
   * open.
   *
   * This can be used to style content based on how far the modal has
   * been dragged.
   */
  progress: number;
  /**
   * If the modal is a sheet modal, this will be the breakpoint that
   * the modal will snap to if the user lets go of the modal at the
   * current moment.
   *
   * If it's a card modal, this property will not be included in the
   * event payload.
   *
   * This can be used to style content based on where the modal will
   * snap to upon release.
   */
  snapBreakpoint?: number;
}
```

## Accessibility

### Keyboard Interactions

| Key | Description 
| Esc | Dismisses the modal 

### Labels

Modals have a [`dialog`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) role. As a result, developers **must** properly label their modals. If the modal is using `ion-title` , the text inside can be used to label the modal itself by setting [`aria-labelledby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) on `ion-modal` . If the modal contains additional descriptive text, this text can be associated with the modal by using [`aria-describedby`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) .

### Screen Readers

Modals have the `aria-modal` attribute applied. This attribute can cause assistive technologies to limit navigation to the modal element's contents. As a result, using gestures that move to the next or previous items may not focus elements outside of the modal. This applies even when the backdrop is disabled in sheet modals using the `backdropBreakpoint` property.

Assistive technologies will not limit navigation to the modal element's contents if developers manually move focus. However, manually moving focus outside of a modal is not supported in Ionic for modals that have focus trapping enabled.

See [https://w3c.github.io/aria/#aria-modal](https://w3c.github.io/aria/#aria-modal) for more information.

### Focus Trapping

When a modal is presented, focus will be trapped inside of the presented modal. Users can focus other interactive elements inside the modal but will never be able to focus interactive elements outside the modal while the modal is presented. For applications that present multiple stacked modals, focus will be trapped on the modal that was presented last.

Sheet modals that have had their backdrop disabled by the `backdropBreakpoint` property are not subject to focus trapping.

### Sheet Modals

Sheet modals allow users to interact with content behind the modal when the `backdropBreakpoint` property is used. The backdrop will be disabled up to and including the specified `backdropBreakpoint` and will be enabled after it.

When the backdrop is disabled, users will be able to interact with elements outside the sheet modal using a pointer or keyboard. Assistive technologies may not focus outside the sheet modal by default due to the usage of `aria-modal` . We recommend avoiding features such as autofocus here as it can cause assistive technologies to jump between two interactive contexts without warning the user.

## Performance

### Mounting Inner Contents

The content of an inline `ion-modal` is unmounted when closed. If this content is expensive to render, developers can use the `keepContentsMounted` property to mount the content as soon as the modal is mounted. This can help optimize the responsiveness of your application as the inner contents will have already been mounted when the modal opens.

Developers should keep the following in mind when using `keepContentsMounted` :

- This feature should be used as a last resort in order to deal with existing performance problems. Try to identify and resolve performance bottlenecks before using this feature. Additionally, do not use this to anticipate performance problems.
- This feature is only needed when using a JavaScript Framework. Developers not using a framework can pass the contents to be rendered into the modal, and the contents will be rendered automatically.
- This feature only works with inline modals. Modals created with the `modalController` are not created ahead of time, so the inner contents are not created either.
- Any JavaScript Framework lifecycle hooks on the inner component will run as soon as the modal is mounted, not when the modal is presented.

## Properties

### animated

| **Description** | If `true` , the modal will animate. 
| **Attribute** | `animated` 
| **Type** | `boolean` 
| **Default** | `true` 

### backdropBreakpoint

| **Description** | A decimal value between 0 and 1 that indicates the point after which the backdrop will begin to fade in when using a sheet modal. Prior to this point, the backdrop will be hidden and the content underneath the sheet can be interacted with. This value is exclusive meaning the backdrop will become active after the value specified. 
| **Attribute** | `backdrop-breakpoint` 
| **Type** | `number` 
| **Default** | `0` 

### backdropDismiss

| **Description** | If `true` , the modal will be dismissed when the backdrop is clicked. 
| **Attribute** | `backdrop-dismiss` 
| **Type** | `boolean` 
| **Default** | `true` 

### breakpoints

| **Description** | The breakpoints to use when creating a sheet modal. Each value in the array must be a decimal between 0 and 1 where 0 indicates the modal is fully closed and 1 indicates the modal is fully open. Values are relative to the height of the modal, not the height of the screen. One of the values in this array must be the value of the `initialBreakpoint` property. For example: [0, .25, .5, 1] 
| **Attribute** | `undefined` 
| **Type** | `number[] ｜ undefined` 
| **Default** | `undefined` 

### canDismiss

| **Description** | Determines whether or not a modal can dismiss when calling the `dismiss` method.

If the value is `true` or the value's function returns `true` , the modal will close when trying to dismiss. If the value is `false` or the value's function returns `false` , the modal will not close when trying to dismiss.

See [https://ionicframework.com/docs/troubleshooting/runtime#accessing-this](https://ionicframework.com/docs/troubleshooting/runtime#accessing-this) if you need to access `this` from within the callback. 
| **Attribute** | `can-dismiss` 
| **Type** | `((data?: any, role?: string ｜ undefined) => Promise<boolean>) ｜ boolean` 
| **Default** | `true` 

### enterAnimation

| **Description** | Animation to use when the modal is presented. 
| **Attribute** | `undefined` 
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` 
| **Default** | `undefined` 

### expandToScroll

| **Description** | Controls whether scrolling or dragging within the sheet modal expands it to a larger breakpoint. This only takes effect when `breakpoints` and `initialBreakpoint` are set.

If `true` , scrolling or dragging anywhere in the modal will first expand it to the next breakpoint. Once fully expanded, scrolling will affect the content. If `false` , scrolling will always affect the content. The modal will only expand when dragging the header or handle. The modal will close when dragging the header or handle. It can also be closed when dragging the content, but only if the content is scrolled to the top. 
| **Attribute** | `expand-to-scroll` 
| **Type** | `boolean` 
| **Default** | `true` 

### focusTrap

| **Description** | If `true` , focus will not be allowed to move outside of this overlay. If `false` , focus will be allowed to move outside of the overlay.

In most scenarios this property should remain set to `true` . Setting this property to `false` can cause severe accessibility issues as users relying on assistive technologies may be able to move focus into a confusing state. We recommend only setting this to `false` when absolutely necessary.

Developers may want to consider disabling focus trapping if this overlay presents a non-Ionic overlay from a 3rd party library. Developers would disable focus trapping on the Ionic overlay when presenting the 3rd party overlay and then re-enable focus trapping when dismissing the 3rd party overlay and moving focus back to the Ionic overlay. 
| **Attribute** | `focus-trap` 
| **Type** | `boolean` 
| **Default** | `true` 

### handle

| **Description** | The horizontal line that displays at the top of a sheet modal. It is `true` by default when setting the `breakpoints` and `initialBreakpoint` properties. 
| **Attribute** | `handle` 
| **Type** | `boolean ｜ undefined` 
| **Default** | `undefined` 

### handleBehavior

| **Description** | The interaction behavior for the sheet modal when the handle is pressed.

Defaults to `"none"` , which means the modal will not change size or position when the handle is pressed. Set to `"cycle"` to let the modal cycle between available breakpoints when pressed.

Handle behavior is unavailable when the `handle` property is set to `false` or when the `breakpoints` property is not set (using a fullscreen or card modal). 
| **Attribute** | `handle-behavior` 
| **Type** | `"cycle" ｜ "none" ｜ undefined` 
| **Default** | `'none'` 

### htmlAttributes

| **Description** | Additional attributes to pass to the modal. 
| **Attribute** | `undefined` 
| **Type** | `undefined ｜ { [key: string]: any; }` 
| **Default** | `undefined` 

### initialBreakpoint

| **Description** | A decimal value between 0 and 1 that indicates the initial point the modal will open at when creating a sheet modal. This value must also be listed in the `breakpoints` array. 
| **Attribute** | `initial-breakpoint` 
| **Type** | `number ｜ undefined` 
| **Default** | `undefined` 

### isOpen

| **Description** | If `true` , the modal will open. If `false` , the modal will close. Use this if you need finer grained control over presentation, otherwise just use the modalController or the `trigger` property. Note: `isOpen` will not automatically be set back to `false` when the modal dismisses. You will need to do that in your code. 
| **Attribute** | `is-open` 
| **Type** | `boolean` 
| **Default** | `false` 

### keepContentsMounted

| **Description** | If `true` , the component passed into `ion-modal` will automatically be mounted when the modal is created. The component will remain mounted even when the modal is dismissed. However, the component will be destroyed when the modal is destroyed. This property is not reactive and should only be used when initially creating a modal.

Note: This feature only applies to inline modals in JavaScript frameworks such as Angular, React, and Vue. 
| **Attribute** | `keep-contents-mounted` 
| **Type** | `boolean` 
| **Default** | `false` 

### keyboardClose

| **Description** | If `true` , the keyboard will be automatically dismissed when the overlay is presented. 
| **Attribute** | `keyboard-close` 
| **Type** | `boolean` 
| **Default** | `true` 

### leaveAnimation

| **Description** | Animation to use when the modal is dismissed. 
| **Attribute** | `undefined` 
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` 
| **Default** | `undefined` 

### mode

| **Description** | The mode determines which platform styles to use.

This is a [virtual property](/docs/core-concepts/fundamentals#virtual-properties) that is set once during initialization and will not update if you change its value after the initial render. 
| **Attribute** | `mode` 
| **Type** | `"ios" ｜ "md"` 
| **Default** | `undefined` 

### presentingElement

| **Description** | The element that presented the modal. This is used for card presentation effects and for stacking multiple modals on top of each other. Only applies in iOS mode. 
| **Attribute** | `undefined` 
| **Type** | `HTMLElement ｜ undefined` 
| **Default** | `undefined` 

### showBackdrop

| **Description** | If `true` , a backdrop will be displayed behind the modal. This property controls whether or not the backdrop darkens the screen when the modal is presented. It does not control whether or not the backdrop is active or present in the DOM. 
| **Attribute** | `show-backdrop` 
| **Type** | `boolean` 
| **Default** | `true` 

### trigger

| **Description** | An ID corresponding to the trigger element that causes the modal to open when clicked. 
| **Attribute** | `trigger` 
| **Type** | `string ｜ undefined` 
| **Default** | `undefined` 

## Events

| Name | Description | Bubbles 
| `didDismiss` | Emitted after the modal has dismissed. Shorthand for ionModalDidDismiss. | `true` 
| `didPresent` | Emitted after the modal has presented. Shorthand for ionModalDidPresent. | `true` 
| `ionBreakpointDidChange` | Emitted after the modal breakpoint has changed. | `true` 
| `ionDragEnd` | Event that is emitted when the sheet modal or card modal gesture ends. | `true` 
| `ionDragMove` | Event that is emitted when the sheet modal or card modal gesture moves. | `true` 
| `ionDragStart` | Event that is emitted when the sheet modal or card modal gesture starts. | `true` 
| `ionModalDidDismiss` | Emitted after the modal has dismissed. | `true` 
| `ionModalDidPresent` | Emitted after the modal has presented. | `true` 
| `ionModalWillDismiss` | Emitted before the modal has dismissed. | `true` 
| `ionModalWillPresent` | Emitted before the modal has presented. | `true` 
| `willDismiss` | Emitted before the modal has dismissed. Shorthand for ionModalWillDismiss. | `true` 
| `willPresent` | Emitted before the modal has presented. Shorthand for ionModalWillPresent. | `true` 

## Methods

### dismiss

| **Description** | Dismiss the modal overlay after it has been presented. This is a no-op if the overlay has not been presented yet. If you want to remove an overlay from the DOM that was never presented, use the [remove](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method. 
| **Signature** | `dismiss(data?: any, role?: string) => Promise<boolean>` 
| **Parameters** | **data** : Any data to emit in the dismiss events.
**role** : The role of the element that is dismissing the modal. For example, `cancel` or `backdrop` . 

### getCurrentBreakpoint

| **Description** | Returns the current breakpoint of a sheet style modal 
| **Signature** | `getCurrentBreakpoint() => Promise<number ｜ undefined>` 

### onDidDismiss

| **Description** | Returns a promise that resolves when the modal did dismiss. 
| **Signature** | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>` 

### onWillDismiss

| **Description** | Returns a promise that resolves when the modal will dismiss. 
| **Signature** | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>` 

### present

| **Description** | Present the modal overlay after it has been created. 
| **Signature** | `present() => Promise<void>` 

### setCurrentBreakpoint

| **Description** | Move a sheet style modal to a specific breakpoint. 
| **Signature** | `setCurrentBreakpoint(breakpoint: number) => Promise<void>` 
| **Parameters** | **breakpoint** : The breakpoint value to move the sheet modal to. Must be a value defined in your `breakpoints` array. 

## CSS Shadow Parts

| Name | Description 
| `backdrop` | The `ion-backdrop` element. 
| `content` | The wrapper element for the default slot. 
| `handle` | The handle that is displayed at the top of the sheet modal when `handle="true"` . 

## CSS Custom Properties

- iOS
- MD

| Name | Description 
| `--backdrop-opacity` | Opacity of the backdrop 
| `--background` | Background of the modal content 
| `--border-color` | Border color of the modal content 
| `--border-radius` | Border radius of the modal content 
| `--border-style` | Border style of the modal content 
| `--border-width` | Border width of the modal content 
| `--height` | Height of the modal 
| `--max-height` | Maximum height of the modal 
| `--max-width` | Maximum width of the modal 
| `--min-height` | Minimum height of the modal 
| `--min-width` | Minimum width of the modal 
| `--width` | Width of the modal 

| Name | Description 
| `--backdrop-opacity` | Opacity of the backdrop 
| `--background` | Background of the modal content 
| `--border-color` | Border color of the modal content 
| `--border-radius` | Border radius of the modal content 
| `--border-style` | Border style of the modal content 
| `--border-width` | Border width of the modal content 
| `--height` | Height of the modal 
| `--max-height` | Maximum height of the modal 
| `--max-width` | Maximum width of the modal 
| `--min-height` | Minimum height of the modal 
| `--min-width` | Minimum width of the modal 
| `--width` | Width of the modal 

## Slots

| Name | Description 
|  | Content is placed inside of the `.modal-content` element.