/*
    calcular o MDC entre dois números
*/


function mdc(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  
  return a;
}

console.log(mdc(48, 18)); 
console.log(mdc(100, 50));
console.log(mdc(7, 3));
console.log(mdc(24, 36));