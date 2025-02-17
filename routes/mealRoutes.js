const express = require("express");
const router = express.Router();
const Meal = require("../models/Meal");

router.post("/", async (req, res) => {
    try {
        const meal = new Meal(req.body);
        await meal.save();
        res.status(201).json(meal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:userId", async (req, res) => {
    try {
        const meals = await Meal.find({ userId: req.params.userId });
        res.status(200).json(meals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
