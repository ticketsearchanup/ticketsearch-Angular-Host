import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-membershipdashboard-wrapper',
  template: '<div #membershipdashboardContainer></div>',
  //templateUrl: './membershipdashboard-wrapper.component.html',
  styleUrls: ['./membershipdashboard-wrapper.component.css']
})


export class MembershipdashboardWrapperComponent implements AfterViewInit {
  @ViewChild('membershipdashboardContainer', { static: true }) membershipdashboardContainer!: ElementRef;

  async ngAfterViewInit() {
    try {
      const MembershipDashboardComponentModule = await loadRemoteModule({
        remoteEntry: 'http://localhost:3001/remoteEntry.js', // Adjust the URL to your React app's remoteEntry
        remoteName: 'react_remoteapp', // Name of the remote application
        exposedModule: './MembershipDashboard' // The module you want to load
      });

      const MembershipDashboardComponent = MembershipDashboardComponentModule.default; // Assuming the React component is exported as default
      const membershipdashboardElement = React.createElement(MembershipDashboardComponent); // No props are being passed now

      const container = this.membershipdashboardContainer.nativeElement;
      console.log('Marketing Dashboard Component After View Init:', this.membershipdashboardContainer);
      const root = ReactDOM.createRoot(container); // Create a root to render the React component
      root.render(membershipdashboardElement); // Render the React element
    } catch (error) {
      console.error('Error loading remote module in React Wrapper:', error);
    }
  }

  ngOnInit(): void {
    // You can add any initialization logic here if needed
  }


  

}