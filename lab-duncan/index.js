'use strict';

const bitmapIO = require('./lib/bitmap-io.js');

const infile = process.argv[2];
const outfile = process.argv[3];
const transform = process.argv[4];
const arg = process.argv[5];

if (process.argv.length < 5){
  let help = require('./lib/help-message.js');
  console.error(help);
  process.exit(1);
}

// read in bitmap
bitmapIO.readBitmap(infile)
.then(bitmap => {
  // check if user requested transform exits
  if(!bitmap[transform])
    return Promise.reject('tansform not available');

  // do the transform
  return bitmap[transform](arg) // if arg is not set
})
.then(bitmap => {
  // write out file
  return bitmapIO.writeBitmap(outfile, bitmap);
})
.then(() => {
  console.log('success');
})
.catch(err => {
  console.error(err.message);
});
