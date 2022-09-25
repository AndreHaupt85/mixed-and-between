import mongoose from "mongoose";
import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";

const { Schema } = mongoose;

const recipeSchema = new Schema({
    Name: { type: String, required: true },
    Spirits: { type: Object, required: true },
    Modifyer: { type: Object, required: true },
    Filler: { type: Object, required: true },
    Decoration: { type: Object, required: true },
    Instruction: { type: String, required: true },
    Typ: { type: String, required: true },
    Kategorie: { type: String, required: true },
    Glas: { type: Object, required: true },
    Bild: { type: String, required: true }
});

const Recipe =
    mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema)

export default Recipe;