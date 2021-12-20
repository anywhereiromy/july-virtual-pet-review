const Pet = require('../pet.js');

describe('constructor', () => {

  it('sets the name property', () => {
    const pet = new Pet('Fido');

    expect(pet.name).toEqual('Fido');
  });
});

describe('growUp', () => {

  it('increments the age by 1 and the hunger by 5, decrements the fitness by 3', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });
});

describe('walk', () => {

  it('increases fitness by 4', () => {
    const pet = new Pet('fido');

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
  });

  it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
});

describe('feed', () => {

  it('decrease hunger by 3', () => {
    const pet = new Pet('fido');

    pet.hunger = 4;
    pet.feed();

    expect(pet.hunger).toEqual(1);
  });

  it('decrease hunger by to a minimum of 0', () => {
    const pet = new Pet('fido');

    pet.fitness = 2;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });
});

describe('checkUp', () => {

  it(`return 'I need a walk' if the pet's fitness is 3 or less`, () => {
    const pet = new Pet('fido');

    pet.fitness = 3;
    pet.checkUp();

    expect(pet.checkUp()).toEqual('I need a walk');
  });

  it(`return 'I am hungry' if the pet's hunger is 5 or more`, () => {
    const pet = new Pet('fido');

    pet.hunger = 6;
    pet.checkUp();

    expect(pet.checkUp()).toEqual('I am hungry');
  });

  it(`return 'I am hungry AND I need a walk' if both of the above are true`, () => {
    const pet = new Pet('fido');

    pet.hunger = 7;
    pet.fitness = 2
    pet.checkUp();

    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
  });

  it(`return 'I feel great!' if neither of the above is true`, () => {
    const pet = new Pet('fido');

    pet.hunger = 3;
    pet.fitness = 7
    pet.checkUp();

    expect(pet.checkUp()).toEqual('I feel great!');
  });
});

describe('isAlive', () => {

  it('return true if age less than 30, hunger less than 10 and fitness more than 0', () => {
    const pet = new Pet('fido');

    pet.hunger = 5;
    pet.fitness = 5;
    pet.age = 23;

    expect(pet.isAlive).toEqual(true);
  });  

  it('otherwise, return false', () => {
    const pet = new Pet('fido');

    pet.hunger = 12;
    pet.fitness = 5;
    pet.age = 23;

    expect(pet.isAlive).toEqual(false);
  });  
});