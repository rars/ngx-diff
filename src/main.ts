import { enableProdMode, importProvidersFrom, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { NGX_DIFF_WEB_WORKER_FACTORY } from 'ngx-diff';
import { DiffWebWorkerFactoryService } from './app/services/diff-web-worker-factory/diff-web-worker-factory.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule),
    provideZonelessChangeDetection(),
    { provide: NGX_DIFF_WEB_WORKER_FACTORY, useClass: DiffWebWorkerFactoryService },
  ],
}).catch((err) => console.error(err));
