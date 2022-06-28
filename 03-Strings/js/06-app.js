// Repeat Te va a permitir repetir una cadena de texto:

const producto = 'Monitor 24 pulgadas ';
const texto = 'en Promoción '.repeat(3)
console.log(producto.repeat(3));
console.log(producto.repeat(2.2)); // va a redondear a entero
console.log(`${producto} ${texto} !!!`);
 


// Split
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" "));

/*
Divide la cadena de texto por el valor que le pases 
en este caso la coma y un espacio", "
*/
const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", "));
