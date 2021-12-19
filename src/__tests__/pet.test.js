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