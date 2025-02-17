const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Routes
const userRoutes = require("./routes/userRoutes");
const mealRoutes = require("./routes/mealRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const groceryRoutes = require("./routes/groceryRoutes");

app.use("/api/users", userRoutes);
app.use("/api/meals", mealRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/grocery", groceryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(Server running on port ));
