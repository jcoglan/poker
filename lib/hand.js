import { inspect } from 'util';
import Index from './index';

export default class Hand {
  constructor(cards = []) {
    this._cards = cards;
  }

  add(card) {
    this._cards.push(card);
  }

  merge(other) {
    return new Hand(this._cards.concat(other._cards));
  }

  index() {
    let rankIndex = new Map(),
        suitIndex = new Map();

    for (let card of this._cards) {
      let rankRecord = rankIndex.get(card.rank) || [];
      rankRecord.push(card);
      rankIndex.set(card.rank, rankRecord);

      let suitRecord = suitIndex.get(card.suit) || [];
      suitRecord.push(card);
      suitIndex.set(card.suit, suitRecord);
    }

    let sortedRanks = Array.from(rankIndex).sort(
      ([aRank, a], [bRank, b]) => {
        let diff = b.length - a.length;
        return (diff !== 0) ? diff : bRank.compare(aRank);
    });

    let sortedSuits = Array.from(suitIndex).sort(
      ([aSuit, a], [bSuit, b]) => b.length - a.length
    );
    return new Index(sortedRanks, sortedSuits);
  }

  inspect() {
    return ' ' + this._cards.map(inspect).join('  ') + ' ';
  }
}
