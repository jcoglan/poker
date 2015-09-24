import { Pattern, val, ANY } from '../pattern';

export default class OnePair {
  static match(index) {
    return ['One pair', this.pattern().fill(index)];
  }

  static pattern() {
    let rank = val('rank');
    return new Pattern([rank, ANY], [rank, ANY]);
  }
}
