const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const PORT = process.env.PORT || 3001;
const app = express();

//middlware for parsing 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));

//html 
// require("./routes/htmlRoutes")(app);
app.use(htmlRoutes);


//api 
// require("./routes/apiRoutes")(app);
app.use(apiRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);