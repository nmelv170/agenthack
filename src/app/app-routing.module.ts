import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { BusinessSelectionComponent } from './business-selection/business-selection.component';
import { BusinessDetailsComponent } from './business-details/business-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'business-selection', component: BusinessSelectionComponent },
  { path: 'business-details/:id', component: BusinessDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
