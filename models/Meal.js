const mongoose = require("mongoose");

const MealSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    mealType: { type: String, required: true },
    day: { type: String, required: true },
    foods: [{ name: String, calories: Number, protein: Number, carbs: Number, fats: Number }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Meal", MealSchema);
