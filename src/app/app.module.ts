import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { BusinessSelectionModule } from './business-selection/business-selection.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    BusinessSelectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
