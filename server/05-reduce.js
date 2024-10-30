const totals = [1,2,3,4];

let sum = 0;

const rta = totals.reduce((sum, item) => sum +  item, 0)

console.log(rta)