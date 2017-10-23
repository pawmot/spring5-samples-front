import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialDepsModule} from './material-deps/material-deps.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialDepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
