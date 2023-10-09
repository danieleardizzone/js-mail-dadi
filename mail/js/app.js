// # Mail
// ## Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// - Crea un array con le email che possono accedere

let arrayEmails = ['ciao11@gg.com', 'ciao22@gg.com', 'ciao33@gg.com', 'ciao44@gg.com', 'ciao55@gg.com'];

let currentEmail;

// stampo le mail in console
console.log('Lista segreta di email per accedere');

for (i = 0; i < arrayEmails.length; i++){
    currentEmail = arrayEmails[i];
 	console.log(i, currentEmail);
}

// - Chiedi la mail all'utente

let userEmail = prompt('Scrivi la tua email per accedere');
// console.log(userEmail);

// - Verifica che la mail sia presente nel mio array

for (i = 0; i < arrayEmails.length; i++){

    currentEmail = arrayEmails[i];
	// console.log(i, currentEmail);

    if (userEmail === currentEmail) {
        userEmail = 'presente';
        // console.log(userEmail);
    }
}

//     - SE la mail è presente
//         - accesso confermato
//     - ALTRIMENTI
//         - accesso negato
// - Stampa esito

const messageDOMElement = document.getElementById('message');

if(userEmail === 'presente'){
    // console.log('mail presente');
    messageDOMElement.innerHTML = 'Email presente, benvenuto';
} else {
    // console.log('mail non presente');
    messageDOMElement.innerHTML = 'Email non presente, riprova';
}


