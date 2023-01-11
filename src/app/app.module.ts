import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import localeIn from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';
import {registerLocaleData} from "@angular/common";

registerLocaleData(localeIn);

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
