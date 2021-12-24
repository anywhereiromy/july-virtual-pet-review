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
   })
});