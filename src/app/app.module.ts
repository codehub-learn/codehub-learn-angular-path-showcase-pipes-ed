import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import localeIn from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';
import {registerLocaleData} from "@angular/common";
import { CustomPipesComponent } from './components/custom-pipes/custom-pipes.component';
import { CustomLowerCasePipe } from './components/custom-pipes/pipes/custom-lower-case.pipe';
import { TextTransformationPipe } from './components/custom-pipes/pipes/text-transformation.pipe';

registerLocaleData(localeIn);

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipesComponent,
    CustomPipesComponent,
    CustomLowerCasePipe,
    TextTransformationPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
