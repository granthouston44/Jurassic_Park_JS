const Park = function(name, amount, dinosaurs){
  this.name = name;
  this.amount = amount;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDino = function (dino) {
  this.dinosaurs.push(dino);
};

Park.prototype.removeDino = function (dino) {
  this.dinosaurs.splice(this.dinosaurs.indexOf(dino),1);
};

Park.prototype.mostPopularDino = function () {
  let guestNumbers = [];
  for (const dino of this.dinosaurs){
    guestNumbers.push(dino.guestsAttractedPerDay);
  }
  let max = guestNumbers.reduce(function(a,b){
    return Math.max(a,b)
  })
  return max;
};

Park.prototype.all = function (species){
  let dinoSpecies = [];
  for (const dino of this.dinosaurs){
    if (dino.species === species){
      dinoSpecies.push(dino);
    }
  }
  return dinoSpecies;
};


module.exports = Park;
