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