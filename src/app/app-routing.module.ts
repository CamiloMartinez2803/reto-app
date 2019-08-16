import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent }  from './search/search.component';
import { ResultsComponent }  from './results/results.component';
import { BookingComponent }  from './booking/booking.component';
import { ErrorPageComponent }  from './error-page/error-page.component';

const routes: Routes = [
	{ path: '', redirectTo: '/web/disney', pathMatch: 'full' },
	{ path: 'web/disney', component: SearchComponent },
	{ path: 'web/disney/results/:days/:adults/:children/:fecha', component: ResultsComponent },
	{ path: 'web/disney/results/:days/:adults/:children/:fecha/booking/:plan', component: BookingComponent },
	{ path: 'web/disney/error/:text/:status', component: ErrorPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
