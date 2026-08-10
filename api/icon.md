# ion-icon

URL: https://ionicframework.com/docs/api/icon

Version: v8
Icon is a simple component made available through the [Ionicons](https://ionic.io/ionicons) library, which comes pre-packaged by default with all Ionic Framework applications. It can be used to display any icon from the Ionicons set, or a custom SVG. It also has support for styling such as size and color.

For a list of all available icons, see [ionic.io/ionicons](https://ionic.io/ionicons) . For more information including styling and custom SVG usage, see [the Usage page](https://ionic.io/ionicons/usage) .

## Basic Usage

## Accessibility

Icons that are purely decorative content should have `aria-hidden="true"` . This will not visually hide the icon, but it will hide the element from assistive technology.

```html
<ion-icon name="heart" aria-hidden="true"></ion-icon>
```

If the icon is interactive, it should have alternate text defined by adding an `aria-label` .

```html
<ion-icon name="heart" aria-label="Favorite"></ion-icon>
```

Alternatively, if the icon is inside of another element that it is describing, that element should have the `aria-label` added to it, and the icon should be hidden using `aria-hidden` .

```html
<ion-button aria-label="Favorite">
  <ion-icon name="heart" aria-hidden="true"></ion-icon>
</ion-button>
```