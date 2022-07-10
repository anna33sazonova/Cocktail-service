import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from './cocktail.model';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  cocktailUrl = 'assets/cocktails.json'
  
  constructor(private http: HttpClient) {}


getCocktails(): Observable<Cocktail[]> { 
  
  return this.http.get<Cocktail[]>(this.cocktailUrl);

}
}
/**  
export class CocktailService {
  public cocktailList: Cocktail[] = [
    new Cocktail('Mojito', 7, 'img'),
    new Cocktail('Margarita', 8, 'img'),
    new Cocktail('Cosmopolitan', 9, 'img')
  ];

  getCocktails() {
return this.cocktailList
  }
} 
*/

/**  
export class CocktailService {

  constructor(private http: HttpClient) {this.http = http}

  cocktailUrl = 'assets/cocktails.json'

getCocktails() { return this.http.get<Cocktail>(this.cocktailUrl);

}
}
*/