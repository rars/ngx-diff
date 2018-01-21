import { Component, HostListener } from '@angular/core';

import '../scss/new-age.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public oldText = 'apples\noranges\nkiwis\ncarrots\n';
  public newText = 'apples\npears\nkiwis\ngrapefruit\ncarrots\n';
  public navbarShrink = false;
  public navbarCollapse = true;

  @HostListener('window:scroll', ['$event'])
  public onScroll(event: Event): void {
    if ((event.target as any).scrollingElement.scrollTop > 100) {
      this.navbarShrink = true;
    } else {
      this.navbarShrink = false;
    }
  }

  public toggleCollapse(): void {
    this.navbarCollapse = !this.navbarCollapse;
  }
}
