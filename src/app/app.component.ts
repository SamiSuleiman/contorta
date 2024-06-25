import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/navbar.component';

@Component({
  template: `
    <app-navbar />
    <router-outlet></router-outlet>
  `,
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
})
export class AppComponent {}
