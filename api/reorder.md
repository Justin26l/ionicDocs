# ion-reorder

URL: https://ionicframework.com/docs/api/reorder

Version: v8
[shadow](/docs/reference/glossary#shadow)Reorder is a component that allows an item to be dragged to change its order within a group of items. It must be used within a [reorder group](/docs/api/reorder-group) to provide a visual drag and drop interface.

The reorder is the anchor used to drag and drop the items. Once the reorder is complete, the `ionReorderEnd` event will be dispatched from the reorder group and the `complete` method needs to be called.

## Basic Usage

The most basic example of a reorder is slotting it inside of an item. By default, the reorder functionality is disabled for a reorder group. It can be enabled by setting the `disabled` property on the reorder group to `false` . The reorder icon can then be used to drag and drop the items and reorder them.

`Console`
`Console messages will appear here when logged from the example above.`

## Toggling Reorder

In some cases, it may be desired to have the option to toggle the reorder functionality. This can be done by making the `disabled` property reactive, based on a function or variable.

`Console`
`Console messages will appear here when logged from the example above.`

## Custom Reorder Icon

The reorder component uses a reorder icon with three lines on iOS and two lines on Material Design. This can be customized by adding an [Icon](https://ionic.io/ionicons) component inside of the reorder with any of the available Ionicons.

`Console`
`Console messages will appear here when logged from the example above.`

## Reorder Wrapper

Reorder can also be used as a wrapper around an item, making the item itself the anchor. Click anywhere on an item below and drag it to reorder the list.

`Console`
`Console messages will appear here when logged from the example above.`

## Updating Data

When the `complete` method is called on the reorder group with no parameters, the DOM nodes will be reordered. If the items are rendered from an array of data that needs to be sorted, this can result in the data and DOM being out of sync.

In order to sort the array upon completion of the reorder, the array should be passed as a parameter to the `complete` method. The `complete` method will sort the array and return it so it can be reassigned. Note that passing the array will prevent Ionic from reordering the DOM nodes.

In some cases, it may be necessary for an app to reorder both the array and the DOM nodes on its own. If this is required, `false` should be passed as a parameter to the `complete` method. This will prevent Ionic from reordering any DOM nodes inside of the reorder group.

Regardless of the approach taken, a stable identity should be provided to reorder items if provided in a loop. This means using `track` for Angular, and `key` for React and Vue.

`Console`
`Console messages will appear here when logged from the example above.`

## Event Handling

### Using `ionReorderStart` and `ionReorderEnd`

The `ionReorderStart` event is emitted when the user begins a reorder gesture. This event fires when the user taps and holds an item, before any movement occurs. This is useful for preparing the UI for the reorder operation, such as hiding certain elements or updating the visual state of items. For example, icons in list items can be hidden while they are being dragged and shown again when the reorder is complete.

The `ionReorderEnd` event is emitted when the user completes the reorder gesture. This occurs when the user releases the item they are dragging, for example by lifting their finger on a touch screen or releasing the mouse button. The event includes the `from` and `to` indices of the item, as well as the `complete` method that should be called to finalize the reorder operation. The `from` index will always be the position of the item when the gesture started, while the `to` index will be its final position. This event will fire even if no items have changed position, in which case the `from` and `to` indices will be the same.

`Console`
`Console messages will appear here when logged from the example above.`

### Using `ionReorderMove`

The `ionReorderMove` event is emitted continuously during the reorder gesture as the user drags an item. The event includes the `from` and `to` indices of the item. Unlike `ionReorderEnd` , the `from` index in this event represents the last known position of the item (which updates as the item moves), while the `to` index represents its current position. If the item has not changed position since the last event, the `from` and `to` indices will be the same. This event is useful for tracking position changes during the drag operation. For example, the ranking or numbering of items can be updated in real-time as they are being dragged to maintain a logical ascending order.

warning
Do not call the `complete` method during the `ionReorderMove` event as it can break the gesture.

`Console`
`Console messages will appear here when logged from the example above.`

## Usage with Virtual Scroll

Reorder requires a scroll container to work properly. When using a virtual scrolling solution, a custom scroll target needs to be provided. Scrolling on the content needs to be disabled and the `.ion-content-scroll-host` class needs to be added to the element responsible for scrolling.

`Console`
`Console messages will appear here when logged from the example above.`

## Properties

No properties available for this component.

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name | Description 
| `icon` | The icon of the reorder handle (uses ion-icon). 

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.