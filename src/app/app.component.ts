import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { UnifiedDiffComponent, SideBySideDiffComponent } from 'ngx-diff';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgClass,
    FormsModule,
    UnifiedDiffComponent,
    SideBySideDiffComponent,
    MatToolbarModule,
    MatSlideToggleModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public isDarkMode = false;
  public oldText = 'apples\noranges\nkiwis\nstrawberries\n';
  public newText = 'apples\npears\nkiwis\ngrapefruit\nstrawberries\n';
}
