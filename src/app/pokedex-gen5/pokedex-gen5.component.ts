import { Component, signal } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-pokedex-gen5',
  standalone: true,
  imports: [NgFor, NgIf, TitleCasePipe],
  templateUrl: './pokedex-gen5.component.html',
  styleUrl: './pokedex-gen5.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class PokedexGen5Component {
  pokemonList = signal<any[]>([]); 

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonByGeneration(5).subscribe({
      next: (data: any[]) => {
        console.log("Données récupérées : ", data); 
        this.pokemonList.set(data); 
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des Pokémon:', err); 
      }
    });
  }
}
