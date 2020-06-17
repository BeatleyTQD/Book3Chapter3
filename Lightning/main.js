//lightning exercise one
const createDoctor = (name, speciality, address) => {
    return {
        name: name,
        speciality: speciality,
        address: address
    }
}

const newDoc = createDoctor("Brandon", "hearing", "1234 Winding Spring Circle")

console.log("this is lightning exercise one", newDoc)

//lightning exercise two
const BowWowKennels = []

const createPet = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}

const newPet1 = createPet("Biscuit", "Chihuahua")
const newPet2 = createPet("Bolvar", "Greyhound")
const newPet3 = createPet("Tiffin", "Greyhound")

BowWowKennels.push(newPet1,newPet2,newPet3)

console.log(BowWowKennels)