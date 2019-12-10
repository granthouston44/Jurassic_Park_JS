const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur1 = new Dinosaur('Barny', 'herbivore', 50);
    dinosaur2 = new Dinosaur('Godzilla', 'carnivore', 23);
    dinosaur3 = new Dinosaur('Dino', 'herbivore', 87);
    dinosaur4 = new Dinosaur('Blue', 'carnivore', 29);

    park = new Park("Jurassic Park", 5.50, [dinosaur1,dinosaur2,dinosaur3])
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function(){
    const actual = park.amount;
    assert.strictEqual(actual, 5.50);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
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
    actual = park.mostPopularDino();
    assert.strictEqual(actual, dinosaur3.guestsAttractedPerDay)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    actual = park.all('Barny');
    assert.deepStrictEqual(actual, [dinosaur1]);
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
