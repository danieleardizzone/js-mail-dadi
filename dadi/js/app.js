// # Gioco dei dadi
// ## Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// ## Stabilire il vincitore, in base a chi fa il punteggio più alto.

// - Estrai due volte un numero da 1 a 6
//     - Definisci le variabili delle due estrazioni:
//         - lancioUtente
//         - lancioPc

const userRoll = Math.floor(Math.random() * (6 - 1) + 1);
console.log(userRoll);

const pcRoll = Math.floor(Math.random() * (6 - 1) + 1);
console.log(pcRoll);

// - Stabilisci un vincitore

//     - SE lancioUtente > lancioPc => vince l'utente
//     - ALTRIMENTI SE lancioUtente < lancioPc => vince il pc
//     - ALTRIMENTI => parità

// - Stampa il risultato

const messageDOMElement = document.getElementById('message');
