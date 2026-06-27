import { Component, Prop, h, Host } from "@stencil/core";

export interface UiTableColumn {
  key: string;
  label: string;
  align?: "left" | "right" | "center";
}

@Component({
  tag: "ui-table",
  styleUrl: "ui-table.css",
  shadow: true,
})
export class UiTable {
  /** Definição das colunas. */
  @Prop() columns: UiTableColumn[] = [];
  /** Linhas de dados. */
  @Prop() rows: Record<string, unknown>[] = [];
  /** Aplica fundo alternado nas linhas pares. */
  @Prop() striped = false;
  /** Destaca a linha sob o cursor. */
  @Prop() hoverable = true;

  render() {
    return (
      <Host>
        <div class="wrapper">
          <table class={{ table: true, striped: this.striped, hoverable: this.hoverable }}>
            <thead>
              <tr>
                {this.columns.map((column) => (
                  <th key={column.key} style={{ textAlign: column.align ?? "left" }}>
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {this.columns.map((column) => (
                    <td key={column.key} style={{ textAlign: column.align ?? "left" }}>
                      {String(row[column.key] ?? "")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Host>
    );
  }
}
