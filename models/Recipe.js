import mongoose from "mongoose";

const { Schema } = mongoose;

const recipeSchema = new Schema({
    name: { type: String, required: true },
    spirits: { type: Array, required: true },
    modifyer: { type: Array, required: true },
    filler: { type: Array, required: true },
    decoration: { type: Array, required: true },
    instructions: { type: String, required: true },
    alcoholic: { type: Boolean, required: true },
    category: { type: String, required: true },
    glass: { type: Array, required: true },
    image: { type: String, required: true }
});

const Recipe =
    mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema)

export default Recipe;
