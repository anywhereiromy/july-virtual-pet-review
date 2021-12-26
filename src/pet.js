
const vPet = {
    minAge: 0,
    maxAge: 30,
    minHunger: 0,
    maxHunger: 10,
    minFitness: 0,
    maxFitness: 10,
    fitnessThreshold: 3,
    hungerThreshold: 5,
    errorMessage: 'Your pet is no longer alive :('
}


class Pet {
    constructor (name) {
        this.name = name;
        this.age = vPet.minAge;
        this.hunger = vPet.minHunger;
        this.fitness = vPet.maxFitness;
    }

    get isAlive () {
        return this.fitness > vPet.minFitness && this.hunger < vPet.maxHunger && this.age < vPet.maxAge;
    }
   
    growUp () {
        if (!this.isAlive) throw new Error (vPet.errorMessage);

        this.age ++;
        this.hunger += 5;
        this.fitness -= 3;
    }

    walk () {
        if (!this.isAlive) throw new Error (vPet.errorMessage);
        
        if ((this.fitness + 4) <= vPet.maxFitness) {
            this.fitness += 4;
        } else {
            this.fitness = vPet.maxFitness;
        };
    }

    feed () {
        if (!this.isAlive) throw new Error (vPet.errorMessage);

        if ((this.hunger - 3) >= vPet.minHunger) {
            this.hunger -= 3;
        } else {
            this.hunger = vPet.minHunger;
        };
    }

    checkUp () {
        if (!this.isAlive) throw new Error (vPet.errorMessage);

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