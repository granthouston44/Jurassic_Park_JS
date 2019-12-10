const Park = function(name, amount, dinosaurs){
this.name = name;
this.amount = amount;
this.dinosaurs = dinosaurs;
}

Park.prototype.addDino = function (name) {
  this.dinosaurs.push(name);
};


module.exports = Park;
