# ion-item

URL: https://ionicframework.com/docs/api/item

Version: v8
[shadow](/docs/reference/glossary#shadow)Items are elements that can contain text, icons, avatars, images, inputs, and any other native or custom elements. Items should only be used as rows in a [List](/docs/api/list) with other items. Items can be swiped, deleted, reordered, edited, and more.

## Basic Usage

Items left align text and wrap when the text is wider than the item. We can modify this behavior using the CSS Utilities provided by Ionic Framework, such as using `.ion-text-nowrap` in the below example. See the [CSS Utilities Documentation](/docs/layout/css-utilities) for more classes that can be added to an item to transform the text.

## Content Types

While items in a list take many forms, they typically support 5 different content types: supporting visuals, text, metadata, actions, and controls. However, not all of these content types should be used together at the same time. The following guide shows the different content types as well as how to properly utilize them in an application.

### Supporting Visuals

Supporting visuals are decorative icons or other adornments for an item. Common examples of supporting visuals are [Avatars](/docs/api/avatar) , [Icons](/docs/api/icon) , and [Thumbnails](/docs/api/thumbnail) . Since this content is not required to understand the intent of the item, it is typically hidden from screen readers using `aria-hidden="true"` .

If a visual is required to interact with the item, such as an icon button, then the visual is an action not a supporting visual.

Supporting visuals should be rendered in a consistent manner. This makes the information in each item easier to parse.

![A list with several items. Each item has an icon and visible text describing the item. The icon in each item is rendered at the start of the line.](/docs/img/item/visuals-do.jpg)
Do
Align visuals on the same side in a list

![A list with several items. Each item has an icon and visible text describing the item. Some icons are rendered at the start of the line, and some icons are rendered at the end of the line](/docs/img/item/visuals-do-not.jpg)
Don't
Don't render visuals with different alignments in the same list

In the example below, we are creating two lists with supporting visuals. The first list uses icons, and the second list uses avatars. The visuals are decorative, so they all have `aria-hidden="true"` . Additionally, they are presented consistently in the `start` slot.

### Text

The text content type includes form control labels or other visible text. This text serves to indicate the intent of the item. Try to keep the text short and to the point.

If you find that you need a few more sentences to clarify the item's purpose, consider moving the additional sentences to a [Note](/docs/api/note) at the bottom of the list. Adding the item to its own list makes it clear which item the text is associated with.

![A list with an item that contains a checked checkbox indicating the user wants to receive emails. Text describing how often the user will receive emails as well as how to unsubscribe from emails is placed underneath the list.](/docs/img/item/long-text-do.jpg)
Do
Move long text outside of the list

![A list with an item that contains a checked checkbox indicating the user wants to receive emails. Text describing how often the user will receive emails as well as how to unsubscribe from emails is placed as a single paragraph inline with the checkbox, making the text hard to read and increasing the height of the item.](/docs/img/item/long-text-do-not.jpg)
Don't
Don't try to fit long text in an item

In the example below, we are creating a list with different types of text. The "First Name" and "Last Name" labels serve to indicate what to type into the text inputs.

The "Allow Notifications" label on the toggle has additional text underneath it that notes users can disable notifications. Since this text is short, it is placed inside of the item.

Below that list is another list containing a textarea with a [Note](/docs/api/note) containing long text underneath. The textarea was placed in its own list to make it apparent that the long text is associated with the textarea and not any other fields.

### Metadata

Metadata provides additional context for an item such as status text or counts. Components like [Badge](/docs/api/badge) or [Note](/docs/api/note) are great ways of showing metadata.

Limit the amount of metadata you include to only the most relevant information.

![A list that contains several items, each representing a different to-do list. A count of how many tasks in each to-do list is placed at the end of each item.](/docs/img/item/metadata-relevant-do.jpg)
Do
Add only the most important metadata

![A list that contains several items, each representing a different to-do list. Two counts are placed at the end of each item: One count that states the total number of tasks, and another count that states the total number of tasks that are due today.](/docs/img/item/metadata-relevant-do-not.jpg)
Don't
Don't add too much metadata as it can overwhelm or confuse the user.

Developers should also consider how important the metadata is. Drawing attention to the metadata may be helpful for the user or it may distract them from the more important information depending on the use case.

![A list that contains several items, each representing a different to-do list. A count of how many tasks in each to-do list is placed at the end of each item.](/docs/img/item/metadata-relevant-do.jpg)
Do
Prioritize the most important content.

![A list that contains several items, each representing a different to-do list. A count of how many tasks in each to-do list is placed at the end of each item. However, the count is highlighted in blue which draws the user's attention away from the name of the to-do list.](/docs/img/item/metadata-important-caution.jpg)
Caution
Prioritized metadata may distract from other important content.

In the example below, we are creating two lists with different kinds of metadata. The first list uses [Note](/docs/api/note) to show how many tasks are in each to-do list.

The second list mimics the iOS Mail app to show an inbox. This list makes use of custom metadata including an "unread message" indicator in the "start" slot as well as a timestamp and custom detail icon in the "end" slot. The "unread message" indicator is highlighted in blue to draw the user's attention to the unread messages, while the timestamp is more subtle.

### Actions

Actions are interactive elements that do something when you activate them. An item can have multiple actions displayed on a line. However, developers should ensure that each action's tap target is large enough to be usable.

Developers should avoid creating [nested interactives](https://dequeuniversity.com/rules/axe/4.4/nested-interactive) which can break the user experience with screen readers. For example, developers should avoid adding a button inside the main content of the Item if the `button` property is set to `true` .

Actions can be added by using the [Item Sliding](/docs/api/item-sliding) component. Actions can also be placed directly inside of the Item without the use of Item Sliding, but this should be limited to no more than 2 actions.

![A list that contains several items, each representing a contact. Each item has text that states the contact's name as well as several actions including pinning the contact, sharing the contact, and deleting the contact. These actions are revealed by swiping on the item.](/docs/img/item/actions-do.jpg)
Do
Use an [Item Sliding](/docs/api/item-sliding) to reveal multiple actions by swiping on the Item.

![A list that contains several items, each representing a contact. Each item has text that states the contact's name as well as several actions including pinning the contact, sharing the contact, and deleting the contact. The actions are placed directly on the item. Since there are so many actions, some of the text is cut off.](/docs/img/item/actions-do-not.jpg)
Don't
Don't put more than 2 actions within an Item.

In the example below, we are creating a list of contacts. Each item is a stubbed button intended to bring you to the full contact page for that item. There are additional actions associated with each item that users can reveal by swiping on the item.

### Controls

Controls are form components such as checkboxes, inputs, radios, and more. Each item in a list should have at most two controls due to screen space constraints.

Metadata such as helper text or character counts should not be used on form controls in list views. If such metadata is needed, the form control should be placed outside of a list. [Filled Inputs](/docs/api/input#filled-inputs) are a great way of visually defining the input container outside of a list.

![There is an email input and a password input. Both have helper text associated with them. Since both are placed outside of a list it is clear which input each helper text is associated with.](/docs/img/item/controls-metadata-list-do.jpg)
Do
Place inputs with metadata outside of the list.

![There is a list containing an email input and a password input. Both have helper texts associated with them. However, the divider between each item and between the helper text makes it hard to tell which input each helper text is associated with.](/docs/img/item/controls-metadata-list-do-not.jpg)
Don't
Don't put metadata for inputs in the list.

Alternatively, the metadata can be placed in a [Note](/docs/api/note) at the bottom of the list.

![There are two lists of inputs. The first list contains a password input. Below that list contains text that says 'Password must be at least 16 characters'. The second list contains an email input. This second list is separated so the password length requirement text is clearly associated with the password input above.](/docs/img/item/controls-metadata-do.jpg)
Do
Place metadata for inputs at the end of a list.

![There is one list of inputs. One of the inputs is a password input with text below the input that says 'Password must be at least 16 characters'. However, this text is placed directly above another input, so it's not immediately clear which input the text is associated with.](/docs/img/item/controls-metadata-do-not.jpg)
Don't
Don't put metadata for inputs in the list.

Items should typically have no more than two controls. If you need more controls, consider adding the additional controls in a [Modal](/docs/api/useBaseUrl('api/modal')) that is accessible from the item.

![There is one list of inputs. One of the inputs is a password input with text below the input that says 'Password must be at least 16 characters'. However, this text is placed directly above another input, so it's not immediately clear which input the text is associated with.](/docs/img/item/controls-count-do.jpg)
Do
Move additional controls to a submenu accessible from the item.

![There are two lists of inputs. The first list contains a password input. Below that list contains text that says 'Password must be at least 16 characters'. The second list contains an email input. This second list is separated so the password length requirement text is clearly associated with the password input above.](/docs/img/item/controls-count-do-not.jpg)
Don't
Don't use more than two controls within an item.

In the example below, we are creating a list of to-do tasks. Each item has a checkbox and an input. The checkbox lets the user mark a task as complete, and the input lets the user change the name of the task.

## Clickable Items

An item is considered "clickable" if it has an `href` or `button` property set. Clickable items have a few visual differences that indicate they can be interacted with. For example, a clickable item receives the ripple effect upon activation in `md` mode, has a highlight when activated in `ios` mode, and has a detail arrow by default in `ios` mode.

## Detail Arrows

By default clickable items will display a right arrow icon on `ios` mode. To hide the right arrow icon on clickable elements, set the `detail` property to `false` . To show the right arrow icon on an item that doesn't display it naturally, set the `detail` property to `true` .

## Item Lines

Items show an inset bottom border by default. The border has padding on the left and does not appear under any content that is slotted in the `"start"` slot. The `lines` property can be modified to `"full"` or `"none"` which will show a full width border or no border, respectively.

## Buttons in Items

Buttons are styled smaller inside of items than when they are outside of them. To make the button size match buttons outside of an item, set the `size` attribute to `"default"` .

## Item Inputs

## Theming

### Colors

### CSS Shadow Parts

### CSS Custom Properties

## Guidelines

The following guidelines will help ensure your list items are easy to understand and use.

1. Items should only be used inside of [Lists](/docs/api/list) .
2. Items inside of a list should be presented in a consistent format. For example, if your items present decorative icons, the icons should be positioned in the same way between items.
3. Items should never render [nested interactives](https://dequeuniversity.com/rules/axe/4.4/nested-interactive) . Screen readers are unable to select the correct interactive element when nested interactives are used. For example, avoid placing a button inside of an `ion-item` that has `button="true"` .
4. Use content types correctly. The Item component is designed to be a row in a [List](/docs/api/list) and should not be used as a general purpose container.

## Accessibility

### Keyboard Interactions

An `<ion-item>` has the following keyboard interactions when any of these conditions are met:

- The `button` property is set to `"true"` , rendering a native `<button>` element.
- The `href` property is set, rendering a native `<a>` element.
- The `routerLink` property is set, rendering a native `<a>` element.

| Key | Description 
| Tab | Moves focus to the next focusable element. 
| Shift + Tab | Moves focus to the previous focusable element. 

#### Button

When an `<ion-item>` renders a native `<button>` element, the keyboard interactions follow the same pattern as the [button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role#keyboard_interactions) :

| Key | Description 
| Enter | Activates the item, triggering its `click` event. If the item is within a form and has `type` set to `"submit"` , it submits the form. 
| Space | Activates the item, triggering its `click` event. Does not submit the form, even if the item `type` is `"submit"` . 

#### Anchor

When an `<ion-item>` renders a native `<a>` element, the keyboard interactions follow the same pattern as the [link role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/link_role) :

| Key | Description 
| Enter | Activates the item, navigating to the linked page or moving focus to the in-page target. 

## Properties

### button

| **Description** | If `true` , a button tag will be rendered and the item will be tappable. 
| **Attribute** | `button` 
| **Type** | `boolean` 
| **Default** | `false` 

### color

| **Description** | The color to use from your application's color palette. Default options are: `"primary"` , `"secondary"` , `"tertiary"` , `"success"` , `"warning"` , `"danger"` , `"light"` , `"medium"` , and `"dark"` . For more information on colors, see [theming](/docs/theming/basics) . 
| **Attribute** | `color` 
| **Type** | `"danger" ｜ "dark" ｜ "light" ｜ "medium" ｜ "primary" ｜ "secondary" ｜ "success" ｜ "tertiary" ｜ "warning" ｜ string ｜ undefined` 
| **Default** | `undefined` 

### detail

| **Description** | If `true` , a detail arrow will appear on the item. Defaults to `false` unless the `mode` is `ios` and an `href` or `button` property is present. 
| **Attribute** | `detail` 
| **Type** | `boolean ｜ undefined` 
| **Default** | `undefined` 

### detailIcon

| **Description** | The icon to use when `detail` is set to `true` . 
| **Attribute** | `detail-icon` 
| **Type** | `string` 
| **Default** | `chevronForward` 

### disabled

| **Description** | If `true` , the user cannot interact with the item. 
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

### lines

| **Description** | How the bottom border should be displayed on the item. 
| **Attribute** | `lines` 
| **Type** | `"full" ｜ "inset" ｜ "none" ｜ undefined` 
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

### routerAnimation

| **Description** | When using a router, it specifies the transition animation when navigating to another page using `href` . 
| **Attribute** | `undefined` 
| **Type** | `((baseEl: any, opts?: any) => Animation) ｜ undefined` 
| **Default** | `undefined` 

### routerDirection

| **Description** | When using a router, it specifies the transition direction when navigating to another page using `href` . 
| **Attribute** | `router-direction` 
| **Type** | `"back" ｜ "forward" ｜ "root"` 
| **Default** | `'forward'` 

### target

| **Description** | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"` , `"_self"` , `"_parent"` , `"_top"` . 
| **Attribute** | `target` 
| **Type** | `string ｜ undefined` 
| **Default** | `undefined` 

### type

| **Description** | The type of the button. Only used when an `onclick` or `button` property is present. 
| **Attribute** | `type` 
| **Type** | `"button" ｜ "reset" ｜ "submit"` 
| **Default** | `'button'` 

## Events

No events available for this component.

## Methods

No public methods available for this component.

## CSS Shadow Parts

| Name | Description 
| `container` | The wrapper element that contains the default slot. 
| `detail-icon` | The chevron icon for the item. Only applies when `detail="true"` . 
| `inner` | The inner wrapper element that arranges the item content. 
| `native` | The native HTML button, anchor or div element that wraps all child elements. 

## CSS Custom Properties

- iOS
- MD

| Name | Description 
| `--background` | Background of the item 
| `--background-activated` | Background of the item when pressed. Note: setting this will interfere with the Material Design ripple. 
| `--background-activated-opacity` | Opacity of the item background when pressed 
| `--background-focused` | Background of the item when focused with the tab key 
| `--background-focused-opacity` | Opacity of the item background when focused with the tab key 
| `--background-hover` | Background of the item on hover 
| `--background-hover-opacity` | Opacity of the background of the item on hover 
| `--border-color` | Color of the item border 
| `--border-radius` | Radius of the item border 
| `--border-style` | Style of the item border 
| `--border-width` | Width of the item border 
| `--color` | Color of the item 
| `--color-activated` | Color of the item when pressed 
| `--color-focused` | Color of the item when focused with the tab key 
| `--color-hover` | Color of the item on hover 
| `--detail-icon-color` | Color of the item detail icon 
| `--detail-icon-font-size` | Font size of the item detail icon 
| `--detail-icon-opacity` | Opacity of the item detail icon 
| `--inner-border-width` | Width of the item inner border 
| `--inner-box-shadow` | Box shadow of the item inner 
| `--inner-padding-bottom` | Bottom padding of the item inner 
| `--inner-padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the item inner 
| `--inner-padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the item inner 
| `--inner-padding-top` | Top padding of the item inner 
| `--min-height` | Minimum height of the item 
| `--padding-bottom` | Bottom padding of the item 
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the item 
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the item 
| `--padding-top` | Top padding of the item 
| `--ripple-color` | Color of the item ripple effect 
| `--transition` | Transition of the item 

| Name | Description 
| `--background` | Background of the item 
| `--background-activated` | Background of the item when pressed. Note: setting this will interfere with the Material Design ripple. 
| `--background-activated-opacity` | Opacity of the item background when pressed 
| `--background-focused` | Background of the item when focused with the tab key 
| `--background-focused-opacity` | Opacity of the item background when focused with the tab key 
| `--background-hover` | Background of the item on hover 
| `--background-hover-opacity` | Opacity of the background of the item on hover 
| `--border-color` | Color of the item border 
| `--border-radius` | Radius of the item border 
| `--border-style` | Style of the item border 
| `--border-width` | Width of the item border 
| `--color` | Color of the item 
| `--color-activated` | Color of the item when pressed 
| `--color-focused` | Color of the item when focused with the tab key 
| `--color-hover` | Color of the item on hover 
| `--detail-icon-color` | Color of the item detail icon 
| `--detail-icon-font-size` | Font size of the item detail icon 
| `--detail-icon-opacity` | Opacity of the item detail icon 
| `--inner-border-width` | Width of the item inner border 
| `--inner-box-shadow` | Box shadow of the item inner 
| `--inner-padding-bottom` | Bottom padding of the item inner 
| `--inner-padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the item inner 
| `--inner-padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the item inner 
| `--inner-padding-top` | Top padding of the item inner 
| `--min-height` | Minimum height of the item 
| `--padding-bottom` | Bottom padding of the item 
| `--padding-end` | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the item 
| `--padding-start` | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the item 
| `--padding-top` | Top padding of the item 
| `--ripple-color` | Color of the item ripple effect 
| `--transition` | Transition of the item 

## Slots

| Name | Description 
|  | Content is placed between the named slots if provided without a slot. 
| `end` | Content is placed to the right of the item text in LTR, and to the left in RTL. 
| `start` | Content is placed to the left of the item text in LTR, and to the right in RTL.