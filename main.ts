/**
 * Enunciado1:
 * 
 * Este es el programa mas básico qué podemos tener  :)
 * 
 * - aca vemos un solo evento (que es atendido por una sola primitiva)
 * 
 * Desafío:
 * 
 * - modificar el evento del botón A para dar la primera pista
 * 
 * - programar dos eventos más para dar las siguientes pistas del deporte escondido
 */
// Ver el comentario "Enunciado1"
// 
// Este es el primer bloque que pacticaremos: es un Evento
input.onButtonPressed(Button.A, function () {
    basic.showString("pistaA")
})
