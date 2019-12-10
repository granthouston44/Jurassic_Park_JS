const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park("Jurassic Park", 5.50, ['Barny', 'Godzilla', 'Dino'])
  })

  it('should have a name', function(){
    actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function(){
    actual = park.amount;
    assert.strictEqual(actual, 5.50);
  });

  it('should have a collection of dinosaurs', function(){
    actual = park.dinosaurs;
    assert.deepStrictEqual(actual, ['Barny', 'Godzilla', 'Dino']);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino('Blue')
    actual = park.dinosaurs;
    assert.deepStrictEqual(actual, ['Barny', 'Godzilla', 'Dino', 'Blue']);
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
