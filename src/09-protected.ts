export class Animal {
  constructor(protected name:string) {}

  move() {
    console.log('Moving along!');
  }

  greeting(): string {
    return `Hello, my name is ${this.name}`;
  }

  protected doSomething() {
    console.log('Doing something');
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
      console.log(`Woof! ${this.name}`);
    }
    this.doSomething();
  }

  move(): void {
    console.log('Dog is moving along!');
    super.move();
  }

  get dogName() {
    return this.name;
  }

  set dogName(name: string) {
    this.name = name;
  }
}

const fifi = new Animal('Fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('Cheis', 'Daniel');
cheis.move();
console.log(cheis.greeting());
cheis.woof(3);

console.log(cheis.owner);
cheis.dogName = 'Cora';
cheis.woof(1);
console.log(`The owner of ${cheis.dogName} is ${cheis.owner}`);