const path = require("path");

router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    console.log(`${req.method} for ${req.path}`);
})

router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
    console.log(`${req.method} for ${req.path}`);
}) 

module.exports = router; 