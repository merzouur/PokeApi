import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <nav class="navbar">
  <div class="navbar-logo">
    <a href="/">Pokédex</a>
  </div>
  <ul class="navbar-links">
    <li><a routerLink="/gen1">Génération 1</a></li>
    <li><a routerLink="/gen2">Génération 2</a></li>
    <li><a routerLink="/gen3">Génération 3</a></li>
    <li><a routerLink="/gen4">Génération 4</a></li>
    <li><a routerLink="/gen5">Génération 5</a></li>
  </ul>
</nav>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterModule] 
})
export class AppComponent {}