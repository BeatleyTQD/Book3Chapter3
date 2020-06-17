//funk and rap artists
const jumpStopRecords = []
//country and bluegrass artists
const chattenRecords = []
//pop artists
const polarRecords = []

const createCountryArtist = (name, age) => {
    const artist = {
        name: name,
        age: age
    }
    chattenRecords.push(artist)
}
const createPopArtist = (name, age) => {
    const artist = {
        name: name,
        age: age
    }
    polarRecords.push(artist)
}
const createFunkArtist = (name, age) => {
    const artist = {
        name: name,
        age: age
    }
    jumpStopRecords.push(artist)
}
const createBluegrassArtist = (name, age) => {
    const artist = {
        name: name,
        age: age
    }
    chattenRecords.push(artist)
}
const createRapArtist = (name, age) => {
    const artist = {
        name: name,
        age: age
    }
    jumpStopRecords.push(artist)
}

createCountryArtist("Bruce Atikins", 23)
createPopArtist("Jensen Brown", 20)
createFunkArtist("Dre Funkz", 25)
createRapArtist("Dusta Grimes", 21)
createBluegrassArtist("Bartholomew Danielson", 23)
createCountryArtist("Avilee Dallas", 19)
createPopArtist("Austin Kinkaid", 22)
createRapArtist("Loyonce Branis", 27)

console.log(chattenRecords, jumpStopRecords, polarRecords)