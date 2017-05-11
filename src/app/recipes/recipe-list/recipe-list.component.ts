import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
  	new Recipe('A test recipe 2', 'This is a simply a test!!!', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
  	new Recipe('A test recipe', 'This is a simply a test', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRUCjnRYlj2NiUeoYhRBiHOq7NTJ7aJ9jvT0WrjSvxR0fiN1x2z')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
