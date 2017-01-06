'use strict';


module.exports = function(data) {
  this.buffs = data;
  this.colors = data.readUIntLE(0,34);

};
