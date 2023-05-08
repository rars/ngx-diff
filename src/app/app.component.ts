import { InlineDiffComponent } from 'ngx-diff';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [InlineDiffComponent],
})
export class AppComponent {
  public oldText = 'apples\noranges\nkiwis\ncarrots\n';
  public newText = 'apples\npears\nkiwis\ngrapefruit\ncarrots\n';

  public selectedLineChange(event: unknown): void {
    console.log(event);
  }
}
