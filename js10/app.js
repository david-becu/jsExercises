// création d'un nœud
function createNode(tag, elementParent, contenuHTML, id, nomClass) {
  let elem= document.createElement(tag);
  if(typeof id !== 'undefined') {
    elem.setAttribute('id',id);
  }
  if(typeof nomClass !== 'undefined') {
    elem.className = nomClass;
  }
  if(typeof contenuHTML !== 'undefined') {
    elem.innerHTML = contenuHTML;
  }
  document.querySelector(elementParent).appendChild(elem);
}
// définir la taille de la boite de départ
// qui permettra de visualiser le résultat final
function boxContainer(x, y) {
  let box = document.createElement('div');
  box.setAttribute('class', 'boxClass');
  box.style.width = '${x}px';
  box.style.height = '${y}px';
  box.style.border = '#000 3px solid';
  document.body.appendChild(box);
}
 // définir les éléments de saisie pour la création des nœuds.
 // =======================================================================
 // label reçoit la valeur pour l'attribut «for» de
 // l'élément «label» et pour l'attribut «id» de l'élément «input» 
 // «field» peut prendre l'une des valeurs suivantes : «text» et «number»
 // «type» doit être un texte court (entre '' ou "").
function fieldType (label, field, type){

}
