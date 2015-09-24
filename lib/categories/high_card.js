import { Pattern, val, ANY } from '../pattern';

export default class HighCard {
  static match(index) {
    return ['High card', this.pattern().fill(index)];
  }

  static pattern() {
    let rank = val('rank');
    return new Pattern([rank, ANY]);
  }
}
