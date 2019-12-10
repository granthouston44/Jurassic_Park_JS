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

module.exports = Park;
