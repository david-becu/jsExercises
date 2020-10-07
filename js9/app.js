//js9 pendu
let wordArrayCached = 'manger';
let wordArray = [];
let wordLength = wordArrayCached.length;
let essai = 6;

for (let i = 0; i < wordLength; i++) {
  wordArray.push('_');
}

console.log(wordArray);
console.log("===============================================");
document.body.addEventListener('keydown', function (event) {

  if ( (wordArray.join('')) == wordArrayCached) {
    console.log('Vous avez gagné!');
  } else {
    if (essai == 1) {
      console.log('Vous avez perdu');
    } else {
      for (let i = 0; i < wordLength; i++) {
        if (event.key == wordArrayCached[i]) {
          wordArray[i] = event.key;
        }
      }
      if (!(wordArrayCached.includes(event.key))) {
        essai = --essai;
        console.log('«'+event.key+'» n\'est pas une lettre contenue dans le mot secret.Nombre d\'essais restant : ' + essai);
      }
      console.log(wordArray);
    }
  }
}

);

/* document.body.appendChild(document.createElement('span')).lastElementChild; */


