export default class Index {
  constructor(ranks, suits) {
    this._ranks = ranks;
    this._suits = suits;
  }

  clone() {
    let ranks = this._ranks.map(([rank, [...cards]]) => [rank, [...cards]]),
        suits = this._suits.map(([suit, [...cards]]) => [suit, [...cards]]);

    return new Index(ranks, suits);
  }

  mostCommonRank() {
    return this._ranks.shift();
  }

  mostCommonSuit() {
    return this._suits.shift();
  }
}
