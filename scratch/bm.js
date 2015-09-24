import { Suite } from 'benchmark';
import { binomial, binomial2 } from './lib/math';

let suite = new Suite();

suite.add('binomial', function() {
  binomial(5, 2);
});

suite.add('binomial2', function() {
  binomial2(5, 2);
});

suite.on('complete', function() {
  for (let i = 0; i < suite.length; i++)
    console.log( suite[i].toString() );
});

suite.run();
