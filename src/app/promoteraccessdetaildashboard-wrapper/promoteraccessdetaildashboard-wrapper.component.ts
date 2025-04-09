import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-promoteraccessdetaildashboard-wrapper',
  template: '<div #promoteraccessdetaildashboardContainer></div>',
  //templateUrl: './promoteraccessdetaildashboard-wrapper.component.html',
  styleUrls: ['./promoteraccessdetaildashboard-wrapper.component.css']
})
export class PromoteraccessdetaildashboardWrapperComponent implements AfterViewInit {
  @ViewChild('promoteraccessdetaildashboardContainer', { static: true }) promoteraccessdetaildashboardContainer!: ElementRef;

  async ngAfterViewInit() {
      try {
        const PromoterAccessDetailDashboardComponentModule = await loadRemoteModule({
          remoteEntry: 'http://localhost:3001/remoteEntry.js', // Adjust the URL to your React app's remoteEntry
          remoteName: 'react_remoteapp', // Name of the remote application
          exposedModule: './PromoterAccessDetailDashboard' // The module you want to load
        });
  
        const PromoterAccessDetailComponent = PromoterAccessDetailDashboardComponentModule.default; // Assuming the React component is exported as default
        const promoteraccessdetaildashboardElement = React.createElement(PromoterAccessDetailComponent); // No props are being passed now
  
        const container = this.promoteraccessdetaildashboardContainer.nativeElement;
        console.log('Promoter access detail Component After View Init:', this.promoteraccessdetaildashboardContainer);
        const root = ReactDOM.createRoot(container); // Create a root to render the React component
        root.render(promoteraccessdetaildashboardElement); // Render the React element
      } catch (error) {
        console.error('Error loading remote module in React Wrapper:', error);
      }
    }
  
    ngOnInit(): void {
      // You can add any initialization logic here if needed
    }

}
