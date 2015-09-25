import Hand from './hand';

export class Pattern {
  constructor(...cards) {
    this._places = cards.map(([rank, suit]) => new Place(rank, suit));
  }

  fill(index) {
    for (let place of this._places) place.fill(index);
    return new Hand(this._places.map(place => place.getCard()));
  }
}

export function val(type) {
  return new Variable(type);
}

export const ANY = {}

class Place {
  constructor(rank, suit) {
    this._rank = rank;
    this._suit = suit;
  }

  fill(index) {
    if (this._card) return;

    if (this._rank.fill) this._rank.fill(index);
    if (this._suit.fill) this._suit.fill(index);
  }

  getCard() {
    if (this._card) return this._card;

    if (this._rank.fill)
      this._card = this._rank.source.shift() || new Partial(this._rank.value, null);

    if (this._suit.fill)
      this._card = this._suit.source.shift() || new Partial(null, this._suit.value);

    return this._card;
  }
}

class Partial {
  constructor(rank, suit) {
    this._rank = rank;
    this._suit = suit;
  }

  inspect() {
    return '\u001b[37m(' + (this._rank || this._suit)._symbol + ')\u001b[39m';
  }
}

class Variable {
  constructor(type) {
    this.type = type;
  }

  fill(index) {
    if (this.source) return;
    let value, cards;

    if (this.type === 'rank')
      [value, cards] = index.mostCommonRank();

    if (this.type === 'suit')
      [value, cards] = index.mostCommonSuit();

    this.value  = value;
    this.source = cards;
  }
}
