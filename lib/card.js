import Rank from './rank';
import Suit from './suit';

export default class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  inspect() {
    let display = this.rank.inspect() + this.suit.inspect();
    if (this.suit === Suit.HEARTS || this.suit === Suit.DIAMONDS) {
      return '\u001b[31m' + display + '\u001b[39m';
    } else {
      return display;
    }
  }

  static shuffledDeck() {
    let deck  = [],
        cards = this.ALL.slice();

    while (cards.length > 0) {
      let index = Math.floor(Math.random() * cards.length);
      deck.push(cards.splice(index, 1)[0]);
    }
    return deck;
  }
}

Card.ALL = [];

for (let suit of Suit.ALL) { for (let rank of Rank.ALL) {
  Card.ALL.push(new Card(rank, suit));
}}
