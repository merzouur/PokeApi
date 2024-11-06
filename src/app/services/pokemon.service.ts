import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http = inject(HttpClient);
  private baseUrl = 'https://pokeapi.co/api/v2';

  getPokemonByGeneration(genId: number): Observable<{ name: string; description: string; sprite: string; animatedSprite: string; types: string[] }[]> {
    return this.http.get<any>(`${this.baseUrl}/generation/${genId}`).pipe(
      switchMap((data) => {
        // Correction de la syntaxe de `pokemonRequests`
        const pokemonRequests: Observable<{ name: string; description: string; sprite: string; animatedSprite: string; types: string[] }>[] =
          data.pokemon_species.map((species: any) =>
            this.getPokemonSpeciesInFrench(species)
          );
        return forkJoin(pokemonRequests);
      })
    );
  }

  private getPokemonSpeciesInFrench(species: any): Observable<{ name: string; description: string; sprite: string; animatedSprite: string; types: string[] }> {
    return this.http.get<any>(species.url).pipe(
      switchMap((speciesData) => {
        // Récupère le nom et la description en français
        const nameInFrench = speciesData.names.find((name: any) => name.language.name === 'fr');
        const descriptionInFrench = speciesData.flavor_text_entries.find(
          (entry: any) => entry.language.name === 'fr'
        )?.flavor_text;

        // Appel pour récupérer les données du Pokémon, y compris les types
        return this.http.get<any>(`${this.baseUrl}/pokemon/${speciesData.id}`).pipe(
          map((pokemonData) => {
            // Récupération des types
            const types = pokemonData.types.map((typeInfo: any) => typeInfo.type.name); // Retourne les noms des types

            return {
              name: nameInFrench ? nameInFrench.name : speciesData.name,
              description: descriptionInFrench || 'Description non disponible en français',
              sprite: pokemonData.sprites.front_default,
              animatedSprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${speciesData.id}.gif`,
              types: types // Ajout du tableau des types
            };
          })
        );
      })
    );
  }
}