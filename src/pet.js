class Pet {
    constructor (name) {

    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    }

    get isAlive () {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
        }

    growUp () {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;}

    walk () {
        if ((this.fitness + 4) <= 10) {
            this.fitness += 4;
          } else {
            this.fitness = 10;
          }
        }

    feed () {
        if ((this.hunger - 3) > 0) {
            this.hunger -= 3;
        }else{
            this.hunger = 0;
        }
    }

    checkUp () {
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
