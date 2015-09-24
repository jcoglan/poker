export default class Suit {
  constructor(symbol, name) {
    this._symbol = symbol;
    this._name   = name;
  }

  inspect() {
    if (this === Suit.HEARTS || this === Suit.DIAMONDS) {
      return '\u001b[31m' + this._symbol + '\u001b[39m';
    } else {
      return this._symbol;
    }
  }
}

Suit.SPADES   = new Suit('\u2660', 'spades');
Suit.HEARTS   = new Suit('\u2665', 'hearts');
Suit.DIAMONDS = new Suit('\u2666', 'diamonds');
Suit.CLUBS    = new Suit('\u2663', 'clubs');

Suit.ALL = [Suit.SPADES, Suit.HEARTS, Suit.DIAMONDS, Suit.CLUBS];
