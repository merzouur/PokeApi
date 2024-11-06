// route.ts
import { Routes } from '@angular/router';
import { PokedexGen1Component } from './components/pokedex-gen1/pokedex-gen1.component';
import { PokedexGen2Component } from './components/pokedex-gen2/pokedex-gen2.component';
import { PokedexGen3Component } from './components/pokedex-gen3/pokedex-gen3.component';
import { PokedexGen4Component } from './components/pokedex-gen4/pokedex-gen4.component';

export const routes: Routes = [
  { path: 'gen1', component: PokedexGen1Component },
  { path: 'gen2', component: PokedexGen2Component },
  { path: 'gen3', component: PokedexGen3Component },
  { path: 'gen4', component: PokedexGen4Component },
  { path: '', redirectTo: '/gen1', pathMatch: 'full' }
];