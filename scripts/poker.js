import { inspect } from 'util';
import Player from '../lib/player';
import Round from '../lib/round';


function rule() {
  console.log('------------------------------------------------------------------------');
}


rule();

let p = new Player(),
    g = new Round([p]);

g.step(); g.step();

console.log('Step:', g.stepName());
console.log('Community:', g.communityCards());
console.log('Your hand:', p.hand);

rule();

g.report(p);

rule();
