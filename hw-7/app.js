const express = require("express");
const app = express();
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const data = fs.readFileSync('./studenti.json', 'utf-8');
studenti = JSON.parse(data);

app.get("/", (req, res) => {

    res.render("index", { studenti: studenti });
});

app.post("/delete/:id", (req, res) => {
    const index = req.params.id;

    studenti.splice(index, 1);
    res.redirect("/");
});

app.post("/", (req, res) => {
    const newStudent = {
        ime: req.body.ime,
        prezime: req.body.prezime,
        prosek: req.body.prosek,
    };
    studenti.push(newStudent);

    res.redirect('/');
});

app.listen(8080, (err) => {
    if (err) return console.log(err.message);
    console.log("started on 8080");

});
