const util = require('util');
const fs = require('fs');
const markov = require('markov');
const m = markov(1);

const seed = fs.createReadStream(__dirname + '/data.txt');
m.seed(seed, function() {
  const stdin = process.openStdin();
  util.print('> ');

  stdin.on('data', function(line) {
    const res = m.respond(line.toString()).join(' ');
    console.log(res);
    util.print('> ');
  });
});
