/* Chiedi all’utente il cognome
Inseriscilo in un array con altri cognomi: 'Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’*/

var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

var i = 0;

while (i < 1) {
    var nuovoCognome = prompt('Inserisci il tuo cognome');
    i++

    cognomi.push(nuovoCognome);
}

console.log(cognomi)

// Stampa la lista ordinata alfabeticamente



// Scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova