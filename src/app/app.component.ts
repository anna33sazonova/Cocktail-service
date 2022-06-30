import { Component } from '@angular/core';
import { CocktailService } from './cocktail.service';
import { CocktailListComponent } from './cocktail-list/cocktail-list/cocktail-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CocktailService';

}
