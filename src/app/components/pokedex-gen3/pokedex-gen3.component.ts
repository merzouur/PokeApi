import { Component, OnInit, signal } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgForOf, NgIf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokedex-gen3',
  standalone: true,
  imports: [NgForOf, NgIf, TitleCasePipe],
  templateUrl: './pokedex-gen3.component.html',
  styleUrl: './pokedex-gen3.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class PokedexGen3Component {
  pokemonList = signal<any[]>([]); 

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonByGeneration(3).subscribe({
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


