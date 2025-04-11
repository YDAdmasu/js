const cardArray = [
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
]


const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen =[]
let cardChosenIds = []
const cardWon = []



function createBoard(){

    for( let i=0 ; i < cardArray.length ; i ++){
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        gridDisplay.append(card)
        card.addEventListener('click',flipCard)
    }
}
createBoard()




function checkMatch(){

    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]

    if(optionOneId==optionTwoId){
        cards[optionOneId].setAttribute( 'src' , 'images/blank.png' )
        cards[optionTwoId].setAttribute( 'src' , 'images/blank.png' )
        alert('samecard')
    }
    
    if( cardChosen[0] == cardChosen[1 ] ){
        alert('You find a match !')
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener( 'click' , flipCard)
        cards[optionTwoId].removeEventListener( 'click' , flipCard)
        cardWon.push(cardChosen)

    }else{
        cards[optionOneId].setAttribute( 'src' , 'images/blank.png' )
        cards[optionTwoId].setAttribute( 'src' , 'images/blank.png' )
        alert('sorry try again!')
    }
    resultDisplay.textContentL = cardWon.length
    cardChosen =[]
    cardChosenIds = []
    if(cardWon.length == cardArray.length/2){
        resultDisplay.textContent = 'congratulation !!'
    }
}
function flipCard(){

    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    
    if(cardChosen.length == 2){
        setTimeout( checkMatch, 500)
    }
}
