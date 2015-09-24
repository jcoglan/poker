import { Pattern, val, ANY } from '../pattern';

export default class Flush {
  static match(index) {
    return ['Flush', this.pattern().fill(index)];
  }

  static pattern() {
    let suit = val('suit');
    return new Pattern([ANY, suit], [ANY, suit], [ANY, suit], [ANY, suit], [ANY, suit]);
  }
}
