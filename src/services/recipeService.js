import dbConnect from "../dbConnect"
import Recipe from "../../models/Recipe"


export default async function getAllRecipes() {
    await dbConnect();

    const recipes = await Recipe.find()

    const recipesList = recipes.map(({ id, name, spirits, modifyer, filler, decoration, instructions, alcoholic, category, glas, image }) => {
        return { id, name, spirits, modifyer, filler, decoration, instructions, alcoholic, category, glas, image }

    });

    return recipesList
}