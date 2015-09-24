function permute(list) {
  var end = list.length - 1, i = end, j, value;

  if (end <= 0) return false;

  while (true) {
    value = list[i--];

    if (list[i] < value) {
      value = list[i];
      for (j = end; list[j] <= value; j -= 1);
      swap(list, i, j);
      reverse(list, i + 1, end);
      return true;
    }

    if (i === 0) {
      reverse(list, 0, end);
      return false;
    }
  }

  return true;
}

function reverse(list, start, end) {
  while (start < end) {
    swap(list, start, end);
    start += 1;
    end -= 1;
  }
}

function swap(list, i, j) {
  var tmp = list[i];
  list[i] = list[j];
  list[j] = tmp;
}





var list = [0,0,0,0,1,1], i = 0;

do {
  console.log(list);
  i += 1;
}
while (permute(list));

console.log(i, (6*5*4*3)/ (4*3*2*1));


function prob(total, hits, turns, wins) {
  var misses = total - hits,
      fails  = turns - wins,
      plan   = new Array(turns),
      prob   = 0;

  var T, H, M, i, p;

  for (i = 0; i < turns; i++)
    plan[turns - i - 1] = (i < wins) ? 1 : 0;

  do {
    T = total; H = hits; M = misses;
    p = 1;

    for (i = 0; i < turns; i++) {
      if (plan[i] === 1) {
        p *= H / T;
        H -= 1;
      } else {
        p *= M / T;
        M -= 1;
      }
      T -= 1;
    }
    prob += p;
  }
  while (permute(plan))

  return prob;
}

// for (var i = 0; i < 10000; i++) prob(52, 13, 6, 2);

console.log(
    prob(52, 13, 6, 2)
);
console.log(Math.pow(39/52, 4) * Math.pow(13/52, 2) * (6*5) / (2*1));


var players       = 4,

    available     = 13,
    required      = 5,

    community     = 3,
    communityWins = 3,
    holeWins      = 1;

var hiddenDealt = 2 * (players - 1),
    deckRemain  = 52 - community - 2,
    winRemain   = available - communityWins - holeWins,
    minRequired = required - communityWins - holeWins,
    toDraw      = 5 - community;

var i, j, k = 0;

for (i = 0; i <= hiddenDealt; i++) {
  for (j = minRequired; j <= toDraw; j++) {
    k += prob(deckRemain, winRemain, hiddenDealt, i) *
         prob(deckRemain - hiddenDealt, winRemain - i, toDraw, j);
  }
}
console.log(hiddenDealt);
console.log('A', Math.round(k * 100000) / 1000);


function binomial(n, k) {
  var m = n - k,
      t = (m < k) ? m : k,
      coeff = 1;

  while (t--) coeff *= (n - t) / (t + 1);
  return coeff;
}

function prob2(total, hits, turns, wins) {
  var misses = total - hits,
      fails  = turns - wins,
      odds   = binomial(turns, wins);

  while (wins--) {
    odds  *= hits / total;
    hits  -= 1;
    total -= 1;
  }
  while (fails--) {
    odds   *= misses / total;
    misses -= 1;
    total  -= 1;
  }
  return odds;
}

k = 0;

for (j = minRequired; j <= toDraw; j++) {
  k += prob2(deckRemain, winRemain, toDraw, j);
}
console.log('B', Math.round(k * 100000) / 1000);
