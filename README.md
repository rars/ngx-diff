# ngx-diff

[![Node.js CI](https://github.com/rars/ngx-diff/actions/workflows/node.js.yml/badge.svg)](https://github.com/rars/ngx-diff/actions/workflows/node.js.yml)

Angular component library for displaying diffs of text. [Demo](https://rars.github.io/ngx-diff/).

## Quickstart

1. Install `ngx-diff` modules from npm:
   ```bash
   npm install ngx-diff diff-match-patch-ts --save
   ```
2. Either:

   2.1. If you are using this component in an NgModule-based setting, add `UnifiedDiffComponent` or `SideBySideDiffComponent` to your module's `imports`:

   ```typescript
   import { UnifiedDiffComponent } from 'ngx-diff';

   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';

   import { AppComponent } from './app.component';

   @NgModule({
     declarations: [AppComponent],
     imports: [BrowserModule, UnifiedDiffComponent],
     providers: [],
     bootstrap: [AppComponent],
   })
   export class AppModule {}
   ```

   2.2. Or if you are using this component in a standalone component setting, add `UnifiedDiffComponent` or `SideBySideDiffComponent` to your component's `imports`:

   ```typescript
   import { SideBySideDiffComponent } from 'ngx-diff';

   import { Component } from '@angular/core';

   @Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.scss'],
     standalone: true,
     imports: [SideBySideDiffComponent],
   })
   export class AppComponent {
     // ...
   }
   ```

3. Use the `ngx-unified-diff` component by setting the `before` and `after` attributes:

   ```HTML
   <ngx-unified-diff [before]="oldDocumentContents" [after]="newDocumentContents" [lineContextSize]="4" />
   ```

   or use the `ngx-side-by-side-diff` component by setting the `before` and `after` attributes:

   ```HTML
   <ngx-side-by-side-diff [before]="oldDocumentContents" [after]="newDocumentContents" [lineContextSize]="4" />
   ```

### Upgrading from v7.0.0

In v8.0.0, `inline-diff` component has been deprecated and users should switch to the `ngx-unified-diff` component that has been added and provides equivalent functionality. `inline-diff` will be removed in the next release.

## Theming

For version 3+, you can customise the appearance of the diff through various CSS variable settings. If you are not using the latest version, refer to the `README.md` file in earlier releases.

In version 8.0.0, a light and dark theme was introduced. This should be imported to your application `styles.scss` file or equivalent.

```scss
@use 'ngx-diff/styles/default-theme';
```

You can then use the provided `ngx-diff-light-theme` or `ngx-diff-dark-theme` classes.

### Custom theme

To create your own theme, override the relevant CSS variables; for example, in your `styles.scss` file, define:

```SCSS
.my-custom-ngx-diff-theme {
  --ngx-diff-border-color: #dfdfdf;
  --ngx-diff-font-size: 0.9rem;
  --ngx-diff-font-family: Consolas, Courier, monospace;
  --ngx-diff-font-color: #000;
  --ngx-diff-line-number-font-color: #aaaaaa;
  --ngx-diff-line-number-hover-font-color:  #484848;

  --ngx-diff-selected-border-width: 0;
  --ngx-diff-selected-border-color: #000;
  --ngx-diff-selected-line-background-color: #d6f1ff;

  --ngx-diff-progress-background-color: #dfdfdf;
  --ngx-diff-progress-foreground-color: #aaaaaa;

  --ngx-diff-line-number-width: 2rem;
  --ngx-diff-line-number-width-dynamic-padding: 1rem;
  --ngx-diff-border-width: 1px;
  --ngx-diff-line-left-padding: 1rem;
  --ngx-diff-bottom-spacer-height: 1rem;
  --ngx-diff-title-bar-padding: 0.5rem;
  --ngx-diff-title-font-weight: 600;

  --ngx-diff-insert-color: #d6ffd6;
  --ngx-diff-delete-color: #ffd6d6;
  --ngx-diff-equal-color: #ffffff;
  --ngx-diff-mix-color: #000;
  --ngx-diff-light-mix-percentage: 4%;
  --ngx-diff-heavy-mix-percentage: 10%;
}
```

Then use this class in your desired component in your HTML template:

```HTML
<ngx-unified-diff
  class="ngx-diff-light-theme my-custom-ngx-diff-theme"
  [title]="filename"
  [before]="oldText"
  [after]="newText"
  [lineContextSize]="4"
  [isDynamicLineNumberWidthEnabled]="true"
  style="width: 100%"
  (selectedLineChange)="selectedLineChange($event)" />
```

It is recommended to use these settings rather than attempt to override styles based upon DOM structure or class names that are internal details that may change.

## Run diff in Web Worker

**New in version 13.1.0**

Very large diffs can take over 100ms to compute in Js. To avoid locking the UI main thread, you can configure this to run in a Web worker as follows:

1. In your application create a new Web worker:

```bash
npx ng g web-worker web-workers/DiffWebWorker
```

2. In your newly created file `diff-web-worker.worker.ts`, add implementation that will compute the diff:

```js
/// <reference lib="webworker" />

import { DiffMatchPatch } from 'diff-match-patch-ts';

addEventListener('message', ({ data }) => {
  try {
    if (typeof data.before !== 'string' || typeof data.after !== 'string') {
      throw new TypeError('Input data for diffing must be strings.');
    }

    const dmp = new DiffMatchPatch();
    const diffs = dmp.diff_lineMode(data.before, data.after);

    postMessage({ id: data.id, status: 'success', diffs });
  } catch (error: any) {
    postMessage({ id: data.id, status: 'error', error: { message: error.message, stack: error.stack } });
  }
});
```

3. Create a factory service that will create the Web worker:

```bash
npx ng g s services/diff-web-worker-factory/DiffWebWorkerFactory
```

And implement the `IDiffWebWorkerFactory` interface in the generated diff-web-worker-factory.service.ts:

```js
import { Injectable } from '@angular/core';
import { IDiffWebWorkerFactory } from 'ngx-diff';

@Injectable()
export class DiffWebWorkerFactoryService implements IDiffWebWorkerFactory {
  public createWorker(): Worker | undefined {
    if (typeof Worker !== 'undefined') {
      return new Worker(new URL('../../web-workers/diff-web-worker.worker', import.meta.url));
    } else {
      return undefined;
    }
  }
}

```

4. Specify the factory service in your `main.ts` file:

```js
import { NGX_DIFF_WEB_WORKER_FACTORY } from 'ngx-diff';
import { DiffWebWorkerFactoryService } from './app/services/diff-web-worker-factory/diff-web-worker-factory.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule),
    provideZonelessChangeDetection(),
    /* Add this line below: */
    { provide: NGX_DIFF_WEB_WORKER_FACTORY, useClass: DiffWebWorkerFactoryService },
  ],
}).catch((err) => console.error(err));
```

Now `ngx-diff` will detect that you have a Web worker factory configured and use that to run the diff on a Web worker instead of the main UI thread.

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
| 17              | 6.0.0+           |
| 18              | 9.0.0+           |
| 19              | 10.0.0+          |
| 20              | 11.0.0+          |
| 21              | 13.0.0+          |

## Contributions welcome!

If you have a feature or improvement you would like to see included, please raise an issue or a PR and I will review.

## License

See the [LICENSE](LICENSE) file for license rights and limitations (MIT).
