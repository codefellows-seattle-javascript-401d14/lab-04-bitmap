'use strict';

const bitmapIO = require('./lib/bitmap-io.js');

const infile = process.argv[2];
const outfile = process.argv[3];
const transform = process.argv[4];

if (process.argv.length !== 5){
  let help = require('./lib/help-message.js');
  console.error(help);
  process.exit(1);
}


bitmapIO.readBitmap(infile)
.then(bitmap => {
  return bitmapIO.writeBitmap(outfile, bitmap);
})
.then(() => {
  console.log('success');
})
.catch(console.error);
