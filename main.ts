/**
 * Enunciado1+:
 * 
 * Este es el programa mas básico que podemos tener  :)
 * 
 * - aca vemos un solo evento (que es atendido por una sola primitiva)
 * 
 * Desafío:
 * 
 * - modificar el evento del botón A para dar la primera pista
 * 
 * - programar dos eventos más para dar las siguientes pistas del deporte escondido
 * 
 * Desafío++:
 * 
 * - que el evento del botón A sea un icono
 * 
 * - que el evento del botón B además de la pista, toque un sonido
 */
// Ver el comentario "Enunciado1"
// 
// Este es el primer bloque que pacticaremos: es un Evento
input.onButtonPressed(Button.A, function () {
    basic.showString("pistaA")
})
