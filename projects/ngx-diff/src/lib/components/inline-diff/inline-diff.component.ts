import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { LineSelectEvent } from '../../common/line-select-event';
import { UnifiedDiffComponent } from '../unified-diff/unified-diff.component';

/**
 * This is now just a wrapper around ngx-unified-diff.
 * @deprecated use ngx-unified-diff instead.
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'inline-diff',
  templateUrl: './inline-diff.component.html',
  styleUrls: ['./inline-diff.component.scss'],
  imports: [UnifiedDiffComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineDiffComponent {
  /**
   * Optional title to be displayed at the top of the diff.
   */
  public readonly title = input<string>();
  public readonly oldText = input.required<string | number | boolean | undefined>();
  public readonly newText = input.required<string | number | boolean | undefined>();

  /**
   * The number of lines of context to provide either side of a DiffOp.Insert or DiffOp.Delete diff.
   * Context is taken from a DiffOp.Equal section.
   */
  public readonly lineContextSize = input<number>();

  public readonly selectedLineChange = output<LineSelectEvent>();

  protected onSelectedLineChange(event: LineSelectEvent): void {
    this.selectedLineChange.emit(event);
  }
}
