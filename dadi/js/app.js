// # Gioco dei dadi
// ## Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// ## Stabilire il vincitore, in base a chi fa il punteggio più alto.

// - Estrai due volte un numero da 1 a 6
//     - Definisci le variabili delle due estrazioni:
//         - lancioUtente
//         - lancioPc

const userRoll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
// console.log(userRoll);

const userRollDOMElement = document.getElementById('user-roll');
userRollDOMElement.innerHTML = "Lancio dell'utente: " + userRoll;

const pcRoll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
// console.log(pcRoll);

const pcRollDOMElement = document.getElementById('pc-roll');
pcRollDOMElement.innerHTML = "Lancio del pc: " + pcRoll;



// - Stabilisci un vincitore

//     - SE lancioUtente > lancioPc => vince l'utente
//     - ALTRIMENTI SE lancioUtente < lancioPc => vince il pc
//     - ALTRIMENTI => parità

// - Stampa il risultato

const innerMessageDOMElement = document.getElementById('inner-message');

if (userRoll > pcRoll) {
    innerMessageDOMElement.innerHTML = "Vince l'utente";
} else if (userRoll < pcRoll) {
    innerMessageDOMElement.innerHTML = "Vince il pc";
} else {
    innerMessageDOMElement.innerHTML = "Parità";
}