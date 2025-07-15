import { Dog } from './09-protected';

function getValue <T>(value: T){
  return value;
}

getValue<number>(10).toFixed(2);
getValue<string>('word').toLowerCase();
getValue<boolean>(true);
getValue([]).forEach;

const fifi = new Dog('Fifi', 'Daniel');
getValue<Dog>(fifi).woof(3);
