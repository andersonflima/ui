import {
  Component,
  Prop,
  State,
  Event,
  EventEmitter,
  h,
  Host,
} from "@stencil/core";

@Component({
  tag: "ui-file-upload",
  styleUrl: "ui-file-upload.css",
  shadow: true,
})
export class UiFileUpload {
  /** Tipos de arquivo aceitos (atributo accept do input). */
  @Prop() accept?: string;

  /** Permite múltiplos arquivos. */
  @Prop() multiple = false;

  /** Texto principal da zona de upload. */
  @Prop() label = "Arraste arquivos ou clique para enviar";

  /** Arquivos atualmente selecionados. */
  @State() files: File[] = [];

  /** Indica se há arraste sobre a zona. */
  @State() dragging = false;

  /** Emitido quando arquivos são selecionados. */
  @Event() uiChange!: EventEmitter<File[]>;

  private inputEl?: HTMLInputElement;

  private openPicker = () => {
    this.inputEl?.click();
  };

  private setFiles(list: FileList | null) {
    if (!list) return;
    this.files = Array.from(list);
    this.uiChange.emit(this.files);
  }

  private onInputChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.setFiles(target.files);
  };

  private onDragOver = (event: DragEvent) => {
    event.preventDefault();
    this.dragging = true;
  };

  private onDragLeave = () => {
    this.dragging = false;
  };

  private onDrop = (event: DragEvent) => {
    event.preventDefault();
    this.dragging = false;
    this.setFiles(event.dataTransfer?.files ?? null);
  };

  private formatSize(bytes: number): string {
    if (bytes >= 1024 * 1024) {
      return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  render() {
    return (
      <Host>
        <button
          type="button"
          class={{ dropzone: true, dragging: this.dragging }}
          onClick={this.openPicker}
          onDragOver={this.onDragOver}
          onDragLeave={this.onDragLeave}
          onDrop={this.onDrop}
        >
          <svg
            class="icon"
            viewBox="0 0 24 24"
            width="2rem"
            height="2rem"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <span class="label">{this.label}</span>
          {this.accept ? (
            <span class="hint">{this.accept}</span>
          ) : null}
        </button>

        <input
          type="file"
          hidden
          accept={this.accept}
          multiple={this.multiple}
          ref={(el) => (this.inputEl = el as HTMLInputElement)}
          onChange={this.onInputChange}
        />

        {this.files.length > 0 ? (
          <ul class="files">
            {this.files.map((file) => (
              <li class="file">
                <span class="file-name">{file.name}</span>
                <span class="file-size">{this.formatSize(file.size)}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </Host>
    );
  }
}
