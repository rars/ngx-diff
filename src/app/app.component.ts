import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';
import { UnifiedDiffComponent, SideBySideDiffComponent } from 'ngx-diff';
import { ThemeService } from './services/theme/theme.service';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        NgClass,
        FormsModule,
        UnifiedDiffComponent,
        SideBySideDiffComponent,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        MatTooltipModule,
        FontAwesomeModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  public isDarkMode = false;
  public oldText = 'apples\noranges\nkiwis\nstrawberries\n';
  public newText = 'apples\npears\nkiwis\ngrapefruit\nstrawberries\n';

  public constructor(
    faLibrary: FaIconLibrary,
    private readonly themeService: ThemeService,
  ) {
    faLibrary.addIcons(faGithub, faNpm);
    this.isDarkMode = this.themeService.isDarkMode();
  }

  protected toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
    this.isDarkMode = this.themeService.isDarkMode();
  }
}
