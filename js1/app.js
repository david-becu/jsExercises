// affiche dans une boite de dialogue
alert("Hello World");

// affiche dans une boite de dialogue
// avec utilisation de vriables
// et affichage dans la console du navigateur
// parseInt force la convertion d'un type vers un type entier
//typeof affiche le type de la variable
var age = 33;
alert(age);
var age2 = "33";
var b = 3;
var estVrai = true;
console.log("parseInt(age2) + b ",parseInt(age2) + b);
console.log("typeof age ",typeof age); 
console.log("typeof age2  ",typeof age2);
console.log("typeof b ",typeof b);
console.log("typeof estVrai ",typeof estVrai);

console.log("3 == 3 ",3 == 3);
console.log("3 != '3' ",3 != '3');
console.log("3 === '3'  ",3 === '3');
console.log("3 !== '3'  ",3 !== '3');
console.log("3 > 2",3 > 2);
console.log("parseInt(3 >= 2) ",parseInt(3 >= 2));
console.log("3 < 2  ",3 < 2);
console.log("3 <= 2 ",3 <= 2);

console.log("(age >= 18) && (age <= 30) ",(age >= 18) && (age <= 30));
console.log("(age >= 18) || (age <= 30) ",(age >= 18) || (age <= 30));
console.log("!(age >= 18) ",!(age >= 18));