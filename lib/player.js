import Hand from './hand';

export default class Player {
  emptyHand() {
    this.hand = new Hand();
  }

  deal(card) {
    this.hand.add(card);
  }
}
