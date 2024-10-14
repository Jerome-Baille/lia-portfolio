import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { ProjectOverviewComponent } from "../project-overview/project-overview.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ProjectOverviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
