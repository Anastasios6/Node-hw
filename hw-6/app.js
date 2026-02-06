const express = require('express');
const path = require('path');
const calculator = require('./controller/calculator');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/calculator", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'calc-form.html'));
});
app.get("/force/:mass/:acc", calculator.fCalc);
app.post("/calculator", calculator.postCalculator);



app.listen(8099, (err) => {
    if (err) return console.log(err.message);
    console.log("started on 8099");
});