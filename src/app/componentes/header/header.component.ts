import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() sideBarToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  SideBarToggled() {
    this.menuStatus = !this.menuStatus;
    this.sideBarToggled.emit(this.menuStatus);
  }

  exit() {
    window.localStorage.removeItem('token');
    this.router.navigate(['']);
    window.location.reload();
  }
}
