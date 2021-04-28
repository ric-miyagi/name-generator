const data = require("./data/database.json")

function generateRandomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength)
}

function getRandomArrayValue(array) {
    return array[generateRandomIndex(array.length)]
}

function generateFullName(data) {
    return `${getRandomArrayValue(data.firstNames)} ${getRandomArrayValue(data.lastNames)} of House ${getRandomArrayValue(data.houses)}`
}

console.log(generateFullName(data))
