const http = require('http');

const handler = (req, res) => {

    if (req.url.startsWith('/ime/') && req.method === 'GET') {
        const parts = req.url.split("/");
        const name = parts[2];
        const karakteri = name.length;
        const lowerCaseName = name.toLowerCase();
        const samoglaski = ['a', 'e', 'i', 'o', 'u'];
            
        let samoglaskiCount = 0;
        let soglaskiCount = 0;

        for (let char of lowerCaseName) {
            if (char >= 'a' && char <= 'z') {
                if (samoglaski.includes(char)) {
                    samoglaskiCount++;
                } else {
                    soglaskiCount++;
                }
            }
        }

        const parNepar = karakteri % 2 === 0 ? "Par" : "Nepar";

        const rezultat = {
            name: name,
            karakteri: karakteri,
            samoglaski: samoglaskiCount,
            soglaski: soglaskiCount,
            parNepar: parNepar
        }
        return res.end(JSON.stringify(rezultat));
    } else {
        res.write("Vnesete ime vo urlto koristejki /ime/")
        res.end();
    }
};
const server = http.createServer(handler);
server.listen(9000, (err) => {
    if (err) return console.log(err.message);
    console.log("server running on 9000");
})
