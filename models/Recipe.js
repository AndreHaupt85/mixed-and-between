import mongoose from "mongoose";
import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";

const { Schema } = mongoose;

const recipeSchema = new Schema({
    name: { type: String, required: true },
    spirits: { type: Object, required: true },
    modifyer: { type: Object, required: true },
    filler: { type: Object, required: true },
    decoration: { type: Object, required: true },
    instructions: { type: String, required: true },
    alcoholic: { type: Boolean, required: true },
    category: { type: String, required: true },
    glas: { type: Object, required: true },
    image: { type: String, required: true }
});

const Recipe =
    mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema)

export default Recipe;