import { Component } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faCalendar, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  faFilePdf = faFilePdf;
  faXTwitter = faXTwitter;
  faLinkedin = faLinkedin;
  faCalendar = faCalendar;

}
