const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    mealName: { type: String, required: true },
    foods: [{ name: String, calories: Number, protein: Number, carbs: Number, fats: Number }],
    shared: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Recipe", RecipeSchema);
