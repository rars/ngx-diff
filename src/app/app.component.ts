import { InlineDiffComponent, SideBySideDiffComponent, UnifiedDiffComponent } from 'ngx-diff';

import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataLoaderService, ExampleDiff } from './services/data-loader/data-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [FormsModule, InlineDiffComponent, UnifiedDiffComponent, SideBySideDiffComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly dataLoaderService = inject(DataLoaderService);

  private examples: ExampleDiff[] = [];
  private currentExampleIndex = 0;

  public readonly title = signal('github/user/src/main.ts');
  public readonly oldText = signal(`common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
apples
oranges
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
kiwis
carrots
`);
  public readonly newText = signal(`common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
apples
pears
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
common text
kiwis
grapefruit
carrots
`);

  public constructor() {
    this.dataLoaderService.getExampleDiffs().subscribe((examples) => (this.examples = examples));
  }

  public selectedLineChange(event: unknown): void {
    console.log(event);
  }

  protected loadNextExample(): void {
    this.currentExampleIndex++;

    if (this.currentExampleIndex >= this.examples.length) {
      this.currentExampleIndex = 0;
    }

    if (this.currentExampleIndex < this.examples.length) {
      const example = this.examples[this.currentExampleIndex];
      this.title.set(example.file_path);
      this.oldText.set(example.before_content);
      this.newText.set(example.after_content);
    }
  }
}
