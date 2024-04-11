const computerCard = document.querySelector('#computerCard')
const playerCards = document.querySelectorAll('.playerCard')

let drawCard = () => {
    let possibility = ['paper', 'scissors', 'rock']
    index = Math.floor(Math.random() * possibility.length)

    cardChose = possibility[index]

    return cardChose
}

let showComputerCard = () => {
    computerCard.classList.remove('questionMark')
    computerCard.classList.add(drawCard())
}

computerCard.addEventListener('click', showComputerCard)

playerCards.forEach( (card, index) => {
    card.addEventListener('click', () => {
        console.log(card)
    })
})