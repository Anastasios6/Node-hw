const { readFile, fileWrite } = require("./readwrite.js");
const studentData = './studenti.json'
const newStudent = {
    redenBr: 7,
    grad: "Kriva Palanka",
    prosek: 9.5,
    ime: "Zoran",
    Prezime: "Ivanov"
};

async function addStudent() {
    try {
        const data = await readFile(studentData);
        const studenti = JSON.parse(data);
        studenti.push(newStudent);
        const updatedData = JSON.stringify(studenti);
        await fileWrite(studentData, updatedData);
        console.log("uspesno dodavanje");
    } catch (err) {
        console.log("ima greska");
    }
}


async function nameChange() {
    try {
        const data = await readFile(studentData);
        const studenti = JSON.parse(data);
        const updatedStudenti = studenti.map(student => {
            return {
                ...student, ime: student.ime + "B"
            }
        })

        const updatedData = JSON.stringify(updatedStudenti);

        await fileWrite(studentData, updatedData);
        console.log("uspesna promena vo ime");
        

    } catch (err) {
        console.log("fail");

    }
}
async function studentDel() {
    try {
        const data = await readFile(studentData);
        const studenti = JSON.parse(data);

        const deletedStudentList = studenti.filter(
            student => student.prosek !== 5
        );

        const updatedData = JSON.stringify(deletedStudentList, null, 2);
        await fileWrite(studentData, updatedData);

        console.log("uspesno brisenje");
    } catch (err) {
        console.log("tuka ima greska sea");
        console.error(err);
    }
}
//stavena so samo delete po prosek 5. 

async function main() {
    await addStudent();
    await nameChange();
    await studentDel();
}
main();


