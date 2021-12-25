const { Pet } = require ('../pet.js');

describe ('constructor/prototype', () => {

  test ('returns an object', () => {
    expect (new Pet('Fido')).toBeInstanceOf(Object);
  });

  test ('sets the name property', () => {
    //act
    const pet = new Pet('Fido');
    //assertion
    expect (pet.name).toEqual ('Fido');
  });

  test ('has an initial age of 0', () => {
    //act
    const pet = new Pet('Fido');
    //assertion
    expect (pet.age).toEqual (0);
   });

   test ('increments the age by 1', () => {
     //arange
     const pet = new Pet('Fido');
     //act
     pet.growUp();
     //assertion
     expect (pet.age).toEqual (1);
   });

   test ('increments the hunger by 5', () => {
    //arrange
    const pet = new Pet('Fido');
    //act
    pet.growUp();
    //assertion
    expect (pet.hunger).toEqual (5);
  });

  test ('decrements the fitness by 3', () => {
    //arrange
    const pet = new Pet('Fido');
    //act
    pet.growUp();
    //assertion
    expect (pet.fitness).toEqual (7);
  });

  test ('increments the fitness by 4', () => {
    //arrange
    const pet = new Pet('Fido');
    pet.fitness = 8;
    //act
    pet.walk();
    //assertion
    expect (pet.fitness).toEqual (10);
  })

  test ('decrements the hunger by 3', () => {
    //arrange
    const pet = new Pet('Fido');
    pet.hunger = 2;
    //act
    pet.feed();
    //assertion
    expect (pet.hunger).toEqual (0);
  })
});