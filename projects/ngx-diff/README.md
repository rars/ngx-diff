# ngx-diff

[![Node.js CI](https://github.com/rars/ngx-diff/actions/workflows/node.js.yml/badge.svg)](https://github.com/rars/ngx-diff/actions/workflows/node.js.yml)

Angular component library for displaying diffs of text. [Demo](https://rars.github.io/ngx-diff/).

## Quickstart

1. Install `ngx-diff` modules from npm:
   ```
   npm install ngx-diff diff-match-patch-ts --save
   ```
2. Either:

   2.1. If you are using this component in an NgModule-based setting, add `InlineDiffComponent` to your module's `imports`:

   ```typescript
   import { InlineDiffComponent } from 'ngx-diff';

   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';

   import { AppComponent } from './app.component';

   @NgModule({
     declarations: [AppComponent],
     imports: [BrowserModule, InlineDiffComponent],
     providers: [],
     bootstrap: [AppComponent],
   })
   export class AppModule {}
   ```

   2.2. Or if you are using this component in a standalone component setting, add `InlineDiffComponent` to your component's `imports`:

   ```typescript
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
     // ...
   }
   ```

3. Use the `inline-diff` component by setting the `oldText` and `newText` attributes:
   ```HTML
   <inline-diff [oldText]="oldDocumentContents" [newText]="newDocumentContents" [lineContextSize]="4" />
   ```

## Theming

For version 3+, you can customise the appearance of the diff through various CSS variable settings. For example, in your `styles.scss` file, define:

```SCSS
:root .my-custom-ngx-diff-theme {
  --ngx-diff-border-color: #888888;
  --ngx-diff-font-size: 1rem;
  --ngx-diff-font-family: Consolas, Courier, monospace;
  --ngx-diff-font-color: #000000;
  --ngx-diff-line-number-font-color: #484848;
  --ngx-diff-line-number-hover-font-color: #ffffff;
  --ngx-diff-selected-border-color: #ff8000;
  --ngx-diff-inserted-background-color: #9dff97;
  --ngx-diff-deleted-background-color: #ff8c8c;
  --ngx-diff-equal-background-color: #ffffff;
  --ngx-diff-margin-background-color: #dedede;
  --ngx-diff-line-number-width: 2rem;
  --ngx-diff-border-width: 1px;
  --ngx-diff-line-left-padding: 1rem;
  --ngx-diff-bottom-spacer-height: 1rem;
}
```

Then use this class in your desired component in your HTML template:

```HTML
<inline-diff
    class="my-custom-ngx-diff-theme"
    [oldText]="oldText"
    [newText]="newText"
    [lineContextSize]="4"
    style="width: 100%"
    (selectedLineChange)="selectedLineChange($event)" />
```

It is recommended to use these settings rather than attempt to override styles based upon DOM structure or class names that are internal details that may change.

## Version history

| Angular Version | ngx-diff Version |
| --------------- | ---------------- |
| 9               | 0.2.0            |
| 10              | 0.3.0            |
| 11              | 0.4.0            |
| 13              | 1.0.0            |
| 14              | 2.0.0            |
| 14              | 3.0.0            |
| 15              | 4.0.0            |
| 16              | 5.0.0            |
| 17              | 6.0.0            |

## Contributions welcome!

If you have a feature or improvement you would like to see included, please raise an issue or a PR and I will review.

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
