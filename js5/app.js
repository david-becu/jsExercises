//Récupère le premier noeud de type élément
console.log(monParagraphe.firstElementChild);
//Récupère le dernier noeud de type élément
console.log(monParagraphe.lastElementChild);
//Récupère les noeuds enfants
console.log(monParagraphe.childNodes)
//Aller sur le noeud suivant
console.log(monParagraphe.nextElementSibling);

//====================================================

let nouveauLien = document.createElement('a');
nouveauLien.href = 'https://google.fr';
// ou
// nouveauLien.setAttribute('href', 'https://google.fr');
nouveauLien.innerHTML = 'Lien 1.4';
console.log(nouveauLien);

//----------------------------------------------------

// On accroche le nouveau noeud comme enfant du noeud 
// #divParent p:first-child
document.querySelector('#divParent p:first-child').appendChild(nouveauLien);

//----------------------------------------------------

//On doit cibler le noeud parent de reference afin de lui indiquer quel noeud
// (nouveauLien) doit-être inséré avant quel autre noeud 
//(ici on cible le premier élément de la liste)
document.querySelector('#divParent p:first-child').insertBefore(
  nouveauLien,
  document.querySelector('#divParent p a:first-child')
);

//-------------------------------------------------------

// Pour supprimer un noeud il faut avant tout cibler le noeud parent et lui indiquer
// via la méthode removeChild quel noeud enfant nous souhaitons supprimer
document.querySelector('#divParent p:first-child').removeChild(
  document.querySelector('#divParent p a:last-child')
);

