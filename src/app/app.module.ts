import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularWebStorageModule } from 'angular-web-storage';
import { JwtModule } from "@auth0/angular-jwt";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { BookingComponent } from './booking/booking.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export function tokenGetter() {
  return  JSON.parse(localStorage.getItem("token"));
}

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    BookingComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    AppRoutingModule,
    AngularWebStorageModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["demo.booktofly.co"],
        blacklistedRoutes: ["api.ipify.org"]
      }
    }),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
