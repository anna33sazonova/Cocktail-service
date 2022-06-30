import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  cocktailList: Cocktail[] = [
    new Cocktail('Mojito', 7, 'img'),
    new Cocktail('Margarita', 8, 'img'),
    new Cocktail('Cosmopolitan', 9, 'img')
  ];

  getCocktails() {
return this.cocktailList
  }
}
