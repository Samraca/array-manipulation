const numbers = [1, 30, 49, 29, 10 ,13];

const rta = numbers.every(num => num<40);

console.log(rta)

const team = [
    {
    name: "Nicolas",
    age: 12,
    },
    {
    name: "Andrea",
    age: 8,
    },
    {
    name: "Zulema",
    age: 2,
    },
    {
    name: "Santiago",
    age: 18,
    },
];

console.log(team.map(member => member.age).every(age => age<15));