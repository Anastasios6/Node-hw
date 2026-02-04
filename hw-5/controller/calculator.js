const fs = require ("fs");
const {parseTemplate} = require ("../utils/index.js")

const calc = async (req, res) => {
    const mass = req.params.mass;
    const acc = req.params.acc;
    const L = mass * acc;
    const response = await parseTemplate("calculator.html", {
        data: L,
        ime: "Newton Law Calc"
    });
    res.send(response)
}

module.exports = {
    calc
}