import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import { InlineDiffComponent } from 'ngx-diff';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, InlineDiffComponent, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public oldText = 'apples\noranges\nkiwis\nstrawberries\n';
  public newText = 'apples\npears\nkiwis\ngrapefruit\nstrawberries\n';
}
