
const suits = ["heart", "spade", "club", "diamond"];

const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jota", "Reina", "Rey", "As"];

const cardElement = document.getElementById("card");

function generateRandomCard() {
  const suitIndex = Math.floor(Math.random() * suits.length);
  const valueIndex = Math.floor(Math.random() * values.length);

  const suit = suits[suitIndex];
  const value = values[valueIndex];

  cardElement.className = `card ${suit}`;

  cardElement.textContent = `${value} ${getSuitSymbol(suit)}`;
}

function getSuitSymbol(suit) {
  switch (suit) {
    case "heart":
      return "♥";
    case "spade":
      return "♠";
    case "club":
      return "♣";
    case "diamond":
      return "♦";
    default:
      return "";
  }
}

generateRandomCard();

cardElement.addEventListener("click", generateRandomCard);
