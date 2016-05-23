import Panda from './Panda';
import RedPanda from './RedPanda';

let pandaJohn = new Panda('John');
console.log(pandaJohn);
pandaJohn.eat();
pandaJohn.sleep();

let pandaPoo = new Panda('Poo', 16);
console.log(pandaPoo);
pandaPoo.eat('foods');
pandaPoo.age = 17;

let redPandaFox = new RedPanda('Fox', 5);
console.log(redPandaFox);
redPandaFox.age = 6;
redPandaFox.eat();
redPandaFox.sleep();


