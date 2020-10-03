// js6

// Générer l'ensemble des balises de cette page https://html5boilerplate.com/
// (uniquement celles du body) en Javascript uniquement !
// Balise et contenu, en gros une fois la page générée elle doit contenir
// la meme chose que le site actuel

function tag(parent, nameTag) {
  let domTag = document.createElement(nameTag);
  document.querySelector(parent).appendChild(domTag);
}
// main =====
tag("body", "main");
// section
tag("main", "section");
tag("main", "section");
tag("main", "section");
tag("main", "section");

// slogan ---------------------------------
let titleH2 = document.createElement('h2');
titleH2.innerHTML = 'Save time. Create with confidence.';
document.querySelector('section').appendChild(titleH2);

// text1 : analytics-------------------------
let subTitle1 = document.createElement('h3');
subTitle1.innerHTML = '★ Analytics, icons, and more';
document.querySelector('body').appendChild(subTitle1);

let paragraph1 = document.createElement('p');
paragraph1.innerHTML = 'A lean, mobile-friendly HTML template; optimized Google Analytics snippet; placeholder touch-device icon; and docs covering dozens of extra tips and tricks.';
document.querySelector('body').appendChild(paragraph1);

// text2 : normalize-------------------------
let subTitle2 = document.createElement('h3');
subTitle2.innerHTML = '★ Normalize.css and helpers';
document.querySelector('body').appendChild(subTitle2);

let paragraph2 = document.createElement('p');
paragraph2.innerHTML = 'Includes Normalize.css — a modern, HTML5-ready alternative to CSS resets — and further base styles, helpers, media queries, and print styles.';
document.querySelector('body').appendChild(paragraph2);

// text3 : modernizr-------------------------
let subTitle3 = document.createElement('h3');
subTitle3.innerHTML = '★ Modernizr';
document.querySelector('body').appendChild(subTitle3);

let paragraph3 = document.createElement('p');
paragraph3.innerHTML = 'Get the latest minified versions of Modernizr: Modernizr feature detection library, complete with a custom build configuration';
document.querySelector('body').appendChild(paragraph3);

// text4 : performance-----------------------
let subTitle4 = document.createElement('h3');
subTitle4.innerHTML = '★ High performance';
document.querySelector('body').appendChild(subTitle4);

let paragraph4 = document.createElement('p');
paragraph4.innerHTML = 'Apache settings to help you deliver excellent site performance. We independently maintain server configs for multiple platforms.';
document.querySelector('body').appendChild(paragraph4);
