const spanPlayer = document.querySelector(".spanName");
const cards = document.querySelector(".container-cards");

const cardsGame = [
    'Blastoise',
    'Bullbassaur',
    'Charizard',
    'Gengar',
    'Giglipuf',
    'Giratina',
    'Pikachu',
    'Snorlax',
]

window.onload = () => {
    const playerName = localStorage.getItem("playerName")
    spanPlayer.innerHTML = playerName;
}

let firstCard = "";
let secondCard = "";

function endGame() {

    const disabledCards = document.querySelectorAll(".disabledCard");
    if(disabledCards.length === 16){
        setTimeout(() => {
            alert("Game over!");
        }, 100);
     }
    
}

function checkCards() {
    const cardOne = firstCard.getAttribute("data-character");
    const cardtwo = secondCard.getAttribute("data-character");

    if(cardOne === cardtwo) {
        firstCard.firstChild.classList.add("disabledCard");
        secondCard.firstChild.classList.add("disabledCard");
        
        firstCard = "";
        secondCard = "";

        endGame();
        

    } else{
     setTimeout(() => {
        firstCard.classList.remove("rotateCard");
        secondCard.classList.remove("rotateCard");
        firstCard = "";
        secondCard = "";
     }, 570);

    }
}

function createCard(pokemon) {
    const div = document.createElement("div");
    const front = document.createElement("div");
    const back = document.createElement("div");

    front.style.backgroundImage = `url("../img/${pokemon}.png")`

    div.className = "card";
    front.className = "face front";
    back.className = "face back";

    div.appendChild(front);
    div.appendChild(back);
    cards.appendChild(div);
    div.setAttribute("data-character", pokemon);

    div.addEventListener("click", ({target}) => {
          if( target.parentNode.className.includes("rotateCard") ){
            return

        } if(firstCard === ""){
            target.parentNode.classList.add("rotateCard");
            firstCard = target.parentNode;
            
        } else if (secondCard === "") {
            target.parentNode.classList.add("rotateCard");
            secondCard = target.parentNode;

            checkCards();

        }
    })
   
}

function loadGame() {
    const duplicareArray = [...cardsGame, ...cardsGame].sort( () => Math.random() -0.5 )
    duplicareArray.forEach( (pokemon) => {
    createCard(pokemon);
        
        
    });
}
loadGame();