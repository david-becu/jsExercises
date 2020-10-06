// conditions if ; else ; switch ; expression ternaire
/* var age = 22;
if (age > 18) {
  console.log('ok');
}
else if (age == 18) {
  console.log('Egale à 18');
}
else {
  console.log('KO');
}
switch (age) {
  case 20:
    console.log(20);
    break;
  case 21:
    console.log(20);
    break;
  default:
    console.log('autre');
}
var estMajeur = (age > 18) ? true : false;
console.log(estMajeur); */

// exemple
/* const age = 18;
  switch (age) {
    case 21:
      console.log('Tu peux boire de l’alcool aux Etats-Unis.');
    case 18:
      console.log('Tu peux boire de l’alcool en France.');
    case 16:
      console.log('Tu peux boire de l’alcool à Cuba.');
    case 14:
      console.log('Tu peux boire de la bière en Allemagne.');
      break;
    default:
      console.log('Rien pour toi cette année.');
  } */

// exemple
  /* const pays = 'France';
switch (pays) {
    case 'France':
    case 'Allemagne':
    case 'Italie':
    case 'Espagne':
        console.log('Tu es européen !');
        break;
    case 'Corée':
    default:
        console.log("Tu n’es pas européen.");
} */

//*******************************************

// Problème 1, confusion dans les blocs {} :
/* var x = 1;
if (true) {
  var x = 2; // même variable, car sa portée n'est pas celle du bloc !
  console.log(x); // 2
}
console.log(x); // 2 */

//****************************************

// Problème 2, la portée n'est pas restreinte aux blocs {} :
/* var a = 1;
var b = 2;
if (a === 1) {
  var a = 3; // la portée est globale
  let b = 4; // la portée est celle du bloc
  console.log(a); // 3
  console.log(b); // 4
}
console.log(a); // 3
console.log(b); // 2 */

//*****************************************

// Problème 3, pas d'erreur levée en cas de déclarations multiples :
// Vous aurez simplement un warning dans les navigateurs récents.
/* var i = 1;
var i = 2;
var ajouter = function(a, b) {
  return a + b;
};
var ajouter = function(a, b) {
  return a + b;
}; */

//***************************************

// Problème 4 : problème des boucles avec de l'asynchrone :
/* for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
} */

//****************************************

// Portée des variables avec let
// (ne plus utiliser var désormais)
/* let test = false;
if (true) {
  let test = true;
 console.log(test);
}
console.log(test); */

//****************************************

/* En JavaScript vous entendrez probablement parler du hoisting ou remontée des 
déclarations ou hissage en français. Il s'agit d'une spécificité du langage qui
fait que lorsque l'interpréteur parse (parcourt et analyse) votre code, il va
automatiquement remonter toutes les déclarations en haut de votre code.
Cela permet d'écrire cela et de ne pas avoir d'erreur : */

/* a = 2;
let a;
console.log(a); // 2 */

/* const a = 1;
let b = a;
console.log(a, b);
b = 2;
console.log(a, b); */

/* const obj = {a: 1};
const obj2 = obj;
obj2.a = 2;
console.log(obj); */

//****************************************

// exercice 1
/* var anneeEnCours =new Date().getFullYear();
var ageSaisie = prompt('Quel est votre année de naissance?');
if(anneeEnCours-ageSaisie >= 18) {
  console.log('vous etes majeur');
} else {
  console.log('vous etes mineur');
} */

//***************************************

// exercice 2
/* var year=prompt('Entrez une année : ');
if ( (year%400 == 0) || ((year%4 == 0) && (year%100 !=0)) ) {
  console.log('année bissextile');
} else {
  console.log('année pas bissextile');
} */

//**************************************

// exercice 3
// L'utilisateur X demande une subvention pour son entreprise : 
// Il est éligible à une réduction de 10% du CA Si :
// Son revenu de l'année en cours est compris entre 30000 et 60000 annuel
// Il est éligible à une réduction de 20% du CA Si :
// Son revenu de l'année en cours est compris entre 20000 et 20999 annuel MAIS que le revenu de l'année précédente n'excède pas 50000
// Il a 5% supplémentaire si l'année en cours est bissextile :)
// En 2019 il a déclaré 44000 et en 2020 il a déclaré 50000 
// A combien peut-il prétendre en pourcentage ? 
// Quel est le montant de la réduction finale  ?
/* let declaration2019 = 44000;
let declaration2020 = 50000;
let reduction = 0;

// fonction bis(year) année bissextile ?
function bis(year) {
  let bissextile = false;
  return ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0)));
}

// fonction reduc(bis) calcul réduction
function reduc(bis) {
  if (declaration2020 >= 30000 && declaration2020 <= 60000) {
    reduction = 10;
  } else {
    if ((declaration2020 >= 20000 && declaration2020 <= 20999) && !(declaration2018 > 50000)) {
      reduction = 20;
    }
  }
  if (bis) {
    reduction = reduction + 5;
  }
  console.log("réduction", reduction, "%");
  console.log(declaration2020 * (reduction / 100));
}
reduc(bis(2020)); */