import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-overviewdashboard-wrapper',
  template: '<div #overviewdashboardContainer></div>',
  //templateUrl: './overviewdashboard-wrapper.component.html',
  styleUrls: ['./overviewdashboard-wrapper.component.css']
})
export class OverviewdashboardWrapperComponent implements AfterViewInit {
  @ViewChild('overviewdashboardContainer', { static: true }) overviewdashboardContainer!: ElementRef;

  async ngAfterViewInit() {
    try {
      const DashboardComponentModule = await loadRemoteModule({
        remoteEntry: 'http://localhost:3001/remoteEntry.js', // Adjust the URL to your React app's remoteEntry
        remoteName: 'react_remoteapp', // Name of the remote application
        exposedModule: './OverviewDashboard' // The module you want to load
      });

      const DashboardComponent = DashboardComponentModule.default; // Assuming the React component is exported as default
      const dashboardElement = React.createElement(DashboardComponent); // No props are being passed now

      const container = this.overviewdashboardContainer.nativeElement;
      console.log('Overview Dashboard Component After View Init:', this.overviewdashboardContainer);
      const root = ReactDOM.createRoot(container); // Create a root to render the React component
      root.render(dashboardElement); // Render the React element
    } catch (error) {
      console.error('Error loading remote module in React Wrapper:', error);
    }
  }

  ngOnInit(): void {
    // You can add any initialization logic here if needed
  }


  

}
