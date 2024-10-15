import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ProjectOverviewComponent } from "../project-overview/project-overview.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutComponent, ProjectOverviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projects = [
    {
      image: 'project-1.webp',
      position: 'Program Management | Team Leader',
      title: 'Siemens Energy - Prime Opportunity & E2A Accelerator',
      description: 'Integration of two solutions/products with the rest of the Sales Department Projects.',
      action: 'View Project',
      actionColor: 'purple'
    },
    {
      image: 'project-2.webp',
      position: 'Project Management ! Team Leader',
      title: `Implementing IGT's Retailer Vue Gaming Terminals in Portugal - SCML Project`,
      description: 'My work was focused on cross-communications between both companies.',
      action: 'View Project',
      actionColor: 'orange'
    },
    {
      image: 'project-3.webp',
      position: 'European Project Management',
      title: 'FIREPOCTEP  #wildfires',
      description: 'New houses need new living style and design, we help them.',
      action: 'View Case Study',
      actionColor: 'red'
    },
    {
      image: 'project-4.webp',
      position: 'Cultural Management | Exhibitions Management',
      title: 'Ki Culture',
      description: 'I have redesigned the UI style of entire company pages.',
      action: 'View Case Study',
      actionColor: 'blue'
    },
    {
      image: 'project-5.webp',
      position: 'UI Design',
      title: 'Fundação Gulbenkian',
      description: 'I have redesigned the UI style of entire company pages.',
      action: 'View Case Study',
      actionColor: 'black'
    }
  ];
}
