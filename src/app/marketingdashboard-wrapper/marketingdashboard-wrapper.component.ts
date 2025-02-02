import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-marketingdashboard-wrapper',
  template: '<div #marketingdashboardContainer></div>',
  //templateUrl: './marketingdashboard-wrapper.component.html',
  styleUrls: ['./marketingdashboard-wrapper.component.css']
})


export class MarketingdashboardWrapperComponent implements AfterViewInit {
  @ViewChild('marketingdashboardContainer', { static: true }) marketingdashboardContainer!: ElementRef;

  async ngAfterViewInit() {
    try {
      const MarketingDashboardComponentModule = await loadRemoteModule({
        remoteEntry: 'http://localhost:3001/remoteEntry.js', // Adjust the URL to your React app's remoteEntry
        remoteName: 'react_remoteapp', // Name of the remote application
        exposedModule: './MarketingDashboard' // The module you want to load
      });

      const MarketingDashboardComponent = MarketingDashboardComponentModule.default; // Assuming the React component is exported as default
      const marketingvoucherdashboardElement = React.createElement(MarketingDashboardComponent); // No props are being passed now

      const container = this.marketingdashboardContainer.nativeElement;
      console.log('Marketing Dashboard Component After View Init:', this.marketingdashboardContainer);
      const root = ReactDOM.createRoot(container); // Create a root to render the React component
      root.render(marketingvoucherdashboardElement); // Render the React element
    } catch (error) {
      console.error('Error loading remote module in React Wrapper:', error);
    }
  }

  ngOnInit(): void {
    // You can add any initialization logic here if needed
  }


  

}