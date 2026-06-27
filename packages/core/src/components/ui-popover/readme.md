# ui-popover



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                        | Type                                                                                                                                                                 | Default    |
| ----------- | ----------- | -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `open`      | `open`      | Controla a abertura do conteúdo flutuante.         | `boolean`                                                                                                                                                            | `false`    |
| `placement` | `placement` | Posição preferida do conteúdo relativo ao gatilho. | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `"bottom"` |


## Events

| Event          | Description                               | Type                   |
| -------------- | ----------------------------------------- | ---------------------- |
| `uiOpenChange` | Emitido quando o estado de abertura muda. | `CustomEvent<boolean>` |


## Methods

### `close() => Promise<void>`

Fecha o popover imperativamente.

#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`

Abre o popover imperativamente.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
