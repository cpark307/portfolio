import { Component } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  menuItems = [
    { title: 'About Me', homePath: '/', fragment: 'about', pagePath: '/about' },
    { title: 'My Projects', homePath: '/', fragment: 'projects', pagePath: '/projects' },
    { title: 'Contact', homePath: '/', fragment: 'contact', pagePath: '/contact' },
  ];

  constructor(
    private bioService: BioService,
    private headerService: HeaderService,
    ) { }
}