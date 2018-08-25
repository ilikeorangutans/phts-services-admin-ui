import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './containers/app/app.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { RouterModule } from '@angular/router';

export const COMPONENTS = [
  AppComponent,
  NotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule { }
