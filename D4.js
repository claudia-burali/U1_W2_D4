/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1,l2) { console.log ("L'area del rettangolo è: ", l1*l2)}

area(4,3)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1,n2) { 
    if (n1!==n2) {console.log ("La somma dei due numeri è: ", n1+n2)}
    else {console.log ("CrazySum attiva! La somma è: ", (n1+n2)*3)}}

crazySum(5,5)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const n2 = 19
const crazyDif = function (n1,n2) { 
    if (n1<=n2) {console.log ("La differenza assoluta tra n1 e 19 è: ", (n1-n2)*(-1))}
    else {console.log ("CrazyDif attiva! La differenza assoluta è: ", (n1-n2)*3)}}

crazyDif(26,n2)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) { 
    if ( ! Number.isInteger(n)) {console.log ('Per favore, inserisci un numero intero!')}
    else if(n>=20 && n<=100 || n===400) {console.log ('sì!')}
    else {console.log ('no!')}}

boundary (49) 

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/*const epi = "EPICODE"
const epify = function (str) { 
    if (str=String) {  
        for (let i=0; i<epi.length; i++) { 
            if (str[i]===epi[i]) {console.log(str)}
            else {console.log(epi+str)}}}
    else {console.log("Per favore inserisci una stringa!")}  
}

const epify = function (str) { 
    if (str=String) {
          
        
    else {console.log("Per favore inserisci una stringa!")}}*/


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (k) { 
    if (k<=0) {console.log ("Per favore, inserisci un numero > 0!")}
    else if (k%3===0 || k%7===0) {console.log (k, " è multiplo di 3 o di 7.")}
    else {console.log (k, " non è multiplo di 3 nè di 7")}}

check3and7 (-6)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (stringa) {console.log(stringa.slice(1,-1))}

cutString ("fiorellini")

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
arrayOfNumbers = []
const giveMeRandom = function (m) {
    if ( ! Number.isInteger(m) || m<0) {console.log ("Per favore, inserisci un numero intero > 0!")}
    else { for (let i=0; i<m; i++) { 
        arrayOfNumbers.push(Math.floor(Math.random()*10))}}   
    {console.log(arrayOfNumbers)}}

giveMeRandom(6)

