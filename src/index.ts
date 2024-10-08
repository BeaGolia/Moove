// enum stato del mezzo
const enum STATO_MEZZO {
  DISPONIBILE = 'disponibile',
  IN_USO = 'in uso'
}

// interfacce
interface IMezzo {
  tipo: string;
  id: string;
  stato: STATO_MEZZO;
  assegnaUtente(utente: IUtente): void;
}

interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;
  prenotaMezzo(mezzo: IMezzo): void;
}

interface ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];
  aggiungiMezzo(mezzo: IMezzo): void;
}

// Implementazione classe Mezzo
class Mezzo implements IMezzo {
  tipo: string;
  id: string;
  stato: STATO_MEZZO;

  constructor(tipo: string, id: string) {
      this.tipo = tipo;
      this.id = id;
      this.stato = STATO_MEZZO.DISPONIBILE;
  }

  assegnaUtente(utente: IUtente): void {
      if (this.stato === STATO_MEZZO.DISPONIBILE) {
          this.stato = STATO_MEZZO.IN_USO;
          console.log(`Mezzo ${this.tipo} (ID: ${this.id}) assegnato a ${utente.nome} ${utente.cognome}`);
      } else {
          console.log(`Mezzo ${this.tipo} (ID: ${this.id}) non disponibile`);
      }
  }
}

// Implementazione classe Utente
class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;

  constructor(nome: string, cognome: string, email: string, metodoPagamento: string) {
      this.nome = nome;
      this.cognome = cognome;
      this.email = email;
      this.metodoPagamento = metodoPagamento;
  }

  prenotaMezzo(mezzo: IMezzo): void {
      if (mezzo.stato === STATO_MEZZO.DISPONIBILE) {
          mezzo.assegnaUtente(this);
      } else {
          console.log(`Il mezzo ${mezzo.tipo} non è disponibile per la prenotazione`);
      }
  }
}

// Implementazione classe Citta
class Citta implements ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];

  constructor(nome: string) {
      this.nome = nome;
      this.mezziDisponibili = [];
  }

  aggiungiMezzo(mezzo: IMezzo): void {
      this.mezziDisponibili.push(mezzo);
      console.log(`Mezzo ${mezzo.tipo} (ID: ${mezzo.id}) aggiunto alla città ${this.nome}`);
  }
}

// oggetti Mezzo
const bici1 = new Mezzo('bici', 'B001');
const scooter1 = new Mezzo('scooter', 'S001');
const monopattino1 = new Mezzo('monopattino', 'M001');

// oggetti Utente
const utente1 = new Utente('Mario', 'Rossi', 'mario.rossi@example.com', 'Carta di Credito');
const utente2 = new Utente('Giulia', 'Verdi', 'giulia.verdi@example.com', 'PayPal');

//istanza classe Citta
const milano = new Citta('Milano');

// mezzi città
milano.aggiungiMezzo(bici1);
milano.aggiungiMezzo(scooter1);
milano.aggiungiMezzo(monopattino1);

// prenotazione
utente1.prenotaMezzo(bici1);  
utente2.prenotaMezzo(bici1);  
utente2.prenotaMezzo(scooter1); 
