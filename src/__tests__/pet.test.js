const { Pet } = require ('../pet.js');

describe ('constructor', () => {
  test ('returns an object', () => {
    expect (new Pet('Fido')).toBeInstanceOf(Object);
  });
});