
var num ='10';
console.log(num +' è una '+typeof(num));
num = +num;
console.log(num +' è un '+typeof(num));

var num2 =+'10';
console.log(num2 +' è un '+typeof(num2));

/*var anni = prompt('Quanti anni hai?');
anni = parseInt(anni)
anni = +anni;

console.log(anni +' è un '+typeof(anni));
*/
var totale = 100-20;
console.log(totale);





//decrement e increment operatori
var num=5;
var y = num++;  //ATTENZIONE: in un ciclo dove vogliamo solamente incrementare il valore possiamo usare questa semantica (post-incrementato)
console.log(y); //*ritorna 5
console.log(num);   //ritorna 6, perchè incrementato;

var y = ++num;  //ATTENZIONE: assegnazione con subito valore, meglio precedere ooperando con operatore ++ (pre-incrementata)
console.log(y); //*ritorna 7    
console.log(num);   //ritorna 7


//--
var y = num--;
console.log(y); //*ritorna 7    
console.log(num);   //ritorna 6

var y = --num;
console.log(y); //*ritorna 5   
console.log(num);   //ritorna 5
