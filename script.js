/*
ANTRA UŽDUOTIS
Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for loop arba for/of loop pagal tokį šabloną:

Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

Papildomai
Sudėkite sukoduotą skaičiavimą ir spausdinimą į funkcijos ciklą ir jį paleiskite per for loop arba for/of loop nurodydami informaciją iš masyvo.
*/
const divider = 1000000;
var valstybes = [
  {
    saliesPavadinimas: "Japonija",
    valstybesPlotas: 377975,
    gyventojuSkaicius: 125927902,
  },
  {
    saliesPavadinimas: "Kinijos Liaudies Respublika",
    valstybesPlotas: 9596961,
    gyventojuSkaicius: 1412600000,
  },
  {
    saliesPavadinimas: "Korėjos Respublika",
    valstybesPlotas: 100363,
    gyventojuSkaicius: 51744876,
  },
  {
    saliesPavadinimas: "Tailando Karalystė",
    valstybesPlotas: 513120,
    gyventojuSkaicius: 66171439,
  },
  {
    saliesPavadinimas: "Indonezijos Respublika",
    valstybesPlotas: 1904569,
    gyventojuSkaicius: 275773800,
  },
];

for (var valstybe of valstybes) {
  atvaizdavimas(
    valstybe.saliesPavadinimas,
    valstybe.valstybesPlotas,
    valstybe.gyventojuSkaicius
  );
}

function atvaizdavimas(saliesPavadinimas, valstybesPlotas, gyventojuSkaicius) {
  console.log(
    `Šalis: ${saliesPavadinimas}, joje gyvena ${(
      gyventojuSkaicius / divider
    ).toFixed(2)} mln. gyventojų.`
  );
  console.log(
    `Valstybės plotas: ${valstybesPlotas} km², plotas tenkantis vienam gyventojui: ${(
      (valstybesPlotas * divider) /
      gyventojuSkaicius
    ).toFixed(2)} m².`
  );
  console.log("-----------------");
}
