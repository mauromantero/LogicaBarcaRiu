let nom = [];

nom.push('Jaime');

// Insereic un element a la darrera posició de l'array

nom.push('Rein');

console.log(nom);

console.log(nom[0]);
// anar a X posició

nom.push('Javitopro69');

console.log('Hi ha ' + nom.length + ' Elements');

nom.pop();
// Quitar el ultimo de la lista
console.log(nom);

nom.shift()
console.log(nom)
// Quitar primer elemento de la lista// ;

nom.unshift('Rin');
console.log(nom);

nom.push('Rigoberto');
nom.pop()
nom.shift()
nom.unshift('Herrero');
nom.push('Javitopro69');
nom.push('Jaime');
nom.push('Un burro x tu casa')

console.log(nom);

for (let i= 0; i<nom.length; i++) {
    console.log(i, nom[i]);
}

console.log('Existe Jaume?',nom.includes('Jaume'));
console.log('Existe Rein?',nom.includes('Rein'));

console.log('Posicion de Jaume', nom.indexOf('Jaume'));
console.log('Posicion de Rein', nom.indexOf('Rein'));


let colores = ['red', 'green', 'blue', 'hielow', 'pink', 'purple'];

colores.push('Black')

hey = colores.splice(colores.indexOf('pink'), 1);

console.log(colores);
console.log(hey);
