# ui-command



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                  | Type              | Default             |
| ------------- | ------------- | -------------------------------------------- | ----------------- | ------------------- |
| `hotkey`      | `hotkey`      | Abre/fecha com Cmd/Ctrl+K quando habilitado. | `boolean`         | `true`              |
| `items`       | --            | Itens disponíveis na paleta.                 | `UiCommandItem[]` | `[]`                |
| `open`        | `open`        | Controla a abertura da paleta de comandos.   | `boolean`         | `false`             |
| `placeholder` | `placeholder` | Placeholder do campo de busca.               | `string`          | `"Buscar comando…"` |


## Events

| Event      | Description                       | Type                  |
| ---------- | --------------------------------- | --------------------- |
| `uiSelect` | Emitido ao selecionar um comando. | `CustomEvent<string>` |


## Methods

### `close() => Promise<void>`

Fecha a paleta imperativamente.

#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`

Abre a paleta imperativamente.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
