# ion-datetime-button

URL: https://ionicframework.com/docs/api/datetime-button

Version: v8
[shadow](/docs/reference/glossary#shadow)Datetime Button links with a [Datetime](/docs/api/datetime) component to display the formatted date and time. It also provides buttons to present the datetime in a modal, popover, and more.

## Overview

Datetime Button should be used when space is constrained. This component displays buttons which show the current date and time values. When the buttons are tapped, the date or time pickers open in the overlay.

When using Datetime Button with a JavaScript framework such as Angular, React, or Vue be sure to use the [keepContentsMounted property on ion-modal](/docs/api/modal#keepcontentsmounted) or the [keepContentsMounted property on ion-popover](/docs/api/popover#keepcontentsmounted) . This allows the linked datetime instance to be mounted even if the overlay has not been presented yet.

## Basic Usage

## Localization

The localized text on `ion-datetime-button` is determined by the `locale` property on the associated `ion-datetime` instance. See [Datetime Localization](/docs/api/datetime#localization) for more details.

## Format Options

You can customize the format of the date and time in a Datetime Button by providing `formatOptions` on the associated Datetime instance. See [Datetime Format Options](/docs/api/datetime#format-options) for more details.

## Usage with Modals and Popovers

`ion-datetime-button` must be associated with a mounted `ion-datetime` instance. As a result, [Inline Modals](/docs/api/modal#inline-modals-recommended) and [Inline Popovers](/docs/api/popover#inline-popovers) with the `keepContentsMounted` property set to `true` must be used.

## Properties

### color

| **Description** | The color to use from your application's color palette. Default options are: `"primary"` , `"secondary"` , `"tertiary"` , `"success"` , `"warning"` , `"danger"` , `"light"` , `"medium"` , and `"dark"` . For more information on colors, see [theming](/docs/theming/basics) . 
| **Attribute** | `color` 
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined` 
| **Default** | `'primary'` 

### datetime

| **Description** | The ID of the `ion-datetime` instance associated with the datetime button. 
| **Attribute** | `datetime` 
| **Type** | `string ｜ undefined` 
| **Default** | `undefined` 

### disabled

| **Description** | If `true` , the user cannot interact with the button. 
| **Attribute** | `disabled` 
| **Type** | `boolean` 
| **Default** | `false` 

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

| Name | Description 
| `native` | The native HTML button that wraps the slotted text. 

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

| Name | Description 
| `date-target` | Content displayed inside of the date button. 
| `time-target` | Content displayed inside of the time button.