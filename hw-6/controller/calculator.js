const fs = require('fs');
const { parseTemplate } = require('../utils/index');

//F = m * a
const fCalc = async (req, res) => {

    const mass = Number(req.params.mass);
    const acc = Number(req.params.acc);
    const calc = mass * acc;

    const response = await parseTemplate('calculator.html', {
        data: calc,
        text: "2nd Newton Law calculator."
    });
    res.send(response);
};

const postCalculator = async (req, res) => {

    const { mass, acc } = req.body;

    if (!mass || !acc) {
        return res.status(400).send("Please provide both mass and acceleration.");
    }

    const rezultat = Number(mass) * Number(acc);

    const response = await parseTemplate("calculator.html", {
        data: rezultat,
        text: "2nd Newton Law calculator .",
    });
    res.send(response);
};

module.exports = { postCalculator, fCalc };