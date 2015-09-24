import { Pattern, val, ANY } from '../pattern';

export default class TwoPair {
  static match(index) {
    return ['Two pair', this.pattern().fill(index)];
  }

  static pattern() {
    let highRank = val('rank'),
        lowRank  = val('rank');

    return new Pattern([highRank, ANY], [highRank, ANY],
                       [lowRank,  ANY], [lowRank,  ANY]);
  }
}
