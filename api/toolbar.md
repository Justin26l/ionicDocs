# ion-toolbar

URL: https://ionicframework.com/docs/api/toolbar

Version: v8
[shadow](/docs/reference/glossary#shadow)Toolbars are generally positioned above or below content and provide content and actions for the current screen. When placed within the [content](/docs/api/content) , toolbars will scroll with the content.

Toolbars can contain several different components including titles, buttons, icons, back buttons, menu buttons, searchbars, segments, progress bars, and more.

## Basic Usage

It is recommended to put a toolbar inside of a [header](/docs/api/header) or [footer](/docs/api/footer) for proper positioning. When a toolbar is placed in a header it will appear fixed at the top of the content. When it is placed in a footer it will appear fixed at the bottom. Fullscreen content will scroll behind a toolbar in a header or footer. A [title](/docs/api/title) component can be used to display text inside of the toolbar.

## Buttons in Toolbars

Buttons placed in a toolbar should be placed inside of the [buttons](/docs/api/buttons) component. The buttons component can be positioned inside of the toolbar using a named slot . The `"primary"` and `"secondary"` slots behave differently in `ios` and `md` mode.

The buttons component can wrap a standard [button](/docs/api/button) , [back button](/docs/api/back-button) , [menu button](/docs/api/menu-button) , or several of any of them. A button in a toolbar is styled to be clear by default, but this can be changed using the [`fill`](/docs/api/button#fill) property on the button. The properties included on back button and menu button in this example are for display purposes; see their respective documentation for proper usage.

## Searchbars in Toolbars

A [searchbar](/docs/api/searchbar) can be placed inside of a toolbar to search through the content. It should be the only child component of the toolbar, and will take up the full width and height.

## Segments in Toolbars

[Segments](/docs/api/segment) are generally used in toolbars to toggle between two different content views on the same page. They can be placed in a toolbar with other components, such as buttons, but should not be placed alongside a title.

## Progress Bars in Toolbars

A [progress bar](/docs/api/progress-bar) is used as a loading indicator to show an ongoing process in an app. Progress bars can be placed with any other components inside of a toolbar as they will align with the bottom of the toolbar.

## Theming

### Colors

### CSS Custom Properties

## Borders

In `md` mode, the `<ion-header>` will receive a box-shadow on the bottom, and the `<ion-footer>` will receive a box-shadow on the top. In `ios` mode, the `<ion-header>` will receive a border on the bottom, and the `<ion-footer>` will receive a border on the top.

## Properties

### color

| **Description** | The color to use from your application's color palette. Default options are: `"primary"` , `"secondary"` , `"tertiary"` , `"success"` , `"warning"` , `"danger"` , `"light"` , `"medium"` , and `"dark"` . For more information on colors, see [theming](/docs/theming/basics) . 
| **Attribute** | `color` 
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined` 
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

No public methods available for this component.

## CSS Shadow Parts

| Name | Description 
| `background` | The background of the toolbar, covering the entire area behind the toolbar content. 
| `container` | The container that wraps all toolbar content, including the default slot and named slot content. 
| `content` | The container for the default slot, wrapping content provided without a named slot. 

## CSS Custom Properties

- iOS
- MD

| Name | Description 
| `--background` | Background of the toolbar 
| `--border-color` | Color of the toolbar border 
| `--border-style` | Style of the toolbar border 
| `--border-width` | Width of the toolbar border 
| `--color` | Color of the toolbar text 
| `--min-height` | Minimum height of the toolbar 
| `--opacity` | Opacity of the toolbar background 
| `--padding-bottom` | Bottom padding of the toolbar 
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the toolbar 
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the toolbar 
| `--padding-top` | Top padding of the toolbar 

| Name | Description 
| `--background` | Background of the toolbar 
| `--border-color` | Color of the toolbar border 
| `--border-style` | Style of the toolbar border 
| `--border-width` | Width of the toolbar border 
| `--color` | Color of the toolbar text 
| `--min-height` | Minimum height of the toolbar 
| `--opacity` | Opacity of the toolbar background 
| `--padding-bottom` | Bottom padding of the toolbar 
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the toolbar 
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the toolbar 
| `--padding-top` | Top padding of the toolbar 

## Slots

| Name | Description 
|  | Content is placed between the named slots if provided without a slot. 
| `end` | Content is placed to the right of the toolbar text in LTR, and to the left in RTL. 
| `primary` | Content is placed to the right of the toolbar text in `ios` mode, and to the far right in `md` mode. 
| `secondary` | Content is placed to the left of the toolbar text in `ios` mode, and directly to the right in `md` mode. 
| `start` | Content is placed to the left of the toolbar text in LTR, and to the right in RTL.