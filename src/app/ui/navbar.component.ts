import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  template: `
    <div class="navbar">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl" [routerLink]="['/']">Home</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li [routerLink]="['/blog']"><a>/Blog</a></li>
        </ul>
      </div>
    </div>
  `,
  standalone: true,
  imports: [RouterLink],
  selector: 'app-navbar',
})
export class NavbarComponent {}
