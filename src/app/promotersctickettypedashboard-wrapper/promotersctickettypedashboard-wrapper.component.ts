import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-promotersctickettypedashboard-wrapper',
  template: '<div #promotersctickettypedashboardContainer></div>',
  //templateUrl: './promotersctickettypedashboard-wrapper.component.html',
  styleUrls: ['./promotersctickettypedashboard-wrapper.component.css']
})
export class PromotersctickettypedashboardWrapperComponent implements AfterViewInit {
  @ViewChild('promotersctickettypedashboardContainer', { static: true }) promotersctickettypedashboardContainer!: ElementRef;

  async ngAfterViewInit() {
      try {
        const PromoterSCTicketTypeDashboardComponentModule = await loadRemoteModule({
          remoteEntry: 'http://localhost:3001/remoteEntry.js', // Adjust the URL to your React app's remoteEntry
          remoteName: 'react_remoteapp', // Name of the remote application
          exposedModule: './PromotersaleschanneltickettypeDashboard' // The module you want to load
        });
      
        const PromoterSCTickettypeComponent = PromoterSCTicketTypeDashboardComponentModule.default; // Assuming the React component is exported as default
        const promotersctickettypedashboardElement = React.createElement(PromoterSCTickettypeComponent); // No props are being passed now
      
        const container = this.promotersctickettypedashboardContainer.nativeElement;
        console.log('Promoter access detail Component After View Init:', this.promotersctickettypedashboardContainer);
        const root = ReactDOM.createRoot(container); // Create a root to render the React component
        root.render(promotersctickettypedashboardElement); // Render the React element
      } catch (error) {
        console.error('Error loading remote module in React Wrapper:', error);
      }
    }
      
    ngOnInit(): void {
          // You can add any initialization logic here if needed
    }

}
