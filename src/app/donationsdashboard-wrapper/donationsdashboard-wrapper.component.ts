import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-donationsdashboard-wrapper',
  template: '<div #donationsdashboardContainer></div>',
 // templateUrl: './donationsdashboard-wrapper.component.html',
  styleUrls: ['./donationsdashboard-wrapper.component.css']
})

export class DonationsdashboardWrapperComponent implements AfterViewInit {
  @ViewChild('donationsdashboardContainer', { static: true }) donationsdashboardContainer!: ElementRef;

  async ngAfterViewInit() {
    try {
      const DonationsDashboardComponentModule = await loadRemoteModule({
        remoteEntry: 'http://localhost:3001/remoteEntry.js', // Adjust the URL to your React app's remoteEntry
        remoteName: 'react_remoteapp', // Name of the remote application
        exposedModule: './DonationsDashboard' // The module you want to load
      });

      const DonationsDashboardComponent = DonationsDashboardComponentModule.default; // Assuming the React component is exported as default
      const donationsdashboardElement = React.createElement(DonationsDashboardComponent); // No props are being passed now

      const container = this.donationsdashboardContainer.nativeElement;
      console.log('Overview Eventsnapshot Dashboard Component After View Init:', this.donationsdashboardContainer);
      const root = ReactDOM.createRoot(container); // Create a root to render the React component
      root.render(donationsdashboardElement); // Render the React element
    } catch (error) {
      console.error('Error loading remote module in React Wrapper:', error);
    }
  }

  ngOnInit(): void {
    // You can add any initialization logic here if needed
  }


  

}