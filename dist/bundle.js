/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\n// Implementazione della classe Mezzo\nvar Mezzo = /** @class */ (function () {\n    function Mezzo(tipo, id) {\n        this.tipo = tipo;\n        this.id = id;\n        this.stato = 'disponibile';\n    }\n    Mezzo.prototype.assegnaUtente = function (utente) {\n        if (this.stato === 'disponibile') {\n            this.stato = 'in uso';\n            console.log(\"Mezzo \".concat(this.tipo, \" (ID: \").concat(this.id, \") assegnato a \").concat(utente.nome, \" \").concat(utente.cognome));\n        }\n        else {\n            console.log(\"Mezzo \".concat(this.tipo, \" (ID: \").concat(this.id, \") non disponibile\"));\n        }\n    };\n    return Mezzo;\n}());\n// Implementazione della classe Utente\nvar Utente = /** @class */ (function () {\n    function Utente(nome, cognome, email, metodoPagamento) {\n        this.nome = nome;\n        this.cognome = cognome;\n        this.email = email;\n        this.metodoPagamento = metodoPagamento;\n    }\n    Utente.prototype.prenotaMezzo = function (mezzo) {\n        if (mezzo.stato === 'disponibile') {\n            mezzo.assegnaUtente(this);\n        }\n        else {\n            console.log(\"Il mezzo \".concat(mezzo.tipo, \" non \\u00E8 disponibile per la prenotazione\"));\n        }\n    };\n    return Utente;\n}());\n// Implementazione della classe Citta\nvar Citta = /** @class */ (function () {\n    function Citta(nome) {\n        this.nome = nome;\n        this.mezziDisponibili = [];\n    }\n    Citta.prototype.aggiungiMezzo = function (mezzo) {\n        this.mezziDisponibili.push(mezzo);\n        console.log(\"Mezzo \".concat(mezzo.tipo, \" (ID: \").concat(mezzo.id, \") aggiunto alla citt\\u00E0 \").concat(this.nome));\n    };\n    return Citta;\n}());\n// Creazione di alcuni oggetti Mezzo\nvar bici1 = new Mezzo('bici', 'B001');\nvar scooter1 = new Mezzo('scooter', 'S001');\nvar monopattino1 = new Mezzo('monopattino', 'M001');\n// Creazione di alcuni oggetti Utente\nvar utente1 = new Utente('Mario', 'Rossi', 'mario.rossi@example.com', 'Carta di Credito');\nvar utente2 = new Utente('Giulia', 'Verdi', 'giulia.verdi@example.com', 'PayPal');\n// Creazione di un'istanza della classe Citta\nvar milano = new Citta('Milano');\n// Aggiunta dei mezzi alla città\nmilano.aggiungiMezzo(bici1);\nmilano.aggiungiMezzo(scooter1);\nmilano.aggiungiMezzo(monopattino1);\n// Test della logica di prenotazione\nutente1.prenotaMezzo(bici1); // Mario prenota una bici\nutente2.prenotaMezzo(bici1); // Giulia tenta di prenotare la stessa bici già in uso\nutente2.prenotaMezzo(scooter1); // Giulia prenota uno scooter\n\n\n//# sourceURL=webpack://ts/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;