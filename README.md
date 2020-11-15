# ngx-diff

[![Build Status](https://travis-ci.org/rars/ngx-diff.svg?branch=master)](https://travis-ci.org/rars/ngx-diff)

Angular 2+ component library for displaying diffs of text. [Demo](https://rars.github.io/ngx-diff/).

## Quickstart

1. Install `ngx-diff` modules from npm:
   ```
   npm install ngx-diff diff-match-patch-ts --save
   ```
2. Import `NgxDiffModule` to your app:

   ```
   import { BrowserModule } from '@angular/platform-browser';
   import { NgModule } from '@angular/core';
   import { NgxDiffModule } from 'ngx-diff';
   import { AppComponent } from './app.component';

   @NgModule({
     declarations: [
       AppComponent
     ],
     imports: [
       BrowserModule,
       NgxDiffModule
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

3. Use the `inline-diff` component by setting the `oldText` and `newText` attributes:
   ```
   <inline-diff [oldText]="oldDocumentContents" [newText]="newDocumentContents" [lineContextSize]="4"></inline-diff>
   ```

## Version history

| Angular Version | ngx-diff Version |
| --------------- | ---------------- |
| 9               | 0.2.0            |
| 10              | 0.3.0            |
| 11              | 0.4.0            |

## Contributions welcome!

If you have a feature or improvement you would like to see included, please raise an issue or a PR and I will review.

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
