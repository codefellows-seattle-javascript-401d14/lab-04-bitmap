// 'use strict';
// const expect = require('chai').expect;
// const main= require('../index.js');
//
//
// describe('test our index', function() {
//   describe('testing with valid input', function() {
//     let mockData = {
//       id: 'BM',
//       filesize: 66616,
//       width: 256,
//       height: 256,
//     };
//     let filePaths = `${__dirname}/../outputs/output.bmp`;
//     it('should return id', function(done){
//       main(filePaths, function(err, data){
//         if (err) done(err);
//         for (var key in mockData) {
//           expect(mockData[key]).to.equal(data[key]);
//         }
//         done();
//       });
//     });
//   });
//
//   describe('testing with invalid input', function() {
//     it('return an error please!', function(done) {
//       main(34, function(err, data){
//         expect(!!err).to.equal(true);
//         console.log(data);
//         done();
//       });
//     });
//   });
// });
