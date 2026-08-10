# ion-list

URL: https://ionicframework.com/docs/api/list

Version: v8
Lists are made up of multiple rows of [items](/docs/api/item) which can contain text, buttons, toggles, icons, thumbnails, and much more. Lists generally contain items with similar data content, such as images and text.

Lists support several interactions including swiping items to reveal options, dragging to [reorder](/docs/api/reorder) items within the list, and deleting items.

## Basic Usage

## Inset List

Adding the `inset` property to a list will apply margin around the list. In `ios` mode it will also add rounded corners to the list.

## List Lines

Adding the `lines` property to a list will adjust the bottom borders of all of the items in the list. Setting it to `"full"` will display full width borders, `"inset"` will display borders adjusted with left padding, and `"none"` will show no borders. If the `lines` property is set on an item in a list, that will take priority over the property on the list.

## Properties

### inset

| **Description** | If `true` , the list will have margin around it and rounded corners. 
| **Attribute** | `inset` 
| **Type** | `boolean` 
| **Default** | `false` 

### lines

| **Description** | How the bottom border should be displayed on all items. 
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

### closeSlidingItems

| **Description** | If `ion-item-sliding` are used inside the list, this method closes any open sliding item.

Returns `true` if an actual `ion-item-sliding` is closed. 
| **Signature** | `closeSlidingItems() => Promise<boolean>` 

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.