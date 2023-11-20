const router = require("express").Router();
const uniqid = require("uniqid");
// const fs = require("fs");
// const util = require("util");
// const readFromFile = util.promisify(fs.readFile);
const { readFile, writeFile } = require("fs/promises");

router.get("/api/notes", (req, res) => {
  readFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
  console.log(`${req.method} for ${req.path}`);
});
router.post("/api/notes", (req, res) => {
  readFile("./db/db.json").then((data) => {
    console.log(data);
    let notes = JSON.parse(data);
    console.log(notes);
    console.log(req.body);
    const keys = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(),
    };
    console.log(keys);
    notes.push(keys);
    writeFile("./db/db.json", JSON.stringify(notes)).then((data) =>
      res.json(notes)
    );
  });
});

module.exports = router;
