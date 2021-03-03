/* Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova */

// 1. Creo l'array;
var lastName = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var end = 0;
/*
// 2. Chiedo all'utente di inserire il suo cognome;
var userLastName = prompt("Inserisci il tuo cognome");

// 3. Inserisco il cognome dell'utente nell'array;
lastName.push(userLastName);

// 4. Ordino l'array in ordine alfabetico;
lastName.sort();

// 5. Scrivo la posizione umana del punto in cui si trova l'utente;
for (var i = 0; i < lastName.length; i++) {
    console.log(lastName[i]);
}

var position = lastName.indexOf(userLastName);


console.log('La posizione del cognome ' + userLastName + ' nella lista si trova alla posizione numero ' + (lastName.indexOf(userLastName), (position + 1)) );
*/


while ( end = 0 ) {
    // 2. Chiedo all'utente di inserire il suo cognome;
    var userLastName = prompt("Inserisci il cognome da aggiungere alla lista, quando hai finito inserisci la parola fine.");

    // 3. Inserisco il cognome dell'utente nell'array;
    if (userLastName != 'fine') {
        lastName.push(userLastName);
    } else if (userLastName == 'fine') {
        end = 1;
    }
    // 4. Ordino l'array in ordine alfabetico;
    lastName.sort();

    // 5. Scrivo l'intera lista;
    for (var i = 0; i < lastName.length; i++) {
        console.log(lastName[i]);
    }

    // 6. Scrivo la posizione umana del punto in cui si trova l'utente;
    var position = lastName.indexOf(userLastName);

    console.log('La posizione del cognome ' + userLastName + ' nella lista si trova alla posizione numero ' + (lastName.indexOf(userLastName), (position + 1)) );
}