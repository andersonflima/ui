# ui-drawer



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                            | Type                  | Default   |
| -------- | --------- | -------------------------------------- | --------------------- | --------- |
| `open`   | `open`    | Controla a abertura do painel lateral. | `boolean`             | `false`   |
| `side`   | `side`    | Borda onde o painel é ancorado.        | `"bottom" \| "right"` | `"right"` |


## Events

| Event     | Description                                                   | Type                |
| --------- | ------------------------------------------------------------- | ------------------- |
| `uiClose` | Emitido quando o painel é fechado (Esc, backdrop ou close()). | `CustomEvent<void>` |


## Methods

### `close() => Promise<void>`

Fecha o painel imperativamente.

#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`

Abre o painel imperativamente.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
