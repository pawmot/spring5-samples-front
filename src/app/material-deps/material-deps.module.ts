import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ]
})
export class MaterialDepsModule {}
