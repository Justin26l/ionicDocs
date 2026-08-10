# ion-accordion

URL: https://ionicframework.com/docs/api/accordion

Version: v8
[shadow](/docs/reference/glossary#shadow)Accordions provide collapsible sections in your content to reduce vertical space while providing a way of organizing and grouping information. All `ion-accordion` components should be grouped inside `ion-accordion-group` components.

## Basic Usage

## Toggle Accordions

Which accordion is open is controlled by setting the `value` property on `ion-accordion-group` . Setting this property allows developers to programmatically expand or collapse certain accordions.

## Listen for Accordion State Changes

caution
Most `ionChange` events emitted by other components such as [Input](/docs/api/input) and [Textarea](/docs/api/textarea) bubble. As a result, these events will bubble up and cause your `ionChange` listener on the Accordion Group to fire if the associated components are used inside of an Accordion.

When using other components that emit `ionChange` inside of Accordion it is recommended to have the `ionChange` callback on Accordion Group check the `target` key on the event passed to the callback to verify that `ionChange` is coming from the Accordion Group and not any descendants.

Developers can listen for the `ionChange` event to be notified when accordions expand or collapse.

`Console`
`Console messages will appear here when logged from the example above.`

## Multiple Accordions

Developers can allow multiple accordions to be open at once with the `multiple` property.

## Disabling Accordions

### Individual Accordion

Individual accordions can be disabled with the `disabled` property on `ion-accordion` .

### Accordion Group

The accordion group can be disabled with the `disabled` property on `ion-accordion-group` .

## Readonly Accordions

### Individual Accordion

Individual accordions can be disabled with the `readonly` property on `ion-accordion` .

### Accordion Group

The accordion group can be disabled with the `readonly` property on `ion-accordion-group` .

## Anatomy

### Header

The `header` slot is used as the toggle that will expand or collapse your accordion. We recommend you use an `ion-item` here to take advantage of the accessibility and theming functionalities.

When using `ion-item` in the `header` slot, the `ion-item` 's `button` prop is set to `true` and the `detail` prop is set to `false` . In addition, we will also automatically add a toggle icon to the `ion-item` . This icon will automatically be rotated when you expand or collapse the accordion. See Customizing Icons for more information.

### Content

The `content` slot is used as the part of the accordion that is revealed or hidden depending on the state of your accordion. You can place anything here except for another `ion-content` instance as only one instance of `ion-content` should be added per page.

## Customization

### Expansion Styles

There are two built in expansion styles: `compact` and `inset` . This expansion style is set via the `expand` property on `ion-accordion-group` .

When `expand="inset"` , the accordion group is given a border radius. On `md` mode, the entire accordion will shift down when it is opened.

### Advanced Expansion Styles

You can customize the expansion behavior by styling based on the accordion's state. There are four state classes applied to `ion-accordion` . Styling using these classes can allow you to create advanced state transitions:

| Class Name | Description 
| `.accordion-expanding` | Applied when the accordion is actively expanding 
| `.accordion-expanded` | Applied when the accordion is fully expanded 
| `.accordion-collapsing` | Applied when the accordion is actively collapsing 
| `.accordion-collapsed` | Applied when the accordion is fully collapsed 

If you need to target specific pieces of the accordion, we recommend targeting the element directly. For example, if you want to customize the ion-item in your header slot when the accordion is expanded, you can use the following selector:

```css
ion-accordion.accordion-expanding ion-item[slot="header"],
ion-accordion.accordion-expanded ion-item[slot="header"] {
  --color: red;
}
```

### Icons

When using an `ion-item` in the `header` slot, we automatically add an `ion-icon` . The type of icon used can be controlled by the `toggleIcon` property, and the slot it is added to can be controlled with the `toggleIconSlot` property.

If you would like to manage the icon yourself or use an icon that is not an `ion-icon` , you can add the `ion-accordion-toggle-icon` class to the icon element.

Regardless of which option you choose, the icon will automatically be rotated when you expand or collapse the accordion.

### Theming

Since `ion-accordion` acts as a shell around the header and content elements, you can easily theme the accordion however you would like. You can theme the header by targeting the slotted `ion-item` . Since you are using `ion-item` , you also have access to all of the [ion-item CSS Variables](/docs/api/item#css-custom-properties) and [ion-item Shadow Parts](/docs/api/item#css-shadow-parts) . Theming the content is also easily achieved by targeting the element that is in the `content` slot.

## Accessibility

### Animations

By default, animations are enabled when expanding or collapsing an accordion item. Animations will be automatically disabled when the `prefers-reduced-motion` media query is supported and set to `reduce` . For browsers that do not support this, animations can be disabled by setting the `animated` config in your Ionic Framework app.

### Keyboard Interactions

When used inside an `ion-accordion-group` , `ion-accordion` has full keyboard support for interacting with the component. The following table details what each key does:

| Key | Description 
| Space or Enter | When focus is on the accordion header, the accordion will collapse or expand depending on the state of the component. 
| Tab | Moves focus to the next focusable element. 
| Shift + Tab | Moves focus to the previous focusable element. 
| Down Arrow | - When focus is on an accordion header, moves focus to the next accordion header.
- When focus is on the last accordion header, moves focus to the first accordion header. 
| Up Arrow | - When focus is on an accordion header, moves focus to the previous accordion header.
- When focus is on the first accordion header, moves focus to the last accordion header. 
| Home | When focus is on an accordion header, moves focus to the first accordion header. 
| End | When focus is on an accordion header, moves focus to the last accordion header. 

## Performance

### Animations

The accordion animation works by knowing the height of the `content` slot when the animation starts. The accordion expects that this height will remain consistent throughout the animation. As a result, developers should avoid performing any operation that may change the height of the content during the animation.

For example, using [ion-img](/docs/api/img) may cause layout shifts as it lazily loads images. This means that as the animation plays, `ion-img` will load the image data, and the dimensions of `ion-img` will change to account for the loaded image data. This can result in the height of the `content` slot changing. Developers have a few options for avoiding this:

1. Use an `img` element without any lazy loading. `ion-img` always uses lazy loading, but `img` does not use lazy loading by default. This is the simplest option and works well if you have small images that do not significantly benefit from lazy loading.
2. Set a minimum width and height on `ion-img` . If you need to use lazy loading and know the dimensions of the images ahead of time (such as if you are loading icons of the same size), you can set the `ion-img` to have a minimum width or height using CSS. This gives developers the benefit of lazy loading while avoiding layout shifts. This works when using an `img` element with `loading="lazy"` too!
3. If neither of these options are applicable, developers may want to consider disabling animations altogether by using the `animated` property on [ion-accordion-group](/docs/api/accordion-group) .

## Properties

### disabled

| **Description** | If `true` , the accordion cannot be interacted with. 
| **Attribute** | `disabled` 
| **Type** | `boolean` 
| **Default** | `false` 

### mode

| **Description** | The mode determines which platform styles to use.

This is a [virtual property](/docs/core-concepts/fundamentals#virtual-properties) that is set once during initialization and will not update if you change its value after the initial render. 
| **Attribute** | `mode` 
| **Type** | `"ios" ｜ "md"` 
| **Default** | `undefined` 

### readonly

| **Description** | If `true` , the accordion cannot be interacted with, but does not alter the opacity. 
| **Attribute** | `readonly` 
| **Type** | `boolean` 
| **Default** | `false` 

### toggleIcon

| **Description** | The toggle icon to use. This icon will be rotated when the accordion is expanded or collapsed. 
| **Attribute** | `toggle-icon` 
| **Type** | `string` 
| **Default** | `chevronDown` 

### toggleIconSlot

| **Description** | The slot inside of `ion-item` to place the toggle icon. Defaults to `"end"` . 
| **Attribute** | `toggle-icon-slot` 
| **Type** | `"end" ｜ "start"` 
| **Default** | `'end'` 

### value

| **Description** | The value of the accordion. Defaults to an autogenerated value. 
| **Attribute** | `value` 
| **Type** | `string` 
| **Default** | `ion-accordion-${accordionIds++}` 

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name | Description 
| `content` | The wrapper element for the content slot. 
| `expanded` | The expanded element. Can be used in combination with the `header` and `content` parts (i.e. `::part(header expanded)` ). 
| `header` | The wrapper element for the header slot. 

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

| Name | Description 
| `content` | Content is placed below the header and is shown or hidden based on expanded state. 
| `header` | Content is placed at the top and is used to expand or collapse the accordion item.