import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/gen1">Génération 1</a> |
      <a routerLink="/gen2">Génération 2</a> |
      <a routerLink="/gen3">Génération 3</a> |
      <a routerLink="/gen4">Génération 4</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterModule]  // <-- Import du RouterModule ici pour routerLink et router-outlet
})
export class AppComponent {}