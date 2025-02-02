import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-giftvoucherdashboard-wrapper',
  template: '<div #giftvoucherdashboardContainer></div>',
 // templateUrl: './giftvoucherdashboard-wrapper.component.html',
  styleUrls: ['./giftvoucherdashboard-wrapper.component.css']
})



export class GiftvoucherdashboardWrapperComponent implements AfterViewInit {
  @ViewChild('giftvoucherdashboardContainer', { static: true }) giftvoucherdashboardContainer!: ElementRef;

  async ngAfterViewInit() {
    try {
      const GiftVoucherDashboardComponentModule = await loadRemoteModule({
        remoteEntry: 'http://localhost:3001/remoteEntry.js', // Adjust the URL to your React app's remoteEntry
        remoteName: 'react_remoteapp', // Name of the remote application
        exposedModule: './GiftVoucherDashboard' // The module you want to load
      });

      const GiftVoucherDashboardComponent = GiftVoucherDashboardComponentModule.default; // Assuming the React component is exported as default
      const giftvoucherdashboardElement = React.createElement(GiftVoucherDashboardComponent); // No props are being passed now

      const container = this.giftvoucherdashboardContainer.nativeElement;
      console.log('GiftVoucher Dashboard Component After View Init:', this.giftvoucherdashboardContainer);
      const root = ReactDOM.createRoot(container); // Create a root to render the React component
      root.render(giftvoucherdashboardElement); // Render the React element
    } catch (error) {
      console.error('Error loading remote module in React Wrapper:', error);
    }
  }

  ngOnInit(): void {
    // You can add any initialization logic here if needed
  }


  

}