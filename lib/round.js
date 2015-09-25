import Card from './card';
import categories from './categories';
import Hand from './hand';

const STEPS = [['flop', 3], ['turn', 1], ['river', 1]];

export default class Round {
  constructor(players) {
    this._players   = players;
    this._deck      = Card.shuffledDeck();
    this._deckSize  = this._deck.length;
    this._community = new Hand();

    for (let player of players) player.emptyHand();

    for (let i = 0; i < 2 * players.length; i++)
      players[i % players.length].deal(this._deck.shift());

    this._step = 0;
  }

  step() {
    let step = STEPS[this._step++];
    if (!step) return;

    for (let i = 0; i < step[1]; i++)
      this._community.add(this._deck.shift());

    this._stepName = step[0];
  }

  communityCards() {
    return this._community;
  }

  stepName() {
    return this._stepName;
  }

  report(player) {
    let communityHand = this._community.index(),
        combinedHand  = this._community.merge(player.hand).index();

    console.log('\nYour options:');
    for (let category of categories) {
      let [name, hand] = category.match(combinedHand.clone());
      while (name.length < 20) name += ' ';
      console.log('    ', name, hand);
    }

    console.log('\nTheir options:');
    for (let category of categories) {
      let [name, hand] = category.match(communityHand.clone());
      while (name.length < 20) name += ' ';
      console.log('    ', name, hand);
    }
  }
}
