/*
    Dado um array numérico qualquer sem valores repetidos,
    descubra qual é o índice do maior valor e o índice do menor valor.
*/

function encontrarIndices(array) {
  if (array.length === 0) {
    return { indiceMaior: -1, indiceMenor: -1 };
  }
  
  let indiceMaior = 0;
  let indiceMenor = 0;
  
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMaior]) {
      indiceMaior = i;
    }
    if (array[i] < array[indiceMenor]) {
      indiceMenor = i;
    }
  }
  
  return { indiceMaior, indiceMenor };
}


const numeros1 = [5, 2, 9, 1, 7];
console.log("Array:", numeros1);
console.log("Resultado:", encontrarIndices(numeros1));


const numeros2 = [15, 3, 42, 8, 23, 1];
console.log("\nArray:", numeros2);
console.log("Resultado:", encontrarIndices(numeros2));


const numeros3 = [100, 50, 75, 25];
console.log("\nArray:", numeros3);
console.log("Resultado:", encontrarIndices(numeros3));


const numeros4 = [-5, -20, 10, 0, 3];
console.log("\nArray:", numeros4);
console.log("Resultado:", encontrarIndices(numeros4));

