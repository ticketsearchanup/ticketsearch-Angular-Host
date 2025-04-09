import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-promoteraccessbasicdashboard-wrapper',
  template: '<div #promoteraccessbasicdashboardContainer></div>',
  //templateUrl: './promoteraccessbasicdashboard-wrapper.component.html',
  styleUrls: ['./promoteraccessbasicdashboard-wrapper.component.css']
})
export class PromoteraccessbasicdashboardWrapperComponent implements AfterViewInit {
  @ViewChild('promoteraccessbasicdashboardContainer', { static: true }) promoteraccessbasicdashboardContainer!: ElementRef;

  async ngAfterViewInit() {
        try {
          const PromoterAccessBasicDashboardComponentModule = await loadRemoteModule({
            remoteEntry: 'http://localhost:3001/remoteEntry.js', // Adjust the URL to your React app's remoteEntry
            remoteName: 'react_remoteapp', // Name of the remote application
            exposedModule: './PromoterAccessBasicDashboard' // The module you want to load
          });
    
          const PromoterAccessBasicComponent = PromoterAccessBasicDashboardComponentModule.default; // Assuming the React component is exported as default
          const promoteraccessbasicdashboardElement = React.createElement(PromoterAccessBasicComponent); // No props are being passed now
    
          const container = this.promoteraccessbasicdashboardContainer.nativeElement;
          console.log('Promoter access basic Component After View Init:', this.promoteraccessbasicdashboardContainer);
          const root = ReactDOM.createRoot(container); // Create a root to render the React component
          root.render(promoteraccessbasicdashboardElement); // Render the React element
        } catch (error) {
          console.error('Error loading remote module in React Wrapper:', error);
        }
      }
    
      ngOnInit(): void {
        // You can add any initialization logic here if needed
      }

}
