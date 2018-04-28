import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { BusinessSelectionModule } from './business-selection/business-selection.module';
import { BusinessDetailsModule } from './business-details/business-details.module';
import { SelectedServiceService } from './services/selected-business/selected-service.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    BusinessSelectionModule,
    BusinessDetailsModule
  ],
  providers: [SelectedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
