// Null y Undefined

// ejemplo de undefined.
let numero;

console.log(numero); // La variable esta definida pero su valor no
console.log(typeof numero)

// En el caso de null es más bien asignarlo

let numero2 = null;
console.log(numero2);
console.log(typeof numero2); // ahora esto nos dirá que es un objeto, ecma que es quien define el standard del lenguaje dice que null debe ser un objeto

// Comparando null y undefined - Comparar un valor null y un undefined puede ser de las cosas más complicadas
console.log (numero == numero2);

// El resultado es true, a pesar de que numero no tiene un valor, 
// eso usualmente nos lleva a ejecución de código no deseada o con comportamientos extraños ya que comparamos un valor que no existe, y nos retorna true

// Para esto se usa el comparador estricto
console.log(numero === numero2);

// De esta forma no comparamos un falso positivo y evitamos errores