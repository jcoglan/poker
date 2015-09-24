import { Pattern, val, ANY } from '../pattern';

export default class ThreeOfAKind {
  static match(index) {
    return ['Three of a kind', this.pattern().fill(index)];
  }

  static pattern() {
    let rank = val('rank');
    return new Pattern([rank, ANY], [rank, ANY], [rank, ANY]);
  }
}
