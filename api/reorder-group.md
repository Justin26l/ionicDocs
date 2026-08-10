# ion-reorder-group

URL: https://ionicframework.com/docs/api/reorder-group

Version: v8
The reorder group is a container for items using the [reorder](/docs/api/reorder) component. When the user drags an item and drops it, the `ionReorderEnd` event is dispatched. A handler for this event should be implemented that calls the `complete` method.

The `detail` property of the `ionReorderEnd` event includes all of the relevant information about the reorder operation, including the `from` and `to` indexes. In the context of reordering, an item moves `from` an index `to` an index. For example usage of the reorder group, see the [reorder](/docs/api/reorder) documentation.

## Interfaces

### ReorderMoveEventDetail

```typescript
interface ReorderMoveEventDetail {
  from: number;
  to: number;
}
```

### ReorderEndEventDetail

```typescript
interface ReorderEndEventDetail {
  from: number;
  to: number;
  complete: (data?: boolean | any[]) => any;
}
```

### ReorderMoveCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ReorderMoveCustomEvent extends CustomEvent {
  detail: ReorderMoveEventDetail;
  target: HTMLIonReorderGroupElement;
}
```

### ReorderEndCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ReorderEndCustomEvent extends CustomEvent {
  detail: ReorderEndEventDetail;
  target: HTMLIonReorderGroupElement;
}
```

### ItemReorderEventDetail (deprecated)

***Deprecated*** — Use the `ionReorderEnd` event with `ReorderEndEventDetail` instead.

```typescript
interface ItemReorderEventDetail {
  from: number;
  to: number;
  complete: (data?: boolean | any[]) => any;
}
```

### ItemReorderCustomEvent (deprecated)

***Deprecated*** — Use the `ionReorderEnd` event with `ReorderEndCustomEvent` instead.

```typescript
interface ItemReorderCustomEvent extends CustomEvent {
  detail: ItemReorderEventDetail;
  target: HTMLIonReorderGroupElement;
}
```

## Properties

### disabled

| **Description** | If `true` , the reorder will be hidden. 
| **Attribute** | `disabled` 
| **Type** | `boolean` 
| **Default** | `true` 

## Events

| Name | Description | Bubbles 
| `ionItemReorder`**(deprecated)** | Event that needs to be listened to in order to complete the reorder action.

***Deprecated*** — Use `ionReorderEnd` instead. If you are accessing `event.detail.from` or `event.detail.to` and relying on them being different you should now add checks as they are always emitted in `ionReorderEnd` , even when they are the same. | `true` 
| `ionReorderEnd` | Event that is emitted when the reorder gesture ends. The from and to properties are always available, regardless of if the reorder gesture moved the item. If the item did not change from its start position, the from and to properties will be the same. Once the event has been emitted, the `complete()` method then needs to be called in order to finalize the reorder action. | `true` 
| `ionReorderMove` | Event that is emitted as the reorder gesture moves. | `true` 
| `ionReorderStart` | Event that is emitted when the reorder gesture starts. | `true` 

## Methods

### complete

| **Description** | Completes the reorder operation. Must be called by the `ionReorderEnd` event.

If a list of items is passed, the list will be reordered and returned in the proper order.

If no parameters are passed or if `true` is passed in, the reorder will complete and the item will remain in the position it was dragged to. If `false` is passed, the reorder will complete and the item will bounce back to its original position. 
| **Signature** | `complete(listOrReorder?: boolean ｜ any[]) => Promise<any>` 
| **Parameters** | **listOrReorder** : A list of items to be sorted and returned in the new order or a boolean of whether or not the reorder should reposition the item. 

## CSS Shadow Parts

No CSS shadow parts available for this component.

## CSS Custom Properties

No CSS custom properties available for this component.

## Slots

No slots available for this component.