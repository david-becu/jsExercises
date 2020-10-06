// Boucles et tableaux

/* for (let i = 0; i < 10; i++) {
  console.log(i);
}
 
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
 
for (let i = 1; i < 11; i++) {
  console.log(i);
} */

/* for (let i=0; i<101; i++) {
  if( i%2 == 0) {
    console.log(i);
  }
} */

/* for (let i=0; i<101; i=i+2) {
  console.log(i);
} */

/* for(let i = 0; i < 101; i+=2) {
  console.log(i);
} */

/* for (let i = 0, j = 1; i < 4 && j < 3; i++, j++) {
  console.log(i, j);
}
*/
/* for (let i = 0; i < 100; i++) {
  if (i === 10) {
    break;
  }
console.log(i)
} */

/* let texte = "";
for (let i = 0; i < 3; i++) {
  if (i === 1) {
    continue;
  }
  texte += i;
}
console.log(texte); */

/* let i = 0;
  while (i < 3) {
    i++;
    console.log(i); // 1, 2, 3
  } */

/* let i = 0;
do {
  i++;
  console.log(i);
} while (i < 10); */

/* let Voiture = {
  couleur: 'Bleu',
  puissance: 6,
  type: 'Berline'
};
console.log(Voiture);
 */

/* let maPhrase = 'Salut toi !';
console.log(maPhrase.length);
console.log(maPhrase.includes('toi')); */

/* startsWith
endsWith */

/* console.log(maPhrase..toUpperCase())
console.log(maPhrase.toUpperCase()) */

/* toLowerCase
'Bonjour'.charAt(2); */

/* let phrase="Ceci est une phrase";
let longueur = phrase.length;
let inLine = '';
for(longueur; longueur != -1; longueur--) {
  inLine += phrase.charAt(longueur);
  console.log(phrase.charAt(longueur));
}
console.log(inLine); */

/* let maPhrase = 'Salut toi !';
let i = maPhrase.length;
while(i>=0){
  console.log(maPhrase.charAt(i));
  i--;
} */

/* for(let j = maPhrase.length; j >= 0; j--) {
  console.log(maPhrase.charAt(j));
  // OU
  console.log(maPhrase[j]);
} */

// A l'aide d'une boucle vous devez afficher les
// chiffres paires de façon croissante (jusqu'a 100)
// ET les chiffres impaires de façon décroissante

/* for (let i = 0, j = 99; i <101 && j>= 0; i+=2, j-=2) {
  console.log(i,j);
} */

/* function inverse(maPhrase) {
  let i = maPhrase.length -1;
  while(i>=0) {
    console.log(maPhrase.chartAt(i));
    i--;
  }
}
inverse('kayak'); */




/* // caracteres.replace(/[^A-Z0-9]/ig,"").length
function inverser(caracteres) {
  let longueur = caracteres.length;
  let inLine = '';
  for (longueur; longueur != -1; longueur--) {
    inLine += caracteres.charAt(longueur.toString());
  }
  return inLine;
}
console.log(inverser('Je sais pas faire ça en une seule ligne.'));

 */



// ====================== JS : 23/09/2020 =======================

/* // example
let monTableau=["name","surname","age", 14]; */

/* let monTableau=["name","surname","age", 14];
console.log(monTableau);

console.log(monTableau[0]);
console.log(monTableau[1]);
console.log(monTableau[2]);
console.log(monTableau[3]);
// affiche la longueur du tableau
console.log(monTableau.length);
// affiche ledernier élément pour un tabvleau de taille inconnue
console.log(monTableau[monTableau.length-1]);

console.log(monTableau.join(' '));

let maChaine = "Hello World";
console.log(maChaine.split(' '));
console.log(maChaine);
 
// ajoute au debut
monTableau.unshift('element du debut');
console.log("unshift : ajoute au début du tableau ",monTableau);
 
// element à la fin
monTableau.push('element final');
console.log("push : ajouté à la fin ",monTableau);
 
// supprime le dernier element
monTableau.pop('element du debut');
console.log(monTableau);
 
// supprime le premier
monTableau.shift('element du debut');
console.log(monTableau); */

/* let couleurs = ["bleu","jaune","vert","orange","violet","blanc","noir"];

for(let i=0; i < couleurs.length; i++) {
  console.log(couleurs[i]);
}

couleurs.forEach(function(toto) {
 console.log(toto);
})

for (let couleur of couleurs) {
 console.log(couleur);
}

for (let i in couleurs) {
 console.log(couleurs[i]);
}

// 0 = blanc ; 1 = noir

let jeuDeDame = [
 [0,1,0,1],
 [1,0,1,0],
 [0,1,0,1],
 [1,0,1,0]
];

jeuDeDame.forEach(function(ligne) {
 ligne.forEach(function(cellule) {
   console.log(cellule)
 })
}) */

/* let monTableau = [1, 5, 1, 0, 2, 8, 5, 2, 5, 9];
//Créer une fonction retournant key
function paireV1(monTableau) {
  for (let i in monTableau) {
    if (monTableau[i] % 2 == 0) {
      console.log(monTableau[i])
    }
  }
} */

/* function paireV2(monTableau) {
  let monTableau2 = [];
  for (let i in monTableau) {
    if (monTableau[i] % 2 == 0) {
      monTableau2[i] = monTableau[i];
    }
  }
  monTableau = monTableau2;
  console.log(monTableau);
} */


/* // version inachevée
function paireV3(monTableau) {
  for (let i in monTableau) {
    if (monTableau[i] % 2 != 0) {
      monTableau.shift();
    } else {
      monTableau[monTableau.length]
    }
  }
  console.log(monTableau);
}

function epureTableauImpaire(tableau){
  let newTableau = [];
  monTableau.forEach(function(e){
    if(e%2 == 0){
      newTableau.push(e);
    }
  });
  return newTableau;
}

function epureTableauImpaireFilter(tableau){
  return tableau.filter(elem => elem%2 === 0);
}

paireV1(monTableau);
paireV2(monTableau);
paireV3(monTableau); */