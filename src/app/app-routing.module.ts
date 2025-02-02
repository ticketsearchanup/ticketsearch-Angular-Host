import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewdashboardWrapperComponent } from './overviewdashboard-wrapper/overviewdashboard-wrapper.component';
import { EventsnapshotdashboardWrapperComponent } from './eventsnapshotdashboard-wrapper/eventsnapshotdashboard-wrapper.component';
import { DonationsdashboardWrapperComponent } from './donationsdashboard-wrapper/donationsdashboard-wrapper.component';
import { GiftvoucherdashboardWrapperComponent } from './giftvoucherdashboard-wrapper/giftvoucherdashboard-wrapper.component';
import { MarketingdashboardWrapperComponent } from './marketingdashboard-wrapper/marketingdashboard-wrapper.component';
import { MembershipdashboardWrapperComponent } from './membershipdashboard-wrapper/membershipdashboard-wrapper.component';
import { ScanningdashboardWrapperComponent } from './scanningdashboard-wrapper/scanningdashboard-wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: '/overviewdashboard', pathMatch: 'full' }, // Default route
  { path: 'overviewdashboard', component: OverviewdashboardWrapperComponent },
  { path: 'eventsnapshotdashboard', component: EventsnapshotdashboardWrapperComponent },
  { path: 'donationsdashboard', component: DonationsdashboardWrapperComponent },
  { path: 'giftvoucherdashboard', component: GiftvoucherdashboardWrapperComponent },
  { path: 'marketingdashboard', component: MarketingdashboardWrapperComponent },
  { path: 'membershipdashboard', component: MembershipdashboardWrapperComponent },
  { path: 'scanningdashboard', component: ScanningdashboardWrapperComponent },
  { path: '**', redirectTo: '/overviewdashboard' } // Wildcard route for undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

