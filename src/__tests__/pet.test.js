const { Pet } = require ('../pet.js');

describe ('constructor', () => {

  test ('returns an object', () => {
    expect (new Pet('Fido')).toBeInstanceOf(Object);
  });

  test ('sets the name property', () => {
    //act
    const pet = new Pet('Fido');
    //assertion
    expect (pet.name).toEqual ('Fido');
  });
});