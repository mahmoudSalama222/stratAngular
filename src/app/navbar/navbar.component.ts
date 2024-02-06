import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
isScrolled:boolean = true;

updateScroll(){
    this.isScrolled =!(window.scrollY > 40);
}
}
