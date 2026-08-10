# ion-infinite-scroll-content

URL: https://ionicframework.com/docs/api/infinite-scroll-content

Version: v8
The `ion-infinite-scroll-content` component is the default child used by the `ion-infinite-scroll` . It displays an infinite scroll spinner that looks best based on the platform and changes the look depending on the infinite scroll's state. The default spinner can be changed and text can be added by setting the `loadingSpinner` and `loadingText` properties.

For more information as well as usage, see the [Infinite Scroll Documentation](/docs/api/infinite-scroll#infinite-scroll-content) .

## Properties

### loadingSpinner

| **Description** | An animated SVG spinner that shows while loading. 
| **Attribute** | `loading-spinner` 
| **Type** | `"bubbles" ｜ "circles" ｜ "circular" ｜ "crescent" ｜ "dots" ｜ "lines" ｜ "lines-sharp" ｜ "lines-sharp-small" ｜ "lines-small" ｜ null ｜ undefined` 
| **Default** | `undefined` 

### loadingText

| **Description** | Optional text to display while loading. `loadingText` can accept either plaintext or HTML as a string. To display characters normally reserved for HTML, they must be escaped. For example `<Ionic>` would become `&lt;Ionic&gt;`

For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)

This property accepts custom HTML as a string. Content is parsed as plaintext by default. `innerHTMLTemplatesEnabled` must be set to `true` in the Ionic config before custom HTML can be used. 
| **Attribute** | `loading-text` 
| **Type** | `IonicSafeString ｜ string ｜ undefined` 
| **Default** | `undefined` 

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