/* Elements */
const cards = document.querySelectorAll('.card')

/* Variables */
const animals = ['cat', 'fish', 'lion', 'pig', 'duck', 'cow']
const cardsAnimals = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
}

/* Functions */
let placeCards = () => {
    let allCards = animals.concat(animals)
    console.log(allCards)
    Object.keys(cardsAnimals).forEach( (key) => {
        index = Math.floor(Math.random() * allCards.length)
        choice = allCards[index]
        allCards.splice(index, 1)
        console.log(index, choice, allCards)

        cardsAnimals[key] = choice
    });
    
}

placeCards()


cards.forEach( (card, index) => {
    card.addEventListener('click', () => {
        card.style.backgroundImage = `url(./../img.html/${cardsAnimals[index + 1]}.png`
    })
})

let hideCard = () => {

}