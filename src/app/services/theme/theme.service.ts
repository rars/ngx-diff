import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = false;

  public isDarkMode(): boolean {
    return this.darkMode;
  }

  public toggleDarkMode(): void {
    this.setDarkMode(!this.darkMode);
  }

  public setDarkMode(isDarkMode: boolean): void {
    this.darkMode = isDarkMode;
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
