

// VOORRAAD ARRAY MET TV'S

const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];


//Opdracht 1 - Array Methoden
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
const typeTv = inventory.map((inventorie) => {
  return inventorie.type;
});

console.log(typeTv);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
//pseudo: wanneer originalStock === sold, dan is true.
const soldOutTvs = inventory.filter((tv) => {
  return tv.sold === tv.originalStock;
});
console.log(soldOutTvs);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
//pseudo: wanneer ambilight = true, dan is true. --> nee dus, of 'ie het heeft is genoeg, geen true gebruiken.
const withAmbilight = inventory.filter(tv => tv.options.ambiLight);
console.log(withAmbilight);

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
//pseudo: inventory.sort
//inventory.sort((a, b) => a.price - b.price); "Ik heb deze uit gecomment ivm de rest van de opdrachten"
console.log(inventory);

//Opdracht 2 - Elementen in de DOM plaatsen
//Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!

//    Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let sumSold = 0;

for (let i = 0; i < inventory.length; i++) {
  sumSold += inventory[i].sold;
}

console.log(sumSold);

//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
const amountSold = document.getElementById('amountSold');

amountSold.textContent = sumSold;

//    Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let sumOriginalStock = 0;

for (let i = 0; i < inventory.length; i++) {
  sumOriginalStock += inventory[i].originalStock;
}

console.log(sumOriginalStock);

//Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
const amountStock = document.getElementById('amountStock');

amountStock.textContent = sumOriginalStock;

//    Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
//Pseudo: eerst formule schrijven om het verschil te berekenen: originalstock-sumsold.
//Pseudo: Dan injecteren op de pagina.
const difference = sumOriginalStock - sumSold;
console.log(difference);

const differenceSoldStock = document.getElementById('differenceSoldStock');
differenceSoldStock.textContent = difference;


//Opdracht 3 - Array methoden en functies
//Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.
//Pseudo: array-methode maken, deze langsloopen en uitkomst returnen in een Ol, als een li dmv innerhtml.

const brands = inventory.map((merk) => {
  return merk.brand;
});

let list = "<ul>";
for (let i = 0; i < brands.length; i++) {
  list += `<li>${brands[i]}</li>`;
}
list += "</ul>";

document.getElementById("listBrands").innerHTML = list;

//wat ik heb gedaan: een nieuwe array gemaakt (brands). Een let (list) aangemaakt van een ul. loopen langs de items binnen de nieuwe array en de items van de nieuwe array toevoegen aan de let list. de ul afsluiten. De list plaatsen in html.


//Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!
function listingBrands (inventory) {
  const brands = inventory.map((merk) => {
    return merk.brand;
  });
  let list = "<ul>";
  for (let i = 0; i < brands.length; i++) {
    list += `<li>${brands[i]}</li>`;
  }
  list += "</ul>";

  document.getElementById("listBrands").innerHTML = list;
}

listingBrands(inventory);


/*Opdracht 4 -Functies
Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:

    Philips 43PUS6504/12 - 4K TV
€379,-
    43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.*/
function getSpecs () {
  const specifications = document.getElementById("tvSpecs");
  specifications.innerHTML = `<p>
 ${inventory[0].brand} ${inventory[0].type} - ${inventory[0].name}
 </p>`
}

getSpecs();

/* Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.*/
function price (number) {
  return `€${number},-`
}

const outcome = price (inventory[0].price);
console.log(outcome);
/*Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.*/
// pseudo: input is bijvoorbeeld inventory[0]. dan moet de inventory[0].availableSizes eruit komen in de vorm van .. inch (..*2,54 cm).
// if availableSizes = more than two (bestaat dit?) dan += | inch (cm).

const vanafHierStopteMijnBreinErmee
const schermgrootte = inventory[i].availableSizes;
const schermgrootteOmgerekend = schermgrootte * 2.54;

function getSizes () {
  const sizes = inventory.map((size) => {
    return `${schermgrootte} inch (${schermgrootteOmgerekend} cm)`;
  });
}

/*
}
let ... = 0;

for (let i = 0; i < inventory.length; i++) {
  sumSold += inventory[i].sold;
}

console.log(sumSold);



/* Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

    Philips 43PUS6504/12 - 4K TV
€379,-
    43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.*/