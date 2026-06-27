# ui-carousel



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                          | Type      | Default |
| ------------ | ------------- | -------------------------------------------------------------------- | --------- | ------- |
| `autoplay`   | `autoplay`    | Intervalo de autoplay em ms. 0 desliga o autoplay.                   | `number`  | `0`     |
| `loop`       | `loop`        | Permite navegação circular (wrap) entre o primeiro e o último slide. | `boolean` | `false` |
| `showArrows` | `show-arrows` | Exibe as setas de navegação.                                         | `boolean` | `true`  |
| `showDots`   | `show-dots`   | Exibe os indicadores (dots).                                         | `boolean` | `true`  |


## Events

| Event      | Description                                           | Type                  |
| ---------- | ----------------------------------------------------- | --------------------- |
| `uiChange` | Emitido quando o slide atual muda, com o índice novo. | `CustomEvent<number>` |


## Methods

### `goTo(i: number) => Promise<void>`

Vai para um slide específico pelo índice.

#### Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| `i`  | `number` |             |

#### Returns

Type: `Promise<void>`



### `next() => Promise<void>`

Avança para o próximo slide.

#### Returns

Type: `Promise<void>`



### `prev() => Promise<void>`

Volta para o slide anterior.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
