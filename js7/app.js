/* let ul = document.createElement('ul');
let listeHTML = ['a', 'b', 'c','d','e','f'];
for(let liHTML of listeHTML){
  let li = document.createElement('li');
  li.innerHTML = liHTML;
  ul.appendChild(li);
} */

let ul = document.createElement('ul');
document.body.appendChild(ul);
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

createNode('ul', 'body', '','monID', 'maClass');
let listeHTML =['a', 'b', 'c', 'd', 'e', 'f'];