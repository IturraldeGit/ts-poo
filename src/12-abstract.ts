import { Animal, Dog } from './09-protected';

const animal = new Animal('Elite');
animal.greeting();

const cheis = new Dog('Cheis', 'Daniel');
cheis.greeting();
cheis.woof(2);