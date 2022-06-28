const producto = "Tablet";

// El valor de la variable const no puede ser reasignado:
producto = "Monitor";

const producto = 'Monitor 30 Pulgadas';
console.log(producto);
producto = 'Monitor 23 Pulgadas';


// Por otro lado, las variables con const, deben iniciarse con un valor:
const precio;
precio = 20;
console.log(precio);
 /*
Existen otras diferencias entre const y let especialmente cuando 
se trabajan con arreglos y objetos, que te mostraré mas adelante, 
pero recuerda, las variables con const, no se pueden re-asignar
y tampoco pueden iniciar sin un valor.
*/