
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;


class Pet {
    constructor (name) {
        this.name = name;
        this.age = 0;
        this.hunger = 0;
        this.fitness = 10;
    }

    get isAlive () {
        return this.fitness > 0 && this.hunger < 10 && this.age < 30;
    }
   
    growUp () {
        this.age ++;
        this.hunger += 5;
        this.fitness -= 3;
    }

    walk () {
        if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
            this.fitness += 4;
        } else {
            this.fitness = MAXIMUM_FITNESS;
        };
    }

    feed () {
        if ((this.hunger - 3) >= MINIMUM_HUNGER) {
            this.hunger -= 3;
        } else {
            this.hunger = MINIMUM_HUNGER;
        };
    }

    checkUp () {
        if (this.fitness <= 3 && this.hunger < 5) {
            return 'I need a walk';
        }
        if (this.hunger >= 5 && this.fitness > 3) {
            return 'I am hungry';
        }
        if (this.fitness <= 3 && this.hunger >= 5) {
            return 'I am hungry AND I need a walk';
        }
        return 'I feel great!';
    }
}





module.exports = { Pet };