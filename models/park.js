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
  let popularDino = this.dinosaurs[0];
  for (const dinosaur of this.dinosaurs){
    if (dinosaur.guestsAttractedPerDay > popularDino.guestsAttractedPerDay){
      popularDino = dinosaur;
    }
  }
  return popularDino;
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

Park.prototype.guestsPerDay = function () {
  let totalGuests = 0;
  for (const dino of this.dinosaurs){
    totalGuests += dino.guestsAttractedPerDay;
  }
  return totalGuests;
};

Park.prototype.guestsPerYear = function () {
  guestsYear = this.guestsPerDay() * 365;
  return guestsYear;
};

Park.prototype.revenueOneYear = function () {
  total = this.guestsPerYear() * this.amount;
  return total;
};


//why is this bad and why does it work?

// because of the way i placed the dinos in the array, this will pass
// the species in the test has barny at index[0] and index[3]
// because they are not next to each other, this is fine - howver
// if the dinos were next to each other then this would have failed.
// because as we're looping through the array, it believes its already got to
// index[0], it then alters the index of the existing array -
// so if the species were actually at index[0] and index[1], the loop would change
// index[1] to zero, and skip past it.
//
// LOOK UP
// We want to avoid removing items from arrays while iterating over them.
// This is because iteration uses the index number to access the current item,
// and if you remove an item during one of the iterations, the position of each of
// the following items will be changed and lead to unexpected results.
// You will need to keep this principle in mind when removing all the dinosaurs of
// a particular species.


// Park.prototype.removeAll = function (species) {
//   for( const dino of this.dinosaurs){
//     if ( dino.species === species)
//     this.dinosaurs.splice(this.dinosaurs.indexOf(dino),1);
// }
// };


//the better way to do it
Park.prototype.removeAll = function (species) {
  const newDinosaurs = [];

  for (const dinosaur of this.dinosaurs){
    if (dinosaur.species !== species) {
      newDinosaurs.push(dinosaur);
    }
  }
  this.dinosaurs = newDinosaurs;
};

Park.prototype.numberOfDinosByDiet = function () {
  const dinosByDiet = {}

  for (const dino of this.dinosaurs){
    if (dinosByDiet[dino.diet]){
      dinosByDiet[dino.diet] += 1;
    }
    else {
      dinosByDiet[dino.diet] = 1;
    }
  }
  return dinosByDiet;
};


module.exports = Park;
