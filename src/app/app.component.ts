import { InlineDiffComponent, SideBySideDiffComponent } from 'ngx-diff';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [InlineDiffComponent, SideBySideDiffComponent],
})
export class AppComponent {
  public oldText = `common text
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
`;
  public newText = `common text
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
`;

  public selectedLineChange(event: unknown): void {
    console.log(event);
  }
}
