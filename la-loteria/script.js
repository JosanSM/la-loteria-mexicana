// let deck = document.getElementById("deck");

// card that is being displayed
let card = document.getElementById("deck-img");

// we will iterate through this array to determine what card
// will be displayed. Card will be determined by the index in
// the array and the name (string) will be displayed in
// screen.
const cards = [
    {name:"El Gallo", num: 1}, {name:"El Diablo", num: 2}, {name:"La Dama", num: 3}, {name:"El Catrin", num: 4}, {name:"El Paraguas", num: 5}, {name:"La Sirena", num: 6}, {name:"La Escalera", num: 7}, {name:"La Botella", num: 8},
    {name:"El Barril", num: 9}, {name:"El Arbol", num: 10},{name:"El Melon", num: 11}, {name:"El Valiente", num: 12}, {name:"El Gorrito", num: 13}, {name:"La Calavera", num: 14}, {name:"La Pera", num: 15}, {name:"La Bandera", num: 16}, 
    {name:"El Bandolon", num: 17}, {name:"El Violoncello", num: 18}, {name:"La Garza", num: 19},{name:"El Pajaro", num: 20}, {name:"La Mano", num: 21}, {name:"La Bota", num: 22}, {name:"La Luna", num: 23}, {name:"El Cotorro", num: 24}, {name:"El Borracho", num: 25}, {name:"El Negrito", num: 26},{name:"El Corazon", num: 27}, {name:"La Sandia", num: 28}, {name:"El Tambor", num: 29},
    {name:"El Camaron", num: 30}, {name:"Las Jaras", num: 31}, {name:"El Musico", num: 32}, {name:"La Arana", num: 33}, {name:"El Soldado", num: 34}, {name:"La Estrella", num: 35}, {name:"El Cazo", num: 36},{name:"El Mundo", num: 37}, {name:"El Apache", num: 38}, {name:"El Nopal", num: 39},
    {name:"El Alacran", num: 40}, {name:"La Rosa", num: 41}, {name:"La Calavera", num: 42}, {name:"La Campana", num: 43}, {name:"El Cantarito", num: 44}, {name:"El Venado", num: 45}, {name:"El Sol", num: 46}, {name:"La Corona", num: 47}, {name:"La Chalupa", num: 48}, {name:"El Pino", num: 49},
    {name:"El Pescado", num: 50}, {name:"La Palma", num: 51}, {name:"La Maceta", num: 52}, {name:"El Arpa", num: 53}, {name:"La Rana" , num: 54}
];


// shuffles the order of the cards in the cards array.
function shuffleCards(array) {

    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
};


// displays a card in html's #deck, using string interpolation to determine the path to the img.
// it will a helper function.
function displayCards(array) {
    // displays the card's image
    const pathToCard = `./cards/${array[0].num}.png`;

    card.src = pathToCard;

    // displays the card's name
    const cardName = document.getElementById("card-name");
    cardName.innerHTML = array[0].name;

};


// changes card when user clicks next or previous buttons.
function switchCards() {

    const cardsLeft = document.getElementById("cards-left");
    let numCardsLeft = 53;
    cardsLeft.innerHTML = `Quedan ${numCardsLeft} cartas!`;

    let shuffledArray = shuffleCards(cards);
    displayCards(shuffledArray);

    const previous = document.getElementById("previous-button");
    const next = document.getElementById("next-button");
    const shuffle = document.getElementById("shuffle");

    // stores the cards that the user already viewed.
    let passedCards = [];


    shuffle.addEventListener("click", () => {
        // pushes every element in passed cards back to the
        // deck
        passedCards.forEach(card => {
            cards.push(card);
        });
        passedCards = [];

        shuffledArray = shuffleCards(cards);
        displayCards(shuffledArray);

        numCardsLeft = 53;
        cardsLeft.innerHTML = `Quedan ${numCardsLeft} cartas!`;
    })


    next.addEventListener("click", () => {
        if(shuffledArray.length > 1) {
            passedCards.push(shuffledArray[0]);
            shuffledArray.shift();
            displayCards(shuffledArray)
            // displays num of card left in the deck:
            numCardsLeft--;
            cardsLeft.innerHTML = `Quedan ${numCardsLeft} cartas!`;
        }
    });

    previous.addEventListener("click", () => {
        if(!passedCards.length > 0) {
            return;
        } else {
            shuffledArray.unshift(passedCards[passedCards.length-1]);
            passedCards.pop();
            displayCards(shuffledArray)
            // displays num of card left in the deck:
            numCardsLeft++
            cardsLeft.innerHTML = `Quedan ${numCardsLeft} cartas!`;
        };

    });

};

switchCards();

// const shuffledArray = shuffleCards(cards);
// console.log(shuffledArray)
// displayCards(shuffledArray);

// console.log(shuffleCards(cards));