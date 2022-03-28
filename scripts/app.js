// Código principal de la aplicación

// Obtener las películas de
// https://github.com/hjorturlarsen/IMDB-top-100/blob/master/data/movies.json

// Tenemos que crear un evento para saber que teclas pulsa el usuario, a su vez tenemos que comprobar si esa letra que pulso se encuentra en la pelicula a descubrir.

// Tenemos que obtener las peliculas de una base de datos json. Mediante un fetch de la url. Escojer una pelicula al azar. Es un array de objetos. Calcular una posicion al alazar del array

// El numbre de la pelicula tiene que estar oculto pero se tiene que ver cuantas palabras contiene y el numero de carcteres. Generar __ para cada caracter. 

// Si la letra que ha pulsado esta en la array de letras probadas No debe computar como error. 

// Si la letra pulsada NO esta en la array ni tampoco en la pelicula debe contar como error, SI la letra pulsada esta en la pelicula debemos cambiar el * del lugar donde va la letra y actualizar el DOM

// El usuario tiene puede tener 5 errores si los comente y no descubre la palabra pierde el juego, no puede seguir pulsando teclas y se escucha un audio de derrota. Si acierta, no puede seguir escribiendo, se escucha un audio de victoria y aparace una imagen de la pelicula.

// Tenemos que tener un boton de reset para reiniciar y poner una nueva pelicula para adivinar. 

// Estado de la aplicacion : Pelicula a adivinar; Array con las letras pulsadas; Numero de intentos.

// Estado de la APP.

// - De todo de lo que tenemos que hacer, cual sería la funcionalidad mínima para dar una 
// respuesta similar a nuestros requisitos?
// NO ENTRA en primera iteración
// 1. La película a adivinar la ponemos nosotros estáticamente
// 2. no hay número de intentos

// ENTRA en primera iteración
// 1. Poner tantos asteríscos como letras a adivinar (<span>)
// 2. Escuchar evento de teclado
//   2.1 Para cada tecla pulsada, ver si existe en la película a adivinar. Usar el método
//    indexOf/includes. peliAdivinar.forEach((letra, index)=>) y para cada letra que sea igual 
//     a la letra que ha pulsado el usuario, substituir la guessedWord[index] = letra 
//    2.2. Actualizar el DOM (parte de la película adivinada hasta el momento.
STATE.reset("matrix reloaded");



// Recorremos el string. nextLetter vale a cada iteración una letra del string
// tenemos que crear tantos <span>*</span> como letras hay en el string.
// Cuando encontramos un espacio en realidad hay que crear un <span></span>
// Todos los span hay que hacer un appendChild en id="puzzle".
DOM.updateGuessedWord(STATE.movieGuess);






//   1. Capturar el evento keyup
//   2. Ver si la tecla capturada está en la palabra a adivinar (movie). event.key -> nos dice la tecla que ha pulsado el usuario
//  * 3. Si está-->
//  *    3.1 Recorrer el string original con movie.forEach((nextLetter, index) => {})
//  *    3.2. Cada vez que encuentro una posición del string que es igual a la letra adivinada, habría algo así como...
//  *    movieGuess = movieGuess.slice(0, index) + nextLetter + movie.movieGuess(index+1);
//  *   3.2 Actualizar el DOM con movieGuess. Lo más sencillo es 'limpiar' todo el HTML de id="puzzle"; y volver a generar todos los <span>. Alternativamente, podríamos actualizar el <span> que coincida con la posición del string donde iría la letra acertada.
//  * 
document.body.addEventListener("keyup", function(e){
    let keyPressed = e.key;

    if (!/^[a-z]$/i.test(keyPressed)) {
        // esto no es una letra de la a la z
        return;
    }
    for (let i=0;i<STATE.movie.length;i++) {

        if (STATE.movie[i] == keyPressed)
        STATE.movieGuess = STATE.movieGuess.slice(0, i) + keyPressed + STATE.movieGuess.slice(i+1);    
    }
     
    DOM.updateGuessedWord(STATE.movieGuess)
    
});

