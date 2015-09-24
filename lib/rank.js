export default class Rank {
  constructor(symbol, value) {
    this._symbol = symbol;
    this._value  = this._hival = value;
  }

  compare(rank) {
    return this._hival - rank._hival;
  }

  pred() {
    let index = this._value - 1;
    if (index < 0) index += Rank.ALL.length;
    return Rank.ALL[index];
  }

  succ() {
    return Rank.ALL[this._value % Rank.ALL.length];
  }

  inspect() {
    return this._symbol;
  }
}

const symbols = 'A 2 3 4 5 6 7 8 9 10 J Q K'.split(' ');
Rank.ALL = [];

for (let i = 0; i < symbols.length; i++) {
  let rank = new Rank(symbols[i], i+1);
  Rank['R_' + symbols[i]] = rank;
  Rank.ALL.push(rank);
}

Rank.R_A._hival = 14;
