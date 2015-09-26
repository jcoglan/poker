import { oddsAtLeast } from '../lib/math';

let x = oddsAtLeast(47, 9, 2, 1),
    p = Math.round(x.toFloat() * 10000) / 100;

console.log(p, x);
