const computerCard = document.querySelector('#computerCard')
const playerCards = document.querySelectorAll('.playerCard')
const response = document.querySelector('#response')

let drawCard = () => {
    let possibility = ['paper', 'scissors', 'rock']
    index = Math.floor(Math.random() * possibility.length)

    cardChose = possibility[index]

    return cardChose
}

let showComputerCard = (card) => {
    
    computerCard.classList.remove('questionMark')
    computerCard.classList.add(card)
}

computerCard.addEventListener('click', showComputerCard)

playerCards.forEach( (card) => {
    card.addEventListener('click', () => {
        playerChoice = card.id
        computerChoice = drawCard()
        showComputerCard(computerChoice)

        let res = checkVictory(playerChoice, computerChoice)
        response.innerHTML = res
    })
})

let checkVictory = (player, computer) => {
    console.log(player, computer)
    if (player === 'paper') {
        if (computer === 'rock') return 'vittoria'
        else if (computer === 'scissors') return 'sconfitta'
    } else if (player === 'scissors') {
        if (computer === 'paper') return 'vittoria'
        else if (computer === 'rock') return 'sconfitta'
    } else if (player === 'rock') {
        if (computer === 'scissors') return 'vittoria'
        else if (computer === 'paper') return 'sconfitta'
    }
    return 'pareggio'
}