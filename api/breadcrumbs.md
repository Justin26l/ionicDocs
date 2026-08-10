# ion-breadcrumbs

URL: https://ionicframework.com/docs/api/breadcrumbs

Version: v8
[shadow](/docs/reference/glossary#shadow)Breadcrumbs are navigation items that are used to indicate where a user is on an app or site. They should be used for large sites and apps with hierarchically arranged pages. Breadcrumbs can be collapsed based on the maximum number that can show, and the collapsed indicator can be clicked on to present a popover with more information or expand the collapsed breadcrumbs.

## Basic Usage

## Using Icons

### Icons on Items

### Custom Separators

## Collapsing Items

### Max Items

If there are more items than the value of `maxItems` , the breadcrumbs will be collapsed. By default, only the first and last items will be shown.

### Items Before or After Collapse

Once the items are collapsed, the number of items to show can be controlled by the `itemsBeforeCollapse` and `itemsAfterCollapse` properties.

### Collapsed Indicator Click -- Expand Breadcrumbs

Clicking the collapsed indicator will fire the `ionCollapsedClick` event. This can be used to, for example, expand the breadcrumbs.

### Collapsed Indicator Click -- Present Popover

The `ionCollapsedClick` event can also be used to present an overlay (in this case, an `ion-popover` ) showing the hidden breadcrumbs.

## Theming

### Colors

### CSS Custom Properties

## Properties

### color

| **Description** | The color to use from your application's color palette. Default options are: `"primary"` , `"secondary"` , `"tertiary"` , `"success"` , `"warning"` , `"danger"` , `"light"` , `"medium"` , and `"dark"` . For more information on colors, see [theming](/docs/theming/basics) . 
| **Attribute** | `color` 
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined` 
| **Default** | `undefined` 

### itemsAfterCollapse

| **Description** | The number of breadcrumbs to show after the collapsed indicator. If `itemsBeforeCollapse` + `itemsAfterCollapse` is greater than `maxItems` , the breadcrumbs will not be collapsed. 
| **Attribute** | `items-after-collapse` 
| **Type** | `number` 
| **Default** | `1` 

### itemsBeforeCollapse

| **Description** | The number of breadcrumbs to show before the collapsed indicator. If `itemsBeforeCollapse` + `itemsAfterCollapse` is greater than `maxItems` , the breadcrumbs will not be collapsed. 
| **Attribute** | `items-before-collapse` 
| **Type** | `number` 
| **Default** | `1` 

### maxItems

| **Description** | The maximum number of breadcrumbs to show before collapsing. 
| **Attribute** | `max-items` 
| **Type** | `number ｜ undefined` 
| **Default** | `undefined` 

### mode

| **Description** | The mode determines which platform styles to use.

This is a [virtual property](/docs/core-concepts/fundamentals#virtual-properties) that is set once during initialization and will not update if you change its value after the initial render. 
| **Attribute** | `mode` 
| **Type** | `"ios" ｜ "md"` 
| **Default** | `undefined` 

## Events

| Name | Description | Bubbles 
| `ionCollapsedClick` | Emitted when the collapsed indicator is clicked on. | `true` 

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.