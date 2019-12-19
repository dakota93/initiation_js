// alert('js variable okay');

/*
lorsque l'on a besoin de stocker une information on utilise une variabl. Une variable peut etre interprete comme une boite dans laquelle nous allons stocker une information.

Il existe plusieurs type de variable:

*/

// pour déclarer une variable ( la créer) :

var prenom;

// pour lui affecter une valeur:
var prenom= 'Dakota';

// Afficher la valeur d'une variable :
//a- pour tester une valeur on ouvre la console du navigateur (F12) puis on écrit le nom de la variable a droite des ">>" puis ENTER

//b- afficher une alerte avec la variable (ne pas mettre de guillemet)
// alert (prenom);

//c- on écrit dans le script (code) 
console.log(prenom);

//il est possible d'écrire plusieurs  variables sur une seule ligne:
var nb1, nb2, nb3;
//& d'y affecter des valeurs : 
nb1= 1;
nb2= 50;
nb3= 220;

// une instruction ce termine TOUJOURS par un point virgule.

// le nom d'une variable peut comporter des lettres et des chiffres mais exclus les signes de ponctuation (espace, accent....)


// /!\ le js est sensible a la casse /!\

/*
maVariable différend de ma maVariable ou ma_variable

*/

/*
// ecriture snake case: ma_variable
// ecriture camel case : maVariable

*/

/*********** 
type de variables
*************/

//-- typeof, me permet de connaitre le type de ma variable:
console.log(typeof prenom);

//--Déclaration et affectation d'un nombre:
var age= 40;
console.log(typeof age);

//-- les variables de type float
var unedecimal= -2.994;
console.log(typeof unedecimal);// la console retourne "number" donc un / ou des chiffres 

//-- les variables de type booléens (boolean) 
// le booléen permet de vérifier si l'information est vrai (true) ou false (faux)
var unboolean= false; // true
console.log(unboolean);// retourne false
console.log(typeof unboolean);// reourne boolean

//-- les constantes

// ma déclaration CONST permet de creer une constante accessible Uniquement en le lecture. sa valeur ne pourra pas etre modifier par des reaffectation ulterieurs. uns constante ne peux pas etre déclarer a nouveau.

const HOST="localhost";
const USER= "toot";              // les constantes toujours en majuscule//
const PASSEWORD="mysql";

/*
donc il est impossible de faire cela :

const user= "dakota"
la console me retournera => syntaxeError: redeclaration of count user
*/

var unnombre= "24";
console.log(unnombre);// affiche 24
console.log(typeof unnombre);// retourne string (chaine de caractere)
// pour convertir le string (chaine de caractere) "24" en number: 

unnombre= parseFloat(unnombre);//parsefloat permet d'interpreter le string 24 en chiffre 24

console.log (unnombre);// affiche 24
console.log (typeof unnombre);// retourne number


// pour convertir un chiffer en string
var nb4= 93;
console.log (nb4);// affiche 93
console.log (typeof nb4);// la console interprete le nb4 comme un chiffre

nb4= nb4.toString();// toString() permet de convertir un nombre entier ou décimal en chaine de caractere(string)
console.log (typeof nb4);




