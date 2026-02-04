const express = require ("express");
const calculator = require ("./controller/calculator");

const app = express();
app.use (express.urlencoded({extended:true}));
pp.get("/", (req, res) => {
    res.send("use /calculator/mass/acc in the url to find the result");
});

app.get ("/calculator/:mass/:acc", calculator.calc);

app.listen(9000,(err) => {
    if (err) return console.log(err.message);
    console.log("server started");
});