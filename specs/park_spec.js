const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur1 = new Dinosaur('Barny', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Godzilla', 'carnivore', 50);
    dinosaur3 = new Dinosaur('Dino', 'carnivore', 50);
    dinosaur4 = new Dinosaur('Blue', 'carnivore', 50);

    park = new Park("Jurassic Park", 5.50, [dinosaur1,dinosaur2,dinosaur3])
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
    assert.deepStrictEqual(actual, [dinosaur1,dinosaur2,dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dinosaur4)
    actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1,dinosaur2,dinosaur3,dinosaur4]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDino(dinosaur1)
    actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur2,dinosaur3]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
