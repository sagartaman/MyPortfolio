const express = require('express');
const app = express();
const PORT = 5000;
const path= require("path");
const ejsMate= require("ejs-mate");

// Middleware
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.engine("ejs",ejsMate);

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);


app.listen(PORT, () =>
     console.log(`Server running on http://localhost:${PORT}/home`));
