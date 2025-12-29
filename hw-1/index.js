const studenti = [
  { ime: "Bojan", prosek: 7.2, grad: "Skopje" },
  { ime: "Ana", prosek: 8.3, grad: "Skopje" },
  { ime: "Janko", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Vesna", prosek: 9.1, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Tetovo" },
  { ime: "Vancho", prosek: 9.4, grad: "Kumanovo" },
  { ime: "Simona", prosek: 9.7, grad: "Kratovo" },
  { ime: "Trajamla", prosek: 7.4, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Ohrid" },
  { ime: "Natasha", prosek: 9.0, grad: "Kichevo" },
  { ime: "Stanko", prosek: 8.5, grad: "Demir Kapija" },
  { ime: "Damjan", prosek: 6.2, grad: "Kumanovo" },
  { ime: "Sandra", prosek: 8.2, grad: "Ohrid" },
];

//? 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).

const rezultat = studenti
  .filter(studenti => studenti.grad === "Skopje" && studenti.ime.endsWith("a") && studenti.prosek > 7)
  .sort((a, b) => b.prosek - a.prosek);

console.log(rezultat);

//? 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
console.log("Rezultat2");

const rezultat2 = studenti
  .filter(studenti => studenti.grad !== "Skopje" && studenti.prosek > 9)
   .sort((a, b) => b.prosek - a.prosek);

console.log(rezultat2);

//? 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.

console.log("Rezultat3");
const rezultat3 = studenti
  .filter(studenti => studenti.ime.length === 5)
  .sort((a, b) => b.prosek - a.prosek)
  .slice(0, 3);
console.log(rezultat3);

//? 4. Вкупен просек на студенти кои се од Куманово
console.log("rezultat4");
const prosekKumanovo = studenti.map((x) => x.grad === "Kumanovo" && x.prosek);

  const sumProsek = prosekKumanovo.reduce((a, vrednost) => a + vrednost,);
  console.log(`vkupen prosek na studenti od Kumanovo  ${sumProsek}`);

//? 5. Просек на просеците од градовите Скопје и Охрид
console.log("rezultat5");
const studentiSkopje = studenti
  .filter(studenti => studenti.grad === "Skopje")
console.log(studentiSkopje);
const studentiOhrid = studenti
  .filter(studenti => studenti.grad === "Ohrid")
console.log(studentiOhrid);

const prosekSkopje = studentiSkopje.length > 0
  ? studentiSkopje.reduce((sum, student) => sum + student.prosek, 0) / studentiSkopje.length
  : 0;

console.log(`Prosek na prosecite od Skopje: ${prosekSkopje}`);

const prosekOhrid = studentiOhrid.length > 0
  ? studentiOhrid.reduce((sum, student) => sum + student.prosek, 0) / studentiOhrid.length : 0;
console.log(`Prosek na prosecite od Ohrid: ${prosekOhrid}`);

//? 6. Да се додаде уште еден студент со име Горан, просек 7.3 и град Делчево
console.log("rezultat6");
const newStudent = {
  ime: "Goran",
  prosek: 7.3,
  grad: "Delcevo"
};
studenti.push(newStudent);
console.log(studenti);

//? 7. Да се избрише првиот студент во студенти
console.log("Rezultat 7");
studenti.shift()
console.log(studenti);

//? 8. Да се креира нов array каде што студентите од Охрид и Куманово каде што оценките со просек се за 1 поголем(Динамички)
console.log("Rezultat8");
const ocenkiProsekOhrid = studentiOhrid.map((s) => {
  return {
    ...s, prosek: s.prosek + 1,
  };
});
const studentiKumanovo = studenti.filter(studenti => studenti.grad === "Kumanovo")
const ocenkiProsekKumanovo = studentiKumanovo.map((s) => {
  return {
    ...s, prosek: s.prosek + 1,
  };
});
const proseciOhridSkopje = [...ocenkiProsekOhrid, ...ocenkiProsekKumanovo];
console.log(proseciOhridSkopje);











