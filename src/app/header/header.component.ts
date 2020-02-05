import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;

  constructor() { }

  ngOnInit() {
  }
  toggleNavbar() {
    console.log('sd');
    this.navbarOpen = !this.navbarOpen;
  }
  about() {
    window.scrollTo(50, 2400);
  }
  course() {
    window.scrollTo(50, 6830);
  }
  contact() {
    window.scrollTo(50, 9000);
  }

  home() {
    window.scrollTo(50, 1205);
  }
}
