const totals = [1,2,3,4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

const rta = totals.reduce((sum, element) => sum + element, 0)
console.log('rta', rta);

const arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((acc, curr) => [curr, ...acc], []));
//Output: [ 5, 4, 3, 2, 1 ]