const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

//middlware for parsing 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));

//html 
require("./routes/htmlRoutes")(app);

//api 
require("./routes/apiRoutes")(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);