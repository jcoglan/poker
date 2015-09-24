export function oddsN(total, hits, turns, wins) {
  if (wins > turns) return new Rational(0);

  let misses = total - hits,
      fails  = turns - wins,
      odds   = new Rational(binomial(turns, wins));

  while (wins--) {
    odds   = odds.mul(new Rational(hits, total));
    hits  -= 1;
    total -= 1;
  }
  while (fails--) {
    odds    = odds.mul(new Rational(misses, total));
    misses -= 1;
    total  -= 1;
  }
  return odds.normalize();
}

export function oddsRange(total, hits, turns, min, max) {
  let odds = new Rational(0);
  for (let i = min; i <= max; i++) odds = odds.add(oddsN(total, hits, turns, i));
  return odds.normalize();
}

function binomial(n, k) {
  let c = 1;
  for (let i = 1; i <= k; i++) {
    c *= (n + 1 - i) / i;
  }
  return c;
}

function gcd(a, b) {
  if (b === 0) return Math.abs(a);
  let remainder = a - Math.floor(a / b) * b;
  return gcd(b, remainder);
}

class Rational {
  constructor(numerator, denominator = 1) {
    this._numerator   = numerator;
    this._denominator = denominator;
  }

  add(x) {
    return new Rational(
      this._numerator * x._denominator + x._numerator * this._denominator,
      this._denominator * x._denominator
    );
  }

  mul(x) {
    return new Rational(
      this._numerator * x._numerator,
      this._denominator * x._denominator
    );
  }

  normalize() {
    let k = gcd(this._numerator, this._denominator);
    this._numerator   /= k;
    this._denominator /= k;
    return this;
  }

  toFloat() {
    return this._numerator / this._denominator;
  }

  inspect() {
    return '(' + this._numerator + '/' + this._denominator + ')';
  }
}
