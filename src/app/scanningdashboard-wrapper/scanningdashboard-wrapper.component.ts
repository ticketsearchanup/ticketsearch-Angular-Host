import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';


@Component({
  selector: 'app-scanningdashboard-wrapper',
  template: '<div #scanningdashboardContainer></div>',
  //templateUrl: './scanningdashboard-wrapper.component.html',
  styleUrls: ['./scanningdashboard-wrapper.component.css']
})

export class ScanningdashboardWrapperComponent implements AfterViewInit {
  @ViewChild('scanningdashboardContainer', { static: true }) scanningdashboardContainer!: ElementRef;

  async ngAfterViewInit() {
    try {
      const ScanningDashboardComponentModule = await loadRemoteModule({
        remoteEntry: 'http://localhost:3001/remoteEntry.js', // Adjust the URL to your React app's remoteEntry
        remoteName: 'react_remoteapp', // Name of the remote application
        exposedModule: './ScanningDashboard' // The module you want to load
      });

      const ScanningDashboardComponent = ScanningDashboardComponentModule.default; // Assuming the React component is exported as default
      const scanningdashboardElement = React.createElement(ScanningDashboardComponent); // No props are being passed now

      const container = this.scanningdashboardContainer.nativeElement;
      console.log('Scanning Dashboard Component After View Init:', this.scanningdashboardContainer);
      const root = ReactDOM.createRoot(container); // Create a root to render the React component
      root.render(scanningdashboardElement); // Render the React element
    } catch (error) {
      console.error('Error loading remote module in React Wrapper:', error);
    }
  }

  ngOnInit(): void {
    // You can add any initialization logic here if needed
  }


  

}