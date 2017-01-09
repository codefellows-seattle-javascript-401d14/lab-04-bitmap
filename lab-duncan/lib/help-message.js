'use strict';

module.exports = `USAGE ERROR:
  try: node index.js /infile/path.bmp /outfile/path.bmp tranform *amount
       *amount must be a number and is only used on some transforms

  transforms:
    invert
    bandw
    lighten amount (default  10)
    darken amount (default  10)`;
