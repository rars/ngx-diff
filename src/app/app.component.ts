import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InlineDiffComponent } from 'ngx-diff';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, InlineDiffComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngx-diff-demo';
  public oldText = 'apples\noranges\nkiwis\ncarrots\n';
  public newText = 'apples\npears\nkiwis\ngrapefruit\ncarrots\n';
}
