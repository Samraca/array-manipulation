const orders = [
{
    customerName: "Nicolas",
    total: 60,
    delivered: true,
},
{
    customerName: "Zulema",
    total: 120,
    delivered: false,
},
{
    customerName: "Santiago",
    total: 180,
    delivered: true,
},
{
    customerName: "Valentina",
    total: 240,
    delivered: true,
},
];

const totales = orders.map(item => item.total);
console.log(totales);

//Cambia la referencia en memoria
const newItems = orders.map(item => {
    item.tax = .19;
    return item;
})
console.log(newItems);

//No cambia la referencia en memoria
const ultimateItems = orders.map(item => {
    return {
        ...item,
        tax: .19
    };
})
console.log(ultimateItems);