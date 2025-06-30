export class Animal {
  constructor(public name:string) {}

  move() {
    console.log('Moving along!');
  }

  greeting(): string {
    return `Hello, my name is ${this.name}`;
  }
}

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string
  ) {
    super(owner);

  }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('Woof!');
    }
  }
}

const fifi = new Animal('Fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('Cheis', 'Daniel');
cheis.move();
console.log(cheis.greeting());
cheis.woof(3);
console.log(`The owner of ${cheis.name} is ${cheis.owner}`);