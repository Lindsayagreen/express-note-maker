const router = require("express").Router();

router.get("/api/notes", (req, res) =>{
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
    console.log(`${req.method} for ${req.path}`);
})

module.exports = router; 