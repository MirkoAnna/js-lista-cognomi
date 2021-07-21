// Chiedi all’utente il cognome
var nuovoCognome = prompt('Inserisci il tuo cognome');

// Inseriscilo in un array con altri cognomi: 'Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var cognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
console.log(cognomi);

var CognomeMaiuscolo = nuovoCognome.charAt(0).toUpperCase() + nuovoCognome.slice(1);

cognomi.push(CognomeMaiuscolo);

// Stampa la lista ordinata alfabeticamente
cognomi.sort();
console.log(cognomi)
// Scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
console.log(cognomi.indexOf(CognomeMaiuscolo) + 1);
