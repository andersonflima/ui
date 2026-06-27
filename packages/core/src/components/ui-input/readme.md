# ui-input



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                           | Type                  | Default     |
| ------------- | ------------- | ----------------------------------------------------- | --------------------- | ----------- |
| `clearable`   | `clearable`   | Exibe um botão para limpar o valor quando preenchido. | `boolean`             | `false`     |
| `disabled`    | `disabled`    | Desabilita o campo.                                   | `boolean`             | `false`     |
| `invalid`     | `invalid`     | Marca o campo como inválido (estilo + aria-invalid).  | `boolean`             | `false`     |
| `name`        | `name`        | Nome do campo.                                        | `string \| undefined` | `undefined` |
| `placeholder` | `placeholder` | Placeholder.                                          | `string \| undefined` | `undefined` |
| `type`        | `type`        | Tipo do input nativo.                                 | `string`              | `"text"`    |
| `value`       | `value`       | Valor do campo.                                       | `string`              | `""`        |


## Events

| Event      | Description                    | Type                  |
| ---------- | ------------------------------ | --------------------- |
| `uiChange` | Emitido ao confirmar (change). | `CustomEvent<string>` |
| `uiInput`  | Emitido a cada digitação.      | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
