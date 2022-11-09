let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let arit = 0;
let highNumber = 0;
let lowNumber = 100;
let impares = 0;


for (let i of numbers) {
  sum += i
  if (i > highNumber) {
    highNumber = i;
  }

  if (i < lowNumber) {
    lowNumber = i;
  }

  if(i % 2 != 0) {
    impares += 1
  }

}

console.log(sum);

arit = sum / numbers.length
console.log(arit);

if (arit > 20) {
  console.log('valor maior que 20');
}
else {
  console.log('valor menor que 20');
}

console.log(highNumber);

console.log(impares);

console.log(lowNumber);
