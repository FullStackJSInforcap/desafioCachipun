/* 1.- Pedir las veces que se desea jugar */
/* 2.- Pedir la jugada del usuario */
/* 3.- Pedir la jugada de la máquina */
/* 4.- Comparar jugadas */
/* 5.- Dar respuesta a la particda */
var cantVeces;
var eleccionJugador;
var eleccionMaquina;
var piedra = 0;
var papel = 1;
var tijera = 2;

cantVeces = prompt('Ingrese la cantidad de veces que desea jugar');
for (var i = 0; i < cantVeces; i = i + 1) {
    eleccionJugador = prompt('Elige entre piedra, papel o tijera');
    eleccionMaquina = Math.floor(Math.random() * 3);
    switch (eleccionJugador) {
        case 'piedra':
            if (eleccionMaquina == piedra) {
                console.log('Empate');
            } else if (eleccionMaquina == papel) {
                console.log('Lo sentimos, ha perdido');
            } else {
                console.log('Felicitaciones, ha ganado');
            }
            break;
        case 'papel':
            if (eleccionMaquina == piedra) {
                console.log('Felicitaciones, ha ganado');
            } else if (eleccionJugador == papel) {
                console.log('Empate');
            } else {
                console.log('Lo sentimos, ha perdido');
            }
            break;
        case 'tijera':
            if (eleccionMaquina == piedra) {
                console.log('Lo sentimos, ha perdido');
            } else if (eleccionMaquina == papel) {
                console.log('Felicitaciones, ha ganado');
            } else {
                console.log('Empate');
            }
            break;
    }
}

