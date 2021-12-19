function Pet(name) {

    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.growUp = function() {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;};
    this.walk = function () {
        if ((this.fitness + 4) <= 10) {
            this.fitness += 4;
          } else {
            this.fitness = 10;
          }
        };
    this.feed = function () {
        if ((this.hunger - 3) > 0) {
            this.hunger -= 3;
        }else{
            this.hunger = 0;
        }
    };
    this.checkUp = function () {
        if (this.fitness <= 3 && this.hunger >= 5) {
            return 'I am hungry AND I need a walk';
        }else if (this.fitness > 3 && this.hunger < 5) {
            return 'I feel great!';
        }else if (this.fitness <= 3) {
            return 'I need a walk';
        }else{
            return 'I am hungry';
        }
    }
};


module.exports = Pet;
