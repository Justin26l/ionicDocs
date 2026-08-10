# ion-tab

URL: https://ionicframework.com/docs/api/tab

Version: v8
[shadow](/docs/reference/glossary#shadow)The tab component is a child component of [tabs](/docs/api/tabs) . Each tab can contain a top level navigation stack for an app or a single view. An app can have many tabs, all with their own independent navigation.

note
Angular, React, and Vue can only use this component when the `ion-tabs` component is configured for [basic usage](/docs/api/tabs#basic-usage) . When setting up tabs with routing, the `ion-tab` component cannot be used.

In JavaScript, this component can be used with the `ion-tabs` component configured for either [basic usage](/docs/api/tabs#basic-usage) or [usage with router](/docs/api/tabs#usage-with-router) .

See the [tabs documentation](/docs/api/tabs) for more details on configuring tabs.

## Properties

### component

| **Description** | The component to display inside of the tab. 
| **Attribute** | `component` 
| **Type** | `Function ｜ HTMLElement ｜ null ｜ string ｜ undefined` 
| **Default** | `undefined` 

### tab

| **Description** | A tab id must be provided for each `ion-tab` . It's used internally to reference the selected tab or by the router to switch between them. 
| **Attribute** | `tab` 
| **Type** | `string` 
| **Default** | `undefined` 

## Events

No events available for this component.

## Methods

### setActive

| **Description** | Set the active component for the tab 
| **Signature** | `setActive() => Promise<void>` 

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.