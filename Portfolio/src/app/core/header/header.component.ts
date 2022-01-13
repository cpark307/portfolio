import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isMobile = false;
  isTablet = false;

  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  menuItems = [
    { title: 'About Me', homePath: '/', fragment: 'about', pagePath: '/about'},
    { title: 'Experience', homePath: '/', fragment: 'experience', pagePath: '/experience'},
    { title: 'Education', homePath: '/', fragment: 'education', pagePath: '/education'},
    { title: 'Contact', homePath: '/', fragment: 'contact', pagePath: '/contact'},
  ]

  constructor(
    public breakpointObserver: BreakpointObserver,
    private bioService: BioService,
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall] || state.breakpoints[Breakpoints.Small]){
        this.isMobile = true;
      } 
      if (state.breakpoints[Breakpoints.Medium]){
        this.isTablet = false;
      }
      if (state.breakpoints[Breakpoints.Large] || state.breakpoints[Breakpoints.XLarge]){
        this.isMobile = false;
        this.isTablet = false;
      }
    })
  }

}
