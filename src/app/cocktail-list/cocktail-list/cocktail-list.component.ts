import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/cocktail.model';
import { CocktailService } from 'src/app/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})

export class CocktailListComponent {

  cocktails: Cocktail[] = [];

  constructor(public cocktailService:CocktailService) { }
 
 ngOnInit()
  {
    this.cocktailService.getCocktails().subscribe((cocktailList: Cocktail[]) => {
      this.cocktails = cocktailList;
    },
    )
   }

}

