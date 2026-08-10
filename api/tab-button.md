# ion-tab-button

URL: https://ionicframework.com/docs/api/tab-button

Version: v8
[shadow](/docs/reference/glossary#shadow)A tab button is a UI component that is placed inside of a [tab bar](/docs/api/tab-bar) . The tab button can specify the layout of the icon and label and connect to a [tab view](/docs/api/tab) .

See the [tabs documentation](/docs/api/tabs) for more details on configuring tabs.

## Usage

- Angular
- Javascript
- React
- Vue

```html
<ion-tabs>
  <!-- Tab bar -->
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="schedule">
      <ion-icon name="calendar" aria-hidden="true"></ion-icon>
      <ion-label>Schedule</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="speakers">
      <ion-icon name="person-circle" aria-hidden="true"></ion-icon>
      <ion-label>Speakers</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="map">
      <ion-icon name="map" aria-hidden="true"></ion-icon>
      <ion-label>Map</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="about">
      <ion-icon name="information-circle" aria-hidden="true"></ion-icon>
      <ion-label>About</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

```html
<ion-tabs>
  <!-- Tab views -->
  <ion-tab tab="schedule">
    <ion-router-outlet name="schedule"></ion-router-outlet>
  </ion-tab>

  <ion-tab tab="speakers">
    <ion-router-outlet name="speakers"></ion-router-outlet>
  </ion-tab>

  <ion-tab tab="map">
    <ion-router-outlet name="map"></ion-router-outlet>
  </ion-tab>

  <ion-tab tab="about">
    <ion-router-outlet name="about"></ion-router-outlet>
  </ion-tab>

  <!-- Tab bar -->
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="schedule" href="/app/tabs/(schedule:schedule)">
      <ion-icon name="calendar" aria-hidden="true"></ion-icon>
      <ion-label>Schedule</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="speakers" href="/app/tabs/(speakers:speakers)">
      <ion-icon name="person-circle" aria-hidden="true"></ion-icon>
      <ion-label>Speakers</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="map" href="/app/tabs/(map:map)">
      <ion-icon name="map" aria-hidden="true"></ion-icon>
      <ion-label>Map</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="about" href="/app/tabs/(about:about)">
      <ion-icon name="information-circle" aria-hidden="true"></ion-icon>
      <ion-label>About</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```

```tsx
import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';

export const TabButtonExample: React.FC = () => (
  <IonContent>
    <IonTabs>
      {/*-- Tab bar --*/}
      <IonTabBar slot="bottom">
        <IonTabButton tab="schedule">
          <IonIcon icon={calendar} aria-hidden="true" />
          <IonLabel>Schedule</IonLabel>
        </IonTabButton>

        <IonTabButton tab="speakers">
          <IonIcon icon={personCircle} aria-hidden="true" />
          <IonLabel>Speakers</IonLabel>
        </IonTabButton>

        <IonTabButton tab="map">
          <IonIcon icon={map} aria-hidden="true" />
          <IonLabel>Map</IonLabel>
        </IonTabButton>

        <IonTabButton tab="about">
          <IonIcon icon={informationCircle} aria-hidden="true" />
          <IonLabel>About</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonContent>
);
```

```html
<template>
  <ion-tabs>
    <!-- Tab bar -->
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="schedule" href="/tabs/schedule">
        <ion-icon :icon="calendar" aria-hidden="true"></ion-icon>
        <ion-label>Schedule</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="speakers" href="/tabs/speakers">
        <ion-icon :icon="personCircle" aria-hidden="true"></ion-icon>
        <ion-label>Speakers</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="map" href="/tabs/map">
        <ion-icon :icon="map" aria-hidden="true"></ion-icon>
        <ion-label>Map</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="about" href="/tabs/about">
        <ion-icon :icon="informationCircle" aria-hidden="true"></ion-icon>
        <ion-label>About</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script setup lang="ts">
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/vue';
import { calendar, informationCircle, map, personCircle } from 'ionicons/icons';
</script>
```

## Properties

### disabled

| **Description** | If `true` , the user cannot interact with the tab button. 
| **Attribute** | `disabled` 
| **Type** | `boolean` 
| **Default** | `false` 

### download

| **Description** | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). 
| **Attribute** | `download` 
| **Type** | `string ｜ undefined` 
| **Default** | `undefined` 

### href

| **Description** | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered. 
| **Attribute** | `href` 
| **Type** | `string ｜ undefined` 
| **Default** | `undefined` 

### layout

| **Description** | Set the layout of the text and icon in the tab bar. It defaults to `"icon-top"` . 
| **Attribute** | `layout` 
| **Type** | `"icon-bottom" ｜ "icon-end" ｜ "icon-hide" ｜ "icon-start" ｜ "icon-top" ｜ "label-hide" ｜ undefined` 
| **Default** | `undefined` 

### mode

| **Description** | The mode determines which platform styles to use.

This is a [virtual property](/docs/core-concepts/fundamentals#virtual-properties) that is set once during initialization and will not update if you change its value after the initial render. 
| **Attribute** | `mode` 
| **Type** | `"ios" ｜ "md"` 
| **Default** | `undefined` 

### rel

| **Description** | Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types) . 
| **Attribute** | `rel` 
| **Type** | `string ｜ undefined` 
| **Default** | `undefined` 

### selected

| **Description** | The selected tab component 
| **Attribute** | `selected` 
| **Type** | `boolean` 
| **Default** | `false` 

### tab

| **Description** | A tab id must be provided for each `ion-tab` . It's used internally to reference the selected tab or by the router to switch between them. 
| **Attribute** | `tab` 
| **Type** | `string ｜ undefined` 
| **Default** | `undefined` 

### target

| **Description** | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"` , `"_self"` , `"_parent"` , `"_top"` . 
| **Attribute** | `target` 
| **Type** | `string ｜ undefined` 
| **Default** | `undefined` 

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name | Description 
| `native` | The native HTML anchor element that wraps all child elements. 

## CSS Custom Properties

- iOS
- MD

| Name | Description 
| `--background` | Background of the tab button 
| `--background-focused` | Background of the tab button when focused with the tab key 
| `--background-focused-opacity` | Opacity of the tab button background when focused with the tab key 
| `--color` | Color of the tab button 
| `--color-focused` | Color of the tab button when focused with the tab key 
| `--color-selected` | Color of the selected tab button 
| `--padding-bottom` | Bottom padding of the tab button 
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the tab button 
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the tab button 
| `--padding-top` | Top padding of the tab button 
| `--ripple-color` | Color of the button ripple effect 

| Name | Description 
| `--background` | Background of the tab button 
| `--background-focused` | Background of the tab button when focused with the tab key 
| `--background-focused-opacity` | Opacity of the tab button background when focused with the tab key 
| `--color` | Color of the tab button 
| `--color-focused` | Color of the tab button when focused with the tab key 
| `--color-selected` | Color of the selected tab button 
| `--padding-bottom` | Bottom padding of the tab button 
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the tab button 
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the tab button 
| `--padding-top` | Top padding of the tab button 
| `--ripple-color` | Color of the button ripple effect 

## Slots

No slots available for this component.