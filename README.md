# Moove - Sistema di Micromobilità Condivisa

## Descrizione
Moove è un servizio innovativo di micromobilità condivisa sviluppato in TypeScript. 

Il progetto si focalizza sulle interazioni tra utenti, mezzi di trasporto e città servite dal servizio. 

Questa piattaforma gestisce i mezzi di trasporto e consente agli utenti di prenotare e utilizzare i mezzi in modo efficiente.

## Requisiti
- Node.js (versione 12 o superiore)
- npm (versione 6 o superiore)

## Installazione
- Clona il repository:

```git clone https://github.com/tuo-username/Moove.git```

```cd Moove``` 

- Installa le dipendenze:

```npm install```

- Compila il progetto:

TypeScript richiede la compilazione in JavaScript. Puoi fare ciò utilizzando il seguente comando:

```npm run build```

Questo comando compila il codice TypeScript nella directory ```dist```.

## Configurazione
Il progetto non richiede configurazioni particolari per l'utilizzo di base. Tuttavia, se desideri personalizzare il progetto o aggiungere nuove funzionalità, puoi modificare i file TypeScript nella cartella ```src```.

## Utilizzo
Puoi eseguire il seguente script:

### Esegui il progetto:

 Dopo aver compilato il progetto, puoi eseguire lo script di esempio con il comando:

```npm start```

Questo comando eseguirà lo script di esempio situato nella cartella ```dist```, dove i mezzi vengono creati, gli utenti prenotano i mezzi, e i mezzi vengono assegnati alle città.

### Espansione del Progetto:

Se desideri espandere il progetto, puoi aggiungere nuovi file TypeScript nella cartella ```src``` e aggiornare le interfacce e le classi esistenti. 

Ricompila quindi il progetto dopo ogni modifica con ```npm run build```.

Esempio di utilizzo:

Dopo aver eseguito il comando ```npm start```, vedrai output simile al seguente:

```Mezzo bici (ID: B001) aggiunto alla città Milano```

```Mezzo scooter (ID: S001) aggiunto alla città Milano```

```Mezzo monopattino (ID: M001) aggiunto alla città Milano```

```Mezzo bici (ID: B001) assegnato a Mario Rossi```

```Il mezzo bici non è disponibile per la prenotazione```

```Mezzo scooter (ID: S001) assegnato a Giulia Verdi```

## Struttura del Progetto
- src/: Contiene il codice sorgente TypeScript.
- index.ts: Punto di ingresso principale del progetto, dove vengono eseguiti gli esempi.
- dist/: Contiene il codice JavaScript compilato pronto per l'esecuzione.
- package.json: Contiene le dipendenze del progetto e gli script npm.

## Contributi
I contributi sono bene accetti! Sentiti libero di fare una fork del progetto e inviare una pull request con le tue modifiche.
