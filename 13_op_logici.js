//operatore &&
var result = 1 && 2;
// console.log(result); //*2    verifica primo op true, ritorna secondo valore
 if(result){
 //  console.log('risultato true');
 }
result = 1 && 0;
 if(result){
  // console.log('risultato true');
 } else {
  //  console.log('risultato non è true');  //ritorna questa pèerchè zero è false
 }
 //console.log(result);
var result = 0 && 2;
// console.log(result);    //ritorna subito 0 perchè è false
var result ='' && (2+2);    //ritorna subito primo valore perchè è false
 console.log(result);





//operatore OR
var result = 1 || 0;    
console.log(result);    //*se primo è true ritorna primo, 

var result = 0 || 4;    //*se primo non true ritorna secondo
console.log(result);






//operatore not (!)
//var valore = 2;

var result =  !34;
//console.log(result);

 result =  !(3>4);
//console.log(result);
 result =  !"test";
var valore = "";
result = !valore;
console.log(result);