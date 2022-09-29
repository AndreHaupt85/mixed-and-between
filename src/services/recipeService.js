import dbConnect from "../dbConnect"
import Recipe from "../../models/Recipe"


export default async function getAllRecipes() {
    await dbConnect();

    const recipes = await Recipe.find()

    const recipesList = recipes.map(({ id, name, spirits, modifyer, filler, decoration, instructions, alcoholic, category, glass, image }) => {
        return { id, name, spirits, modifyer, filler, decoration, instructions, alcoholic, category, glass, image }

    });

    return recipesList;
}

export async function getRecipeById(recipeId) {
    await dbConnect();

    const recipe = await Recipe.findById(recipeId);

    const { id, name, spirits, modifyer, filler, decoration, instructions, alcoholic, category, glass, image } = recipe;

    return { id, name, spirits, modifyer, filler, decoration, instructions, alcoholic, category, glass, image };
}