import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, RouterLink],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <h1>Home</h1>
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
}
