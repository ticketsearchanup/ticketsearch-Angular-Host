import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewdashboardWrapperComponent } from './overviewdashboard-wrapper/overviewdashboard-wrapper.component';
import { EventsnapshotdashboardWrapperComponent } from './eventsnapshotdashboard-wrapper/eventsnapshotdashboard-wrapper.component';
import { DonationsdashboardWrapperComponent } from './donationsdashboard-wrapper/donationsdashboard-wrapper.component';
import { GiftvoucherdashboardWrapperComponent } from './giftvoucherdashboard-wrapper/giftvoucherdashboard-wrapper.component';
import { MarketingdashboardWrapperComponent } from './marketingdashboard-wrapper/marketingdashboard-wrapper.component';
import { MembershipdashboardWrapperComponent } from './membershipdashboard-wrapper/membershipdashboard-wrapper.component';
import { ScanningdashboardWrapperComponent } from './scanningdashboard-wrapper/scanningdashboard-wrapper.component';
import { PromoteraccessdetaildashboardWrapperComponent } from './promoteraccessdetaildashboard-wrapper/promoteraccessdetaildashboard-wrapper.component';
import { PromoteraccessbasicdashboardWrapperComponent } from './promoteraccessbasicdashboard-wrapper/promoteraccessbasicdashboard-wrapper.component';
import { PromotersoldoutdashboardWrapperComponent } from './promotersoldoutdashboard-wrapper/promotersoldoutdashboard-wrapper.component';
import { PromotersctickettypedashboardWrapperComponent } from './promotersctickettypedashboard-wrapper/promotersctickettypedashboard-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewdashboardWrapperComponent,
    EventsnapshotdashboardWrapperComponent,
    DonationsdashboardWrapperComponent,
    GiftvoucherdashboardWrapperComponent,
    MarketingdashboardWrapperComponent,
    MembershipdashboardWrapperComponent,
    ScanningdashboardWrapperComponent,
    PromoteraccessdetaildashboardWrapperComponent,
    PromoteraccessbasicdashboardWrapperComponent,
    PromotersoldoutdashboardWrapperComponent,
    PromotersctickettypedashboardWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
