import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-eventsnapshotdashboard-wrapper',
  template: '<div #eventsnapshotdashboardContainer></div>',
  //templateUrl: './eventsnapshotdashboard-wrapper.component.html',
  styleUrls: ['./eventsnapshotdashboard-wrapper.component.css']
})

export class EventsnapshotdashboardWrapperComponent implements AfterViewInit {
  @ViewChild('eventsnapshotdashboardContainer', { static: true }) eventsnapshotdashboardContainer!: ElementRef;

  async ngAfterViewInit() {
    try {
      const EventDashboardComponentModule = await loadRemoteModule({
        remoteEntry: 'http://localhost:3001/remoteEntry.js', // Adjust the URL to your React app's remoteEntry
        remoteName: 'react_remoteapp', // Name of the remote application
        exposedModule: './EventsnapshotDashboard' // The module you want to load
      });

      const EventDashboardComponent = EventDashboardComponentModule.default; // Assuming the React component is exported as default
      const eventdashboardElement = React.createElement(EventDashboardComponent); // No props are being passed now

      const container = this.eventsnapshotdashboardContainer.nativeElement;
      console.log('Eventsnapshot Dashboard Component After View Init:', this.eventsnapshotdashboardContainer);
      const root = ReactDOM.createRoot(container); // Create a root to render the React component
      root.render(eventdashboardElement); // Render the React element
    } catch (error) {
      console.error('Error loading remote module in React Wrapper:', error);
    }
  }

  ngOnInit(): void {
    // You can add any initialization logic here if needed
  }


  

}