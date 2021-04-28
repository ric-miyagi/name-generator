const data = require("./data/database.json")

function generateName(data) {
    const randomFirstName = data.firstNames[generateRandomIndex(data.firstNames.length)];
    return randomFirstName
}


function generateLast(data) {
    const randomLastName = data.lastNames[generateRandomIndex(data.lastNames.length)];
    return randomLastName
}


function generateHouse(data) {
    const randomHouse = data.houses[generateRandomIndex(data.houses.length)];
    return randomHouse
}

function generateRandomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength)
}

/*
console.log(generateName(data))
console.log(generateLast(data))
console.log(generateHouse(data))
*/

console.log(`${generateName(data)} ${generateLast(data)} of House ${generateHouse(data)}`)