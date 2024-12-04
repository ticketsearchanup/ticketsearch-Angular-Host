import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewdashboardWrapperComponent } from './overviewdashboard-wrapper/overviewdashboard-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewdashboardWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
