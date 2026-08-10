# ion-nav-link

URL: https://ionicframework.com/docs/api/nav-link

Version: v8
A navigation link is used to navigate to a specified component. The component can be navigated to by going `forward` , `back` or as a `root` component.

It is the element form of calling the `push()` , `pop()` , and `setRoot()` methods on the navigation controller.

See the [nav](/docs/api/nav#using-navlink) documentation for more information.

## Properties

### component

| **Description** | Component to navigate to. Only used if the `routerDirection` is `"forward"` or `"root"` . 
| **Attribute** | `component` 
| **Type** | `Function ｜ HTMLElement ｜ ViewController ｜ null ｜ string ｜ undefined` 
| **Default** | `undefined` 

### componentProps

| **Description** | Data you want to pass to the component as props. Only used if the `"routerDirection"` is `"forward"` or `"root"` . 
| **Attribute** | `undefined` 
| **Type** | `T ｜ undefined` 
| **Default** | `undefined` 

### routerAnimation

| **Description** | The transition animation when navigating to another page. 
| **Attribute** | `undefined` 
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` 
| **Default** | `undefined` 

### routerDirection

| **Description** | The transition direction when navigating to another page. 
| **Attribute** | `router-direction` 
| **Type** | `"back" ｜ "forward" ｜ "root"` 
| **Default** | `'forward'` 

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