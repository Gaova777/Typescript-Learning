import { Animal, Dog } from './09-protected';

const animal = new Animal('elite');
animal.greeting();

const cheis = new Dog('cheis', 'nico');
cheis.greeting();
cheis.woof(2);
// in conclussion you can create class abstract but you can't instance this class, just utilize the dougther class
