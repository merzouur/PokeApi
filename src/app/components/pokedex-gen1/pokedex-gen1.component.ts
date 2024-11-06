import { Component, signal, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { TitleCasePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pokedex-gen1',
  template: `
    <h2>Génération 1 </h2>
    <div *ngIf="pokemonList() && pokemonList().length > 0; else loading">
      <div *ngFor="let pokemon of pokemonList()">
        <p><strong>{{ pokemon.name | titlecase }}</strong></p>
        <p>{{ pokemon.description }}</p>
        <img [src]="pokemon.animatedSprite" alt="Sprite animé de {{ pokemon.name }}">
      </div>
    </div>
    <ng-template #loading>
      <p>Chargement des Pokémon...</p>
    </ng-template>
  `,
  standalone: true,
  imports: [TitleCasePipe, NgFor, NgIf],
  providers: [PokemonService]
})
export class PokedexGen1Component implements OnInit {
  pokemonList = signal<any[]>([]);  

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonByGeneration(1).subscribe({
      next: (data: any) => {
        this.pokemonList.set(data); 
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des Pokémon:', err);
      }
    });
  }
}