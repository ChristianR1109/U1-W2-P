/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("Esercizio 1");
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  const temp = pets[i];
  console.log(temp);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("Esercizio 2");
console.log(pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("Esercizio 3");
console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
//In questo caso troviamo l'array già modificato più volte, per tornare alle posizioni dell'array originale basterebbe rifare le operazioni precedenti al contrario.
console.log("Esercizio 4");
pets.push(pets[0]);
pets.shift();
console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("Esercizio 5");
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
function CreateLicensePlate() {
  const n1 = 7;
  const alphabet = "ABCDEFGHILMNOPQRSTUVZ";
  let licenseplateValue = "";
  for (let i = 0; i < n1; i++) {
    const casualN = Math.floor(Math.random() * alphabet.length);
    licenseplateValue += alphabet[casualN];
    const casualN2 = Math.floor(Math.random() * 1000);
    result = licenseplateValue.slice(0, 2) + casualN2 + licenseplateValue.slice(5, 7);
  }
  return result;
}
const n = cars.length;
for (let i = 0; i < n; i++) {
  cars[i].licensePlate = CreateLicensePlate();
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("Esercizio 6");
cars.push({
  brand: "Fiat",
  model: "Panda",
  color: "yellow",
  trims: ["Base", "CityLife"],
  licensePlate: CreateLicensePlate(),
});
const newN = cars.length;
for (let i = 0; i < newN; i++) {
  cars[i].trims.pop();
}
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("Esercizio 7");
const justTrims = [];
for (let i = 0; i < newN; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("Esercizio 8");
for (let i = 0; i < newN; i++) {
  if (cars[i].color.toLocaleLowerCase().startsWith("b")) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("Esercizio 9");
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let j = 0;
const pos = numericArray.indexOf(32);
while (j <= pos) {
  console.log(numericArray[j]);
  j++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("Esercizio 10");
const charactersArray = ["g", "n", "u", "z", "d"];
const newArray = [];
const num = charactersArray.length;
let pos2 = 0;
for (let i = 0; i < num; i++) {
  let temp = charactersArray[i];

  switch (temp) {
    case "a":
      pos2 = 1;
      break;
    case "b":
      pos2 = 2;
      break;
    case "c":
      pos2 = 3;
      break;
    case "d":
      pos2 = 4;
      break;
    case "e":
      pos2 = 5;
      break;
    case "f":
      pos2 = 6;
      break;
    case "g":
      pos2 = 7;
      break;
    case "h":
      pos2 = 8;
      break;
    case "i":
      pos2 = 9;
      break;
    case "l":
      pos2 = 10;
      break;
    case "m":
      pos2 = 11;
      break;
    case "n":
      pos2 = 12;
    case "o":
      pos2 = 13;
    case "p":
      pos2 = 14;
    case "q":
      pos2 = 15;
    case "r":
      pos2 = 16;
    case "s":
      pos2 = 17;
    case "t":
      pos2 = 18;
      break;
    case "u":
      pos2 = 19;
      break;
    case "v":
      pos2 = 120;
      break;
    case "z":
      pos2 = 21;
      break;
  }
  newArray[i] = pos2;
}
console.log(newArray);
//Utilizzando un qualsiasi array casuale basterebbe estendere i case per ogni lettera dell'alfabeto, es. case "a ": pos=1; e così via fino alla z.
//Il ciclo for prenderà in automatico la grandezza dell'array inserito grazie alla funzione .length, che ci permette di inserire il numero di elementi nel ciclo for.
