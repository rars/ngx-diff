// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import { NgModule, provideZonelessChangeDetection } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

@NgModule({
  // pre Angular v20, use provideExperimentalZonelessChangeDetection
  providers: [provideZonelessChangeDetection()],
})
class ZonelessModule {}

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment([BrowserTestingModule, ZonelessModule], platformBrowserTesting(), {
  teardown: { destroyAfterEach: false },
});
