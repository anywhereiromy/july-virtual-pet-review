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
     //act
     const pet = new Pet('Fido');
     pet.growUp();
     //assertion
     expect (pet.age).toEqual (1);
   });

   test ('increments the hunger by 5', () => {
    //act
    const pet = new Pet('Fido');
    pet.growUp();
    //assertion
    expect (pet.hunger).toEqual (5);
  });

  test ('decrements the fitness by 3', () => {
    //act
    const pet = new Pet('Fido');
    pet.growUp();
    //assertion
    expect (pet.fitness).toEqual (7);
  });
});