import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-promotersoldoutdashboard-wrapper',
  template: '<div #promotersoldoutdashboardContainer></div>',
  //templateUrl: './promotersoldoutdashboard-wrapper.component.html',
  styleUrls: ['./promotersoldoutdashboard-wrapper.component.css']
})
export class PromotersoldoutdashboardWrapperComponent implements AfterViewInit {
  @ViewChild('promotersoldoutdashboardContainer', { static: true }) promotersoldoutdashboardContainer!: ElementRef;

  async ngAfterViewInit() {
      try {
        const PromoterSoldOutDashboardComponentModule = await loadRemoteModule({
          remoteEntry: 'http://localhost:3001/remoteEntry.js', // Adjust the URL to your React app's remoteEntry
          remoteName: 'react_remoteapp', // Name of the remote application
          exposedModule: './PromoterSoldOutDashboard' // The module you want to load
        });
    
        const PromoterSoldOutComponent = PromoterSoldOutDashboardComponentModule.default; // Assuming the React component is exported as default
        const promotersoldoutdashboardElement = React.createElement(PromoterSoldOutComponent); // No props are being passed now
    
        const container = this.promotersoldoutdashboardContainer.nativeElement;
        console.log('Promoter access detail Component After View Init:', this.promotersoldoutdashboardContainer);
        const root = ReactDOM.createRoot(container); // Create a root to render the React component
        root.render(promotersoldoutdashboardElement); // Render the React element
      } catch (error) {
        console.error('Error loading remote module in React Wrapper:', error);
      }
    }
    
    ngOnInit(): void {
        // You can add any initialization logic here if needed
    }

}
