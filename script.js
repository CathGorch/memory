const cards = document.querySelectorAll('.card');
//console.log(cards)

let isFlippedCard = false;
let firstCard, secondCard;

let lockBoard = false;

function flipCard() {

    //event.target.parentElement.classList.toggle('flip'); 

    let item = event.target.parentElement

    if (lockBoard) return lockBoard;

    if (event.target.parentElement === firstCard) return firstCard;

    item.classList.add('flip');

    if (!isFlippedCard) {

        isFlippedCard = true;

        firstCard = event.target.parentElement;

        return;

    }

    secondCard = event.target.parentElement;

    firstCard.dataset.education === secondCard.dataset.education ? disableCards() : unflipCards();
};

cards.forEach(card => card.addEventListener('click', flipCard));

function resetBoard() {

    isFlippedCard = false;

    [firstCard, secondCard] = [null, null];

    lockBoard = false;

}

function disableCards() {

    firstCard.removeEventListener('click', flipCard);

    secondCard.removeEventListener('click', flipCard);

    resetBoard();

}

function unflipCards() {

    lockBoard = true;

    setTimeout(() => {

        firstCard.classList.remove('flip');

        secondCard.classList.remove('flip');

        resetBoard();

    }, 1000);

}

[...cards].forEach(card => { 

let randomPos = Math.floor(Math.random() * 12); 

card.style.order = randomPos; 

}); 