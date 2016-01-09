console.log("Bienvenue dans ce jeu de devinette !");
var solution = Math.floor(Math.random() * 100) + 1;


var compteur;
for (compteur=1; compteur <=6; compteur++)
{
var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > solution) {
    console.log(nombre + " est trop grand");
} else if (nombre < solution) {
    console.log(nombre + " est trop petit");
}
else if (nombre === solution) {
    console.log(nombre + " est correct");
}
console.log(compteur);
}
console.log("(La solution est " + solution + ")");
