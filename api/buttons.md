# ion-buttons

URL: https://ionicframework.com/docs/api/buttons

Version: v8
[scoped](/docs/reference/glossary#scoped)The Buttons component is a container element. It should be used inside of a [toolbar](/docs/api/toolbar) and can contain several types of buttons, including standard [buttons](/docs/api/button) , [menu buttons](/docs/api/menu-button) , and [back buttons](/docs/api/back-button) .

## Basic Usage

## Buttons Placement

Buttons can be positioned inside of the toolbar using a named slot. The below chart has a description of each slot.

| Slot | Description 
| `start` | Positions to the `left` of the content in LTR, and to the `right` in RTL. 
| `end` | Positions to the `right` of the content in LTR, and to the `left` in RTL. 
| `secondary` | Positions element to the `left` of the content in `ios` mode, and directly to the `right` in `md` mode. 
| `primary` | Positions element to the `right` of the content in `ios` mode, and to the far `right` in `md` mode. 

## Types of Buttons

A button in a toolbar is styled to be clear by default, but this can be changed using the [`fill`](/docs/api/button#fill) property on the button. The properties included on [back button](/docs/api/back-button) and [menu button](/docs/api/menu-button) in this example are for display purposes; see their respective documentation for proper usage.

## Collapsible Buttons

The `collapse` property can be set on the buttons to collapse them when the header collapses. This is typically used with [collapsible large titles](/docs/api/title#collapsible-large-titles) .

info
This feature is only available for iOS.

## Properties

### collapse

| **Description** | If true, buttons will disappear when its parent toolbar has fully collapsed if the toolbar is not the first toolbar. If the toolbar is the first toolbar, the buttons will be hidden and will only be shown once all toolbars have fully collapsed.

Only applies in `ios` mode with `collapse` set to `true` on `ion-header` .

Typically used for [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles) 
| **Attribute** | `collapse` 
| **Type** | `boolean` 
| **Default** | `false` 

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.