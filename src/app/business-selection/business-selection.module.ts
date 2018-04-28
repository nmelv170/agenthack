import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BusinessSelectionComponent } from './business-selection.component';
import { BusinessSearchService } from '../services/business-search/business-search.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [BusinessSelectionComponent],
  providers: [BusinessSearchService]
})
export class BusinessSelectionModule { }
