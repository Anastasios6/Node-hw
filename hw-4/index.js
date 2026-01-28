const http = require('http');
//? Servis koj kje obrabotuva ruti od sledniot tip
const handler = (req, res) => {
    let greeting = "hello";
    if (req.url.startsWith('/ime/') && req.method === 'GET') {
        const parts = req.url.split("/");
        //da go povlecam imeto od url-to
        const name = parts[2];
        //Dolzina na imeto da odredam
        const karakteri = name.length;
        //Da gi prefrlam vo mali bukvi za da povlecam soglaski/samoglaski
        const lowerCaseName = name.toLowerCase();
        //da odredam koi se samoglaski
        const samoglaski = ['a', 'e', 'i', 'o', 'u'];
        //go stavam countot da bide za pocetok 0 
        let samoglaskiCount = 0;
        let soglaskiCount = 0;
        //go racunam countot na samoglaski 
        for (let char of lowerCaseName) {
            if (char >= 'a' && char <= 'z') {
                if (samoglaski.includes(char)) {
                    samoglaskiCount++;
                } else {
                    soglaskiCount++;
                }
            }
        }
        //Imeto dali e parno ili neparno
        const parNepar = (karakteri % 2 === 0) ? "Par" : "Nepar";
        //rezultatot.
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
