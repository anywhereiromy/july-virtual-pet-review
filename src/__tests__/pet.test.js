const { Pet } = require ('../pet.js');

const ERROR_MESSAGE = 'Your pet is no longer alive :(';

let fido;
beforeEach(() => {
    fido = new Pet('Fido');
});

describe ('Pet', () => {

  test('Returns an instance of Pet', () => {
    expect(fido).toBeInstanceOf(Pet);
  });

  test('Returns the pets name', () => {
    expect(fido.name).toBe('Fido');
  });
});

describe ('growUp', () => {
  
  test ('has an initial age of 0', () => {
    expect (fido.age).toEqual (0);
   });

   test ('increments the age by 1', () => {
    fido.growUp();
    expect (fido.age).toEqual (1);
  });
  
  test ('has an initial hunger of 0', () => {
    expect (fido.hunger).toEqual (0);
  })

  test ('increments the hunger by 5', () => {
    fido.growUp();
    expect (fido.hunger).toEqual (5);
  });

  test ('has an initial fitness of 10', () => {
    expect (fido.fitness).toEqual (10);
  });

  test ('decrements the fitness by 3', () => {
    fido.growUp();
    expect (fido.fitness).toEqual (7);
  });

  test(`growUp should throw error: "${ERROR_MESSAGE}"`, () => {
    fido.age = 30;
    expect(fido.isAlive).toBe(false);
    expect(() => {
        fido.growUp();
    }).toThrowError(new Error(ERROR_MESSAGE));
  });
});
  
describe ('walk', () => {
  test('fitness cannot go above 10', () => {
    fido.fitness = 10;
    fido.walk();
    expect(fido.fitness).toBe(10);
  });

  test('increments the fitness property by 4', () => {
    fido.fitness = 5;
    fido.walk();
    expect(fido.fitness).toBe(9);
  });

  test(`walk should throw error: "${ERROR_MESSAGE}"`, () => {
    fido.fitness = 0;
    expect(fido.isAlive).toBe(false);
    expect(() => {
        fido.walk();
    }).toThrowError(new Error(ERROR_MESSAGE));
  });
});
   
describe ('feed', () => {

  test ('hunger cannot go under 0', () => {
    fido.hunger = 2;
    fido.feed();
    expect (fido.hunger).toEqual(0);
  });

  test ('decrements the hunger by 3', () => {
    fido.hunger = 4;
    fido.feed();
    expect (fido.hunger).toEqual (1);
  });

  test(`feed should throw error: "${ERROR_MESSAGE}"`, () => {
    fido.fitness = 0;
    expect(fido.isAlive).toBe(false);
    expect(() => {
        fido.feed();
    }).toThrowError(new Error(ERROR_MESSAGE));
  });
});

describe ('checkUp', () => {
  test('return "I need a walk" if fitness is 3 or less', () => {
    fido.fitness = 3;
    expect(fido.checkUp()).toEqual('I need a walk');
  });

  test('return "I am hungry" if hunger is 5 or more', () => {
    fido.hunger = 6;
    expect(fido.checkUp()).toEqual('I am hungry');
  });

  test('return "I am hungry AND I need a walk" if hunger is 5 or more AND fitness is 3 or less', () => {
    fido.fitness = 2;
    fido.hunger = 6;
    expect(fido.checkUp()).toEqual('I am hungry AND I need a walk');
  });
  test('return "I feel great!" if none of the above are true', () => {
    expect(fido.checkUp()).toEqual('I feel great!');
   });
});

describe ('isAlive', () => {
  test('return false if fitness is 0 or less', () => {
    fido.fitness = 0;
    expect(fido.isAlive).toBe(false);
  });

  test('return false if hunger is 10 or more', () => {
    fido.hunger = 10;
    expect(fido.isAlive).toBe(false);
  });

  test('return false if age is 30 or more', () => {
    fido.age = 30;
    expect(fido.isAlive).toBe(false);
  });
  test('return true if none of the above are true', () => {
    expect(fido.isAlive).toBe(true);
  });
});

describe ('haveBaby', () => {

  test('creates a child pet from inside its parent pet', () => {
    const parent = new Pet ('Tee');
    parent.haveBaby('Mo');
    expect(parent.children).toBeInstanceOf(Array);
  });
});

describe ('adoptChild', () => {

  let parent;
  let child;

  beforeEach(() => {
    parent = new Pet("Fido");
    child = new Pet("Fido Jnr");
  });

  test("takes another object and adds it to the children property", () => {
    parent.adoptChild(child);
    expect(parent.children).toBeInstanceOf(Array);
  });
});