import { IIngredient } from './IIngredient';
import { IInstruction } from './IInstruction';

export interface IRecipe {
  recipeId: string | undefined;
  title: string;
  description: string;
  instructions: IInstruction[];
  ingredients: IIngredient[];
}
