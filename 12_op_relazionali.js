//Operatori relazionali (ritornano sempre boolean true false)
var test = 3<5;
//console.log(test +' è di tipo '+typeof(test));  //*true è di tipo boolean

var test = 5<=5;
//console.log(test +' è di tipo '+typeof(test));

var test = 5>=7;
// console.log(test);
var test = 7>5;
//console.log(test);

var test = 5==5;
//console.log(test);

var x=5,  y=7;

var test = (x==y);  //== confronto di valori

//if(x=8)   //*darebbe sempre true 
if(8==x)
console.log('x è uguale a 8');






// !=, !==, ===

var num = 12;

var num2 ='12';

var test = num == num2; //* ci darà TRUE perchè js nel confronto fa implicitamente il Cast della stringa a numero
//console.log(test);

var test = num === num2;    //*uguale il valore e anche il tipo -> False (con === js non fa nessuna conversione)
//console.log(test);

//--------
var numero1= 1;

var vero = true;

var falso = false;

var test = numero1 == vero;
//console.log(test);
var test = numero1 === vero;
//console.log(test);
//

var test = falso == 0;
console.log(test);
var test = falso === 0;
console.log(test);






//Confronto tra stringhe

var nome ='Hidran';
//console.log(nome == 'hidran');    //*false, con il confronto i caratteri ASCII non combaciano
console.log(nome == 1);   //*false, la stringa venendo convertita non ritorna numero
//console.log('' == 0);     //*true, la stringa vuota convertita vale 0
//console.log('' === 0);    //*false, strettamente uguale non fa conversione

var numero;
/*console.log(numero);
console.log(numero == undefined);   //*true
console.log(numero === undefined);  //true
console.log(numero == null);    //true, undefined in js lo vede come null
*/
console.log(numero === null);   //false, type of di null è object, mentre numero è undefined