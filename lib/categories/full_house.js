import { Pattern, val, ANY } from '../pattern';

export default class FullHouse {
  static match(index) {
    return ['Full house', this.pattern().fill(index)];
  }

  static pattern() {
    let rank3 = val('rank'),
        rank2 = val('rank');

    return new Pattern([rank3, ANY], [rank3, ANY], [rank3, ANY],
                       [rank2, ANY], [rank2, ANY]);
  }
}
